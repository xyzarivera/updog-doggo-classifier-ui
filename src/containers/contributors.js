import React from "react"
import Layout from "../components/layout"
import PeopleCard from "../components/people-card"
import dp_xyza from "../assets/dp_xyza.jpg"
import dp_ken from "../assets/dp_ken.jpg"
import dp_faust from "../assets/dp_faust.jpg"
import "../styles/global.css"

export default () => (
    <div className="bg-color-whiteish">
        <Layout>
            <h1 className="font-semibold text-center text-xl md:text-3xl leading-tight">Contributors</h1>
            <p className="text-gray-700 text-base md:text-xl text-center">
                This web app is our revalida for the Google Cloud Platform Developer Stint of the AC2E program.
            </p>
            <div className="justify-between flex md:flex mb-6 py-4">
                <PeopleCard
                    imgsrc={dp_ken}
                    name="Kendrick Tan" 
                    desc="AI/ML & Backend Development"
                    team="GCPeepz-A"
                    git="https://github.com/saibunny"
                    gitname="saibunny"
                    email="zkftan@globe.com.ph" />
                <PeopleCard  
                    imgsrc={dp_faust}
                    name="Faust Roxas" 
                    desc="Architecture & Backend Development"
                    team="GCPeepz-A"
                    git="https://github.com/faustroxas"
                    gitname="faustroxas"
                    email="zrfroxas@globe.com.ph" />
                <PeopleCard
                    imgsrc={dp_xyza}
                    name="Xyza Rivera" 
                    desc="Frontend Development & Design "
                    team="GCPeepz-A"
                    git="https://github.com/xyzarivera"
                    gitname="xyzarivera"
                    email="zxlrivera@globe.com.ph" />
            </div>
        </Layout>
    </div>
)