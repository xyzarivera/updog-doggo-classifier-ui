import React, {Component} from "react"
import Layout from "../components/layout"
import logo from "../assets/logo.png"
import "../styles/global.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            url:"",
            gslink: "",
            score: "",
            breed:""
        }

        this.handleData = this
            .handleData
            .bind(this);
        this.handleUpload = this
            .handleUpload
            .bind(this);
        
    }

    componentDidMount(){
        document.title = 'UPDOG! Doggo Classifier'
    }

    handleUpload = () => {
    }
        
    handleData = () => {        
    } 

    render() {
        const score = this.state.score;
        const breed = this.state.breed;
        let header = "";

        if (breed!=="") {
            if (breed === "Unknown/Unclassified object") {
                header = "You are no doggo!"
            } else {
            header = "I'm " + score + "% sure that you're a " + breed + " !"
            }
        }

        return (
            <div className="bg-color-whiteish add-padding-top flex w-full h-screen text-center items-center">
            <Layout>
                <div className="flex flex-wrap px-2 mb-6">
                    <div className="flex justify-center md:w-1/3 px-4">
                        <img className="logo-size" alt='UPDOG' src={logo} />
                    </div>
                    <div className="md:w-2/3 text-left">
                        <h1 className="font-bold text-2xl md:text-5xl leading-tight">HENLO FREN!</h1>
                        <p className="text-gray-700 text-base md:text-xl">
                            Let me guess your doggo breed.
                        </p>
                        <p className="text-gray-700">
                            <b>UPDOG</b> is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.
                            <p className="text-doggored">Backend services are currently disabled. This is a UI preview of the app.</p>

                        </p>
                    </div>
                </div>
                <form className="px-6 py-2 justify-center">
                    <div className="bg-color-whiteish-darker rounded-corners py-4">
                        <div className="flex items-center justify-center bg-grey-lighter mb-6">
                            <div className="flex md:w-3/6 justify-center">
                                <img src={this.state.url} alt="" />
                            </div>
                            <div className="md:w-3/6">
                                <div className="justify-center">
                                    <label className="block text-gray-500 font-bold text-doggored">
                                        <span className="text-xl">
                                            {header}
                                        </span>
                                    </label>
                                </div>
                                <div className="justify-center">
                                <label className="block text-gray-500 font-bold">
                                    <span className="text-sm">
                                        Upload a doggo selfie!
                                    </span>
                                </label>
                            </div>
                                <div className="flex items-center justify-center py-2">
                                    <label className="w-48 flex justify-center items-center flex-col items-center px-2 py-4 bg-white text-gray rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                                        <svg className="w-6 h-6 mobileHide" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="text-base leading-normal">Select a photo</span>
                                        <input type='file' className="hidden" onChange={this.handleUpload} />
                                    </label>
                                </div>
                                <button onClick={this.handleData} className="shadow bg-doggored focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    BOOP for me to guess!
                                </button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </div>
        )
    }
}

export default App;

