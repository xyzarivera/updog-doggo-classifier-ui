import React from "react"

export default (props) => (
    <div className="w-1/3 max-w-sm overflow-hidden my-4">
        <div className="flex justify-center">
            <img className="justify-center product-image" src={props.imgsrc} alt="logo"/>
        </div>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold">{props.name}</h1>
            <p className="py-2 text-justify text-m">{props.desc}</p>
        </div>
    </div>
)