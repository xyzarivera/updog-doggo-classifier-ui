function uploadImage(){	
	
	var firebase = require("firebase/app");

	// Image file references
	var ref = firebase.storage().ref();

	// Please replace with the image selector id
	var file = document.querySelector('#image')	
	
	var metadata = {
	contentType: file.type
	};
		var task = ref.child(file).put(file, metadata);
	task
		.then(snapshot => snapshot.ref.getDownloadURL())
		.then((url) => {
			console.log(url);
		})
			.catch(console.error);


}