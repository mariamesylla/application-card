import React, { useState } from "react"
import { Link } from 'react-router-dom'

export const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);


    return (
      <nav className="flex items-center justify-between flex-wrap p-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Link to='/'> <img src="https://www.aexp-static.com/cdaas/one/statics/@americanexpress/static-assets/2.28.0/package/dist/img/brand/centurion-linear-brightblue.svg" width={100}/> </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-300 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
       <div className={`w-[80%] block flex-grow lg:flex lg:items-center lg:w-auto ease-in-out duration-500 ${isOpen ? "block" : "hidden"}`} >
          <div className="text-xl lg:flex-grow text-left lg:text-right">
          <a href="/cards" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4  hover:text-black duration-500">
              Cards Info
            </a>
            <a href="/Form" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Apply
            </a>
            <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Log In
            </a>
          </div>
        </div>
      </nav>
    )
}