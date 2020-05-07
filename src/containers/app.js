import React, {Component} from "react"
import Layout from "../components/layout"
import logo from "../assets/logo.png"
import {storage} from "../firebase/firebase"
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
                }  
            )
            .catch(err => {
            this.setState({ isError: true })
            console.log(`${err}`)
            })         
    } 

    render() {
        return (
            <div class=" flex w-full h-screen text-center items-center">
            <Layout>
                <div class="flex px-8 mb-6">
                    <div class="flex justify-center md:w1/3 px-4">
                        <img class="justify-center" alt='UPDOG' width="300rem" height="auto" src={logo} />
                    </div>
                    <div class="md:w2/3 text-left">
                        <h1 class="font-bold text-2xl md:text-5xl leading-tight">HENLO FREN!</h1>
                        <p class="text-gray-700 text-base md:text-xl">
                            Let me guess your doggo breed.
                        </p>
                        <p class="text-gray-700">
                            <b>UPDOG</b> is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.
                            <p class="text-doggored">under development</p>
                        </p>
                    </div>
                </div>
                <form class="px-6 py-4">
                    <div class="bg-gray-100 py-4">
                        <div>
                            <div></div>
                            <label class="block text-gray-500 font-bold">
                                <span class="text-sm">
                                    Upload a doggo selfie!
                                </span>
                            </label>
                        </div>
                        <div class="flex items-center justify-center bg-grey-lighter">
                            <img src={this.state.url || "http://via.placeholder.com/300"} alt="uploaded photo" />
                            <label class="w-56 flex flex-col items-center px-2 py-4 bg-white text-gray rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                                <svg class="w-6 h-6 mobileHide" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="text-base leading-normal">Select a photo</span>
                                <input type='file' class="hidden" onChange={this.handleUpload} />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                        <button onClick={this.handleData} class="shadow bg-doggored focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            BOOP!
                        </button>
                        </div>
                    </div>
                </form>
            </Layout>
        </div>
        )
    }
}

export default App;

