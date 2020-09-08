import React from "react"
import GithubCorner from "../components/github-corner"
import Navbar from "../components/navbar"
import App from "../containers/app"
import Details from "../containers/details"
import Contributors from "../containers/contributors"

export default () => (
    <div>
        <GithubCorner url="https://github.com/xyzarivera/updog-doggo-classifier-ui/"/>
        <Navbar/>
        <App/>
        <Details/>
        <Contributors/>
    </div>
)