const form = document.getElementById("form");
const latitudeInput=document.getElementById("latitude");
const longitudeInput=document.getElementById("longitude");
const resultContainer=document.getElementById("resultContainer");
const aqiresult=document.getElementById("aqi");
const coresult=document.getElementById("co");
const no2result=document.getElementById("no2");
const o3result=document.getElementById("o3");
const pm2result=document.getElementById("pm2.5");
const pm10result=document.getElementById("pm10");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude =latitudeInput.value;
    const longitude=longitudeInput.value;
    const url = 'https://air-quality.p.rapidapi.com/history/airquality?lon=-78.638&lat=35.779';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffd58f4b3emsh9c3cf87c2d42340p176c55jsnb020d28f30c9',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};

fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            let readings = result.data[0];
            console.log(readings);
            aqiResult.textContent=readings.aqi;
            coResult.textContent=readings.co;
            no2Result.textContent=readings.no2;
            pm2Result.textContent=readings.pm2;
            o3Result.textContent=readings.o3;
            pm10Result.textContent=readings.pm10;
            so2Result.textContent=readings.so2;
            resultContainer.style.display = 'flex';
        })


});