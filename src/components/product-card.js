import React from "react"

export default (props) => (
    <div class="max-w-sm overflow-hidden my-4">
        <div class="md:flex md:justify-center">
            <img class="items-center" src={props.imgsrc} alt="logo"/>
        </div>
        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold">{props.name}</h1>
            <p class="py-2 text-justify text-m">{props.desc}</p>
        </div>
    </div>
)