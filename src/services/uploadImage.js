var firebase = require("firebase/app");
var storage = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyA_kfc957r8sqwUNglVmS-K37noSWeasg8",
  authDomain: "firstprojectgcp-271503.firebaseapp.com",
  databaseURL: "https://firstprojectgcp-271503.firebaseio.com",
  projectId: "firstprojectgcp-271503",
  storageBucket: "firstprojectgcp-271503.appspot.com",
  messagingSenderId: "104336835256",
  appId: "1:104336835256:web:ff3444ebaa143f9934ea4d",
  measurementId: "G-1ZMV72HL5P"
};

firebase.initializeApp(firebaseConfig);

// Image file references
var ref = firebase.storage().ref();

// Please replace with the image selector id
var file = 'dog.jpeg'
//var file = document.getElementById("image").files[0];

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child(file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    ...

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});