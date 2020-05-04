import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-4">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
                <Link to="/"> 
                    BORK!
                </Link>
            </span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="https://github.com/xyzarivera/doggo-classifier-ui" rel="noopener noreferrer" target="_blank"> 
                    Github
                </a>
            </div>
        </div>
    </nav>
)