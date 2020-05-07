import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDQYWlHs1FCvUR4K6PWlhbEX4Q3baUG_ds",
    authDomain: "gcp-revalida-a.firebaseapp.com",
    databaseURL: "https://gcp-revalida-a.firebaseio.com",
    projectId: "gcp-revalida-a",
    storageBucket: "gcp-revalida-a.appspot.com",
    messagingSenderId: "736552925421",
    appId: "1:736552925421:web:acf999e7e2cf56bf4874e4",
    measurementId: "G-WC4SX5W4M0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}