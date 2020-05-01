import React, { Component } from "react"
import Menu from "../components/menu"

export default () => (
    <div>
        <Menu />
        <div>
            <h1>Know your Doggo!</h1>
            <p>Let me guess what breed your dog is. 🐶</p>
            <form>
                <input className="fileInput" 
                    type="file" 
                />
                <button className="submitButton" 
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
)