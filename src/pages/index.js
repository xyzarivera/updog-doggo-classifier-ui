import React from "react"
import GithubCorner from "../components/github-corner"
import App from "../containers/app"
import Details from "../containers/details"
import Contributors from "../containers/contributors"

export default () => (
    <div>
        <GithubCorner url="https://github.com/xyzarivera/doggo-classifier-ui"/>
        <App/>
        <Details/>
        <Contributors/>
    </div>
)