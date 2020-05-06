function firestoreListener(){

	var file = document.querySelector('#image')	
	var db = admin.firestore();

	db.collection("dog_classification").where("gs_url", "==", "gs://gcp-revalida-a.appspot.com/"+file.name)
	    .onSnapshot(function(snapshot) {
	        snapshot.docChanges().forEach(function(change) {
	            if (change.type === "added") {
	                console.log("Dog Breed: ", change.doc.data());
	            }
	        });
	    });

}