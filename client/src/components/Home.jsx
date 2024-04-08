import { Link } from "react-router-dom"
import Footer from "./Footer"

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[65vh]'>
        <h1 className='text-5xl font-bold text-center'>
          Welcome to Chat-App
        </h1>
        <p className='text-center mt-5'>
          A simple chat application built with Clerk and React
        </p>

        <div className='mt-10'>
          <Link to={"/dashboard"} className='px-4 py-2 bg-rose-500 hover:bg-rose-600 hover:text-white active:text-white text-white rounded-md'>
            Get Started
          </Link>

          <Link to={"/about"} className='px-4 py-2 bg-stone-100 border border-violet-200 text-rose-500 rounded-md ml-5'>
            Learn More
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
