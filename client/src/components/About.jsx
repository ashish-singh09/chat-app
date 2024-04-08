import Footer from "./Footer";

export default function About() {
    return (
        <>
            <div className="h-[60vh]">
                <h1 className='text-3xl font-bold text-center mt-10'>About Chat-App</h1>
                <p className='text-center mt-5'>Chat-App is a simple chat application built with REACT, EXPRESS & NODEJS</p>
                <p className='text-center mt-3'>This project uses Socket.io for real-time communication and Redis for storing messages</p>

                <div className='mt-10'>
                    <h2 className='text-2xl font-bold text-center'>Tech Stack</h2>
                    <ul className='text-center'>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Socket.io</li>
                        <li>Redis</li>
                        <li>Clerk</li>
                    </ul>

                    <p className='text-center mt-5'>This project is open-source and available on <a href='http://github.com'>GitHub</a></p>

                    <p className='text-center mt-5'>Made with ❤️ by Rupal Singh</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
