
getResults()

const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?contentType=csv&unitGroup=us&aggregateHours=24&location=Washington%2CDC%2CUSA&shortColumnNames=false';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c8a1180a6fmsh023edf57775999bp16305djsnea67440b0915',
		'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

async function getResults(){

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getResults()