import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import ChatBox from "./ChatBox";

export default function Dashboard() {
    return (
        <div className="h-full">
            <SignedIn>
                <ChatBox />
            </SignedIn>
            <SignedOut>
                <div className="mt-12 flex flex-col items-center justify-center h-[60vh]">
                    <h1 className='text-5xl font-bold text-center'>
                        Welcome to the Dashboard
                    </h1>
                    <p className='text-center mt-5 mb-10'>
                        Log in to access the dashboard! 🚀
                    </p>

                    <SignInButton
                        afterSignInUrl="/dashboard"
                        style={{
                            backgroundColor: '#f43f5e',
                            color: 'white',
                            padding: '7px',
                            fontWeight: '500',
                            borderRadius: '5px'
                        }}
                    />
                </div>
            </SignedOut>
        </div>
    )
}
