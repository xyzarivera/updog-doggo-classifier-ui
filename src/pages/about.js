import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"

export default () => (
    <div>
        <Navbar />
        <Layout>
                <h1>About the App</h1>
                <p>Doggo Classifier is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.</p>
                <p>This is our revalida project for the Google Cloud Platform Developer Stint of the AC2E program. </p>
                <h2>Contributors</h2>
                <p>
                    AI/ML - <a href="https://github.com/saibunny" rel="noopener noreferrer" target="_blank">Kendrick Tan]</a><br/>
                    Architecture & Backend - <a href="https://github.com/randito-roxasjr" rel="noopener noreferrer" target="_blank">Faust Roxas]</a><br/>
                    Frontend - <a href="http://xyzarivera.com" rel="noopener noreferrer" target="_blank">Xyza Rivera</a><br/>
                </p>
        </Layout>
    </div>
)