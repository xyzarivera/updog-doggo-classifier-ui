import React from "react"
import Navbar from "../components/navbar"
import App from "../containers/app"
import Details from "../containers/details"
import Contributors from "../containers/contributors"

export default () => (
    <div>
        <Navbar/>
        <App/>
        <Details/>
        <Contributors/>
    </div>
)