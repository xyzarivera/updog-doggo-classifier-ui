function firestoreListener(){	

	const db = admin.firestore();


	let doc = db.collection('cities').doc('SF');

	let observer = doc.onSnapshot(borkResult => {
  		console.log(`Received doc snapshot: ${borkResult}`);
		// HANDLE RETURNED DATA
	}, err => {
  		console.log(`Encountered error: ${err}`);
	});

}