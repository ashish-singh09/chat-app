require('dotenv').config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const redis = require("redis");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.BASE_URL, // Replace with your client's origin
    credentials: true,
}));

const redisClient = new redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }
});

redisClient.connect();

redisClient.on('connect', () => {
    console.log('Connected to Redis server');
});
redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

// Serving the Frontend
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html")),
        function (err) {
            res.status(400).send(err);
        }
});

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: process.env.BASE_URL,
        methods: ["GET", "POST"],
        credentials: true,
    },
});

const MAX_MESSAGES = 100;
io.on("connection", async (socket) => {
    // Retrieve and send recent messages on connection
    const messages = await redisClient.LRANGE('chat_messages', 0, MAX_MESSAGES - 1);
    messages.reverse();
    socket.emit('chat_history', messages.map(msg => JSON.parse(msg)));

    socket.on('send_chat', async (msg) => {
        // Add new message to Redis list
        await redisClient.LPUSH('chat_messages', JSON.stringify(msg));
        redisClient.LTRIM('chat_messages', 0, MAX_MESSAGES - 1);
        io.emit('chat', msg);
    });
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at port ${process.env.PORT || 3000}`);
});