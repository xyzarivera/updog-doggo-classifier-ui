import React, {Component} from "react"
import Layout from "../components/layout"
import logo from "../assets/logo.png"
import {storage} from "../firebase/firebase"
import "../styles/global.css"
import axios from 'axios'

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

    handleUpload = async (e) => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
            this.setState({
                    score:"",
                    breed:""
                    })
            let header = "";

        const name = new Date().getHours().toLocaleString() + new Date().getMinutes().toLocaleString() + new Date().getSeconds().toLocaleString()  + `${image.name}`;
        const uploadTask = storage.ref(name).put(image);
        // const gslink = "gs://gcp-revalida-a.appspot.com/" + name;
        this.setState({gslink: "gs://gcp-revalida-a.appspot.com/" + name})

        // console.log(gslink);
        
        uploadTask.on('state_changed',
        (snapshot) => {
            // progress function
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // uploader.value = progress;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            // error function
            console.log(error)
        }, (complete) => {
            // complete function
            console.log("complete")
            storage.ref().child(name).getDownloadURL().then(url =>{
                this.setState({url});
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                })
            })
        })
        }
    }
        
    handleData = () => {
        axios.post("https://us-central1-gcp-revalida-a.cloudfunctions.net/get-firestore-data", {"gs_url": this.state.gslink})
            .then(result => {
            const data = result.data 
                this.setState({
                    score:data[0].score,
                    breed:data[0].breed
                    })
                console.log(data[0].score)
                }  
            )
            .catch(err => {
            this.setState({ isError: true })
            console.log(`${err}`)
            })         
    } 

    render() {
        const score = this.state.score;
        const breed = this.state.breed;
        let header = "";

        if (breed!="") {
            if (breed == "Unknown/Unclassified object") {
                header = "You are no doggo!"
            } else {
            header = "I'm " + score + "% sure that you're a " + breed + " !"
            }
        }

        return (
            <div class="bg-color-whiteish add-padding-top flex w-full h-screen text-center items-center">
            <Layout>
                <div class="flex flex-wrap px-2 mb-6">
                    <div class="flex justify-center md:w-1/3 px-4">
                        <img class="logo-size" alt='UPDOG' src={logo} />
                    </div>
                    <div class="md:w-2/3 text-left">
                        <h1 class="font-bold text-2xl md:text-5xl leading-tight">HENLO FREN!</h1>
                        <p class="text-gray-700 text-base md:text-xl">
                            Let me guess your doggo breed.
                        </p>
                        <p class="text-gray-700">
                            <b>UPDOG</b> is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.
{/*                           <p class="text-doggored">under development</p>
*/} 
                        </p>
                    </div>
                </div>
                <form class="px-6 py-2 justify-center">
                    <div class="bg-color-whiteish-darker rounded-corners py-4">
                        <div class="flex items-center justify-center bg-grey-lighter mb-6">
                            <div class="flex md:w-3/6 justify-center">
                                <img src={this.state.url} alt="" />
                            </div>
                            <div class="md:w-3/6">
                                <div class="justify-center">
                                    <label class="block text-gray-500 font-bold text-doggored">
                                        <span class="text-xl">
                                            {header}
                                        </span>
                                    </label>
                                </div>
                                <div class="justify-center">
                                <label class="block text-gray-500 font-bold">
                                    <span class="text-sm">
                                        Upload a doggo selfie!
                                    </span>
                                </label>
                            </div>
                                <div class="flex items-center justify-center py-2">
                                    <label class="w-48 flex justify-center items-center flex-col items-center px-2 py-4 bg-white text-gray rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                                        <svg class="w-6 h-6 mobileHide" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="text-base leading-normal">Select a photo</span>
                                        <input type='file' class="hidden" onChange={this.handleUpload} />
                                    </label>
                                </div>
                                <button onClick={this.handleData} class="shadow bg-doggored focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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

