const {Datastore} = require('@google-cloud/datastore');

const projectId = "gcp-revalida-a";
// Path to key
const keyFilename = '.env/datastoreKeys.json';

const datastore = new Datastore({projectId, keyFilename});

// Set Kind
const kind = "dog_classification";

function readDataStore(gs_url){

	// Create Query
	const query = datastore.createQuery(kind)
		.filter('gs_url', '=', gs_url);

	// Run Query
	const runQuery = async function() {  

		// wait for result
		const [doggos] = await datastore.runQuery(query);
		console.log('Dog Breeds:');
		var results = [];
		doggos.forEach(doggo => {
			results.push({
				score: (doggo.score * 100).toFixed(4),
				gs_url: doggo.gs_url,
				breed: doggo.dog_breed
			})
		});

		console.log(results);
		
		// Do frontend stuff here
	}

	runQuery();
}

// Replace parameter with gs_url value
readDataStore("gs://gcp-revalida-a.appspot.com/fite.jpg")