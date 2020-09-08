import React from "react"
import "../styles/navbar.css"
import logo from "../assets/logo.png"

export default () => (
    <nav className="flex gitna items-center flex-wrap navbar">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="smaller" alt='UPDOG' src={logo} />
        </div>
    </nav>
)