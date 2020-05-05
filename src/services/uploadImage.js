function uploadImage(){	

	// Image file references
	var ref = firebase.storage().ref();


	var file = document.querySelector('#image')	// <--- Please replace with the image selector id
	var name = (+new Date()) + '-' + file.name;	// Add date to the filename
	var metadata = {
	contentType: file.type
	};
		var task = ref.child(name).put(file, metadata);
	task
	.then(snapshot => snapshot.ref.getDownloadURL())
	.then((url) => {
		console.log(url);
		document.querySelector('#ImageHTMLid').src = url;	// Grabbing the image url and assigning it to a html element
	})
		.catch(console.error);


}