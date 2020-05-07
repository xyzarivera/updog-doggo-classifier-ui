// Better to use EventListener instead of Form submission 

var firebase = require("firebase/app");
var storage = require("firebase/storage");

// Replace with Loading bar id
var uploader = document.getElementById('uploader');

// Replace Selector with ID of <input type="file">
var fileButton = document.getElementById('fileButton');

// Wait for value to change in input
fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];

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
<<<<<<< HEAD
});
=======

</script>
>>>>>>> 3aa0ca8cee7d195bf57c48d3f92dbb7bfeff8065
