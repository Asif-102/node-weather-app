require('dotenv').config();
const request = require('request');
const geoCode = require('./utils/geocode');

const weather_api_url = 'http://api.weatherstack.com/current?access_key='+process.env.WEATHER_API_KEY+'&query=Dhaka&units=m&query=23.784506,90.403409';
// 23.784506,90.403409
request({ url: weather_api_url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(response.body);
    if (response.body.success === false) {
        console.log(response.body.error.info);
        return;
    }
    console.log(`${response.body.current.weather_descriptions[0]} The temperature is ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degrees out.`);
})

//geo coding 
//address -> long/lat -> weather





geoCode('new york',(data)=>{
    console.log(data)
})

