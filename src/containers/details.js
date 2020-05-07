import React from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card"
import logo_automl from "../assets/logo_automl.svg"
import logo_gcp from "../assets/logo_gcp.svg"
import logo_gatsby from "../assets/logo_gatsby.svg"
import "../styles/global.css"

export default () => (
    <div class="test-bg text-white py-8">
        <Layout>
            <h1 class="font-semibold text-center text-white text-xl md:text-3xl leading-tight">What's Inside</h1>
            <div class="justify-between md:flex text-center">
                <ProductCard class="md:w-1/3"
                    imgsrc={logo_gcp}
                    name="GCP and Firebase" 
                    desc="Application Frontend is deployed in Firebase Hosting, while Backend Services are deployed in the Google Cloud Platform."
                    />
                <ProductCard class="md:w-1/3"
                    imgsrc={logo_automl}
                    name="GCP AutoML Vision" 
                    desc="The Doggo AI classifier is trained using GCP's AutoML Vision with a dog breed dataset containing 9,229 labeled images."
                    />
                <ProductCard class="md:w-1/3"
                    imgsrc={logo_gatsby}
                    name="GatsbyJS" 
                    desc="Application Frontend is built using GatsbyJS. It is a React-based, GraphQL powered, static site generator."
                    />
            </div>
        </Layout>
    </div>
)