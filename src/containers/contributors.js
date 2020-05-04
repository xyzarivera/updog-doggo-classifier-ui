
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

export default () => (
    <div class="bg-gray-200">
        <Layout>
            <h1 class="font-semibold text-center text-xl md:text-3xl leading-tight">Contributors</h1>
            <div class="justify-between md:flex mb-6">
                <Card class="md:w1/3"
                    imgsrc="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-9/94210724_2653564624969000_5202876365367410688_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeGEsINOMC1quRqg5cNcDPI2ZNslqHJH5idk2yWockfmJ1Wk63s2cqnXQGZz1RXxjUFPzpxDvQ2b-Q6Dez2aROgX&_nc_ohc=DmBycOmnb1UAX8LQSTu&_nc_ht=scontent.fmnl17-2.fna&oh=21292639cdb99a5fb80e53482b441bf0&oe=5ED61434" 
                    name="Kendrick Tan" 
                    desc="AI/ML & Backend Development"
                    team="GCPeepz-A"
                    git="https://github.com/saibunny"
                    email="xyzarivera@gmail.com" />
                <Card class="md:w1/3" 
                    imgsrc="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-9/91438321_114602620188882_2946921540190470144_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_eui2=AeEEds8Y94VkNuXJuutObKZbRFZpwYj1bIdEVmnBiPVsh_SuVOftVlNhaz8Wnh3LOOBbidm7sLOT04ICm0oa2doO&_nc_ohc=Q1N22rcvHpEAX88Kbh2&_nc_ht=scontent.fmnl17-2.fna&oh=ce138157654f76ae63259a7021458a9a&oe=5ED4F669" 
                    name="Faust Roxas" 
                    desc="Architecture & Backend Development"
                    team="GCPeepz-A"
                    git="https://github.com/randito-roxasjr"
                    email="xyzarivera@gmail.com" />
                <Card class="md:w1/3"
                    imgsrc="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-9/90819832_3129640297049130_8715501310973050880_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_eui2=AeGuUyu83sMeS8XY2sQLx8316o1yoWr0vFPqjXKhavS8U_FKvXhNd_2QrqN_4imhBc1yqV8xxne3xgayzyss29cW&_nc_ohc=xvzt6Ro-z9UAX93xCuR&_nc_ht=scontent.fmnl17-2.fna&oh=1bf4906ac37ff1e02798293424ee1884&oe=5ED51B2F" 
                    name="Xyza Rivera" 
                    desc="Frontend Development & Design "
                    team="GCPeepz-A"
                    git="https://github.com/xyzarivera"
                    email="xyzarivera@gmail.com" />
            </div>
        </Layout>
    </div>
)