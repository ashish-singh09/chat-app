import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center text-xl py-6 justify-between px-4 rounded-md bg-stone-100 shadow-md">
                <Link to="/" className="text-rose-500 text-base font-bold md:text-2xl hover:text-rose-600 transition-colors duration-150">Chat-App</Link>

                <div>
                    <ul className="flex items-center gap-3">
                        <li className="hidden md:block hover:scale-[1.04] transition-transform duration-100">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-sm md:text-xl hover:scale-[1.04] transition-transform duration-100">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <SignedIn>
                                <UserButton afterSignOutUrl="/">
                                    {({ user, signOut }) => (
                                        <button
                                            onClick={signOut}
                                            style={{
                                                backgroundColor: 'blue',
                                                color: 'white',
                                                padding: '10px',
                                                borderRadius: '5px'
                                            }}
                                        >
                                            Sign out {user.firstName}
                                        </button>
                                    )}
                                </UserButton>
                            </SignedIn>
                            <SignedOut>
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
                            </SignedOut>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
