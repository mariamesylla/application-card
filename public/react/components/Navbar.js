import React, { useState } from "react"
import { Link } from 'react-router-dom'

export const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);


    return (
      <nav className="flex items-center justify-between flex-wrap p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Link to='/'><h1 className="w-full text-3xl font-medium text-blue-500">Team Blue.</h1></Link>
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
          <div className="text-sm lg:flex-grow text-left lg:text-right">
            <a href="/items" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4  hover:text-black duration-500">
              Items
            </a>
            <a href="/sauces" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Sauces
            </a>
            <a href="/createItem" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Add Item
            </a>
            <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Register
            </a>
          </div>
        </div>
      </nav>
    )
}