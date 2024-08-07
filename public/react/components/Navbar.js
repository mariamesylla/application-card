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

      
      <div className={`w-[80%] block flex-grow xl:flex xl:items-center xl:w-auto ease-in-out duration-500 ${isOpen ? "block" : "hidden"}`} >
          <div className="text-xl lg:flex-grow text-left xl:text-right">
          <span class="sm:ml-3">
    <button type="button" class="inline-flex items-center rounded-md bg-black-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
      </svg><a href="/cards" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4  hover:text-black duration-500">
              Cards Info
            </a>
    </button>
  </span>

  <span class="sm:ml-3">
    <button type="button" class="inline-flex items-center rounded-md bg-black-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
      </svg><a href="/Form" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 mr-4 hover:text-black duration-500">
              Apply
            </a>
    </button>
  </span>
  <div class="grid grid-cols-3 divide-x"> </div>
         
          </div>
        </div>
      </nav>
    )
}