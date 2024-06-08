

let url = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=vLHXA2D478ZUKm8p7Z1lo7zfriOrcQKM';
const options = {
	method: 'GET',
	headers: {
		 Api_key :'vLHXA2D478ZUKm8p7Z1lo7zfriOrcQKM',
		
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