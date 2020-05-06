<script src="/__/firebase/7.14.2/firebase-storage.js">

  var firebase = require("firebase/app");
  var storage = require("firebase/storage");

  // Initialize Firebase App
  const firebaseConfig = {
    apiKey: "AIzaSyDQYWlHs1FCvUR4K6PWlhbEX4Q3baUG_ds",
    authDomain: "gcp-revalida-a.firebaseapp.com",
    databaseURL: "https://gcp-revalida-a.firebaseio.com",
    projectId: "gcp-revalida-a",
    storageBucket: "gcp-revalida-a.appspot.com",
    messagingSenderId: "736552925421",
    appId: "1:736552925421:web:1a4a2d1b318ad46b4874e4",
    measurementId: "G-Q2CCPPDBKH"
  };
  firebase.initializeApp(firebaseConfig);
  //--------------------------------------------------------------------------------------

  // Replace with Loading bar id
  var uploader = document.getElementById('uploader');

  // Replace Selector with ID of <input type="file">
  var fileButton = document.getElementById('fileButton');

  // Wait for value to change in input
  fileButton.addEventListener('change', function(e){
    alert("HERE");
    var file = e.target.files[0];
    //var file = document.getElementById('image');

    // Name and Upload file
    var storageRef = firebase.storage().ref('img/'+file.name); 
    
    var uploadTask = storageRef.put(file);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = progress;
        console.log('Upload is ' + progress + '% done');
      }, function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
    });
  });

</script>