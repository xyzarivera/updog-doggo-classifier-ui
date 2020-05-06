import React from "react"
import Layout from "../components/layout"
import ken_doggo from "../assets/ken_doggo.svg"

export default () => (
    <div class=" flex w-full h-screen text-center items-center">
        <Layout>
            <div class="px-8">
                <div class="flex justify-center">
                    <img class="justify-center" alt='Ken Doggo' width="300rem" src={ken_doggo} />
                </div>
                <h1 class="font-bold text-2xl md:text-5xl leading-tight">BORK!</h1>
                <p class="text-gray-700 text-base md:text-xl">
                    <b>HENLO FREN! </b>Let me guess your doggo breed.
                </p>
                    <div></div>
                <p class="text-gray-700">
                    <b>BORK!</b> is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.
                </p>
                <div class="flex justify-center align-center py-8">
                    <h1 class="font-semibold text-center text-xl md:text-2xl leading-tight text-doggobrown">under development</h1>
                </div>
            </div>
{/* 
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
                   <div id="empty-cover-art" class="rounded sm:w-full md:w-48 md:h-48 py-16 text-center opacity-50 md:border-solid md:border-2 md:border-gray-400">
                        <svg class="mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <div class="py-4">
                            Add Cover Art
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-grey-lighter">
                        <label class="w-56 flex flex-col items-center px-2 py-4 bg-white text-gray rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                            <svg class="w-6 h-6 mobileHide" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span class="text-base leading-normal">Select a photo</span>
                            <input type='file' class="hidden" />
                        </label>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                    <button class="shadow bg-doggored focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        BOOP!
                    </button>
                    </div>
                </div>
            </form>
*/}
        </Layout>
    </div>
)