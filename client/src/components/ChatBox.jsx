import { useEffect, useState, useRef } from 'react';
import { io } from "socket.io-client";
import { FiUser } from "react-icons/fi";
import { useUser } from "@clerk/clerk-react";

const url = import.meta.env.VITE_BACKEND_URL;

let socket;

const ChatBox = () => {

    const [messages, setMessages] = useState([
        { message: "Hey! what are you doing?", user: "Ashish Singh", username: "ak47", imageUrl: "https://randomuser.me/api" }
    ]);
    const [message, setMessage] = useState('');
    const [length, setLength] = useState(0);
    const { isSignedIn, user } = useUser();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= 200) {
            setMessage(value);
            setLength(value.length);
        }
    }

    const connectSocket = () => {
        socket = io(url, { withCredentials: true });

        socket.on('connect', () => {
            console.log('Connected to socket server');
        });

        socket.on('chat', (msg) => {
            setMessages(prev => [...prev, msg]);
        });

        socket.on('chat_history', (msg) => {
            setMessages(msg);
        });
    }

    const tag = (username) => {
        setMessage(prev => prev + `@${username} `);
    }

    const sendSocketMessage = () => {
        if (message.length > 0 && message.length <= 200) {
            socket.emit('send_chat', { message, user: user.fullName, username: user.username, imageUrl: user.imageUrl });
            setMessage('');
            setLength(0);
        }
    }

    useEffect(() => {

        if (isSignedIn) {
            connectSocket();
        }

        return () => {
            if (socket) {
                socket.disconnect();
                socket.off('connect');
                socket.off('chat');
                socket.off('chat_history');
            }
        }
    }, [isSignedIn]);

    useEffect(scrollToBottom, [messages]);

    return (<>
        <section className="mt-8 mb-4 sticky w-full h-full flex justify-center">
            <div className='container'>
                <div className='chat-box'>
                    <ul className='chat-msg-list'>
                        {messages?.length === 0 ? (
                            <h5 style={{ textAlign: "center" }}>No messages yet!</h5>
                        ) : (
                            messages.map((msg, index) => {
                                return (
                                    <li className={`chat-msg ${index % 2 === 1 ? 'chat-msg-bck' : ''}`} key={"msg" + index}>
                                        <img src={msg.imageUrl} alt='User' className='msg-avatar w-12 h-12 rounded-full object-cover' />
                                        <div className='msg-box'>
                                            <div className='author'>
                                                <FiUser />
                                                <div className='author cursor-pointer' onClick={() => tag(msg.username)}>
                                                    <span>{msg.user}</span>
                                                    <span className='text-xs -mt-1 opacity-60'>@{msg.username}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='chat-text'>{msg.message}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        )}
                        <div ref={messagesEndRef} />
                    </ul>
                </div>

                <div className='flex mt-3'>
                    <input
                        type='text'
                        onChange={handleInputChange}
                        onKeyUp={e => {
                            if (e.key === 'Enter') {
                                sendSocketMessage();
                            }
                        }}
                        value={message}
                        className='form-input flex-grow mr-2 outline-none active:border-[#4b58ad] focus:border-[#4b58ad] py-2 px-4 rounded bg-[#f5f5f5] shadow border border-gray-300'
                        placeholder='Type your message here'
                    />
                    <button
                        className='btn bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded'
                        type='button'
                        onClick={sendSocketMessage}
                    >
                        Send
                    </button>
                </div>
                <div className='limit'>
                    <span>{length}/200</span>
                </div>
            </div>
        </section>
    </>);
}

export default ChatBox;