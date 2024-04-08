import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className='mt-10 text-center gap-y-5 bg-zinc-800 text-slate-50 py-6 flex flex-col md:flex-row px-4 rounded-md'>
            <div className='flex flex-col items-center md:items-start justify-center md:justify-start'>
                <h2 className='text-rose-500 text-2xl'>Chat-App</h2>
                <p className='opacity-70 mt-2'>
                    &copy; {new Date().getFullYear()} Chat-App. All rights reserved.
                </p>
            </div>

            <div className='flex flex-col items-center md:items-start justify-center md:justify-start md:ml-auto'>
                <h2 className='text-neutral-100 text-2xl'>Links</h2>
                <ul className='flex gap-1 md:ml-auto flex-col'>
                    <li className="opacity-60 hover:opacity-75">
                        <a href='#'>Privacy</a>
                    </li>
                    <li className="opacity-60 hover:opacity-75">
                        <a href='#'>Terms</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col md:items-start items-center justify-start md:ml-auto md:mr-10'>
                <h2 className='text-neutral-100 text-2xl'>We</h2>
                <ul className='flex gap-1 md:ml-auto flex-col'>
                    <li className="opacity-60 hover:opacity-75">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="opacity-60 hover:opacity-75">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
