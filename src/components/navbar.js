import React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import logo from "../assets/logo.png"

export default () => (
    <nav class="flex gitna items-center flex-wrap navbar">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img class="smaller" alt='UPDOG' src={logo} />
        </div>
    </nav>
)