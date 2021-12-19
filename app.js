require('dotenv').config()
const request = require('request');

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



const geoCode = (address, callback) => {
    if(address == ''){
        address = 'none'
    }
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+process.env.MAP_BOX_API_KEY+'&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (!response.body.features.length) {
            return callback(response.body)
        }
        const [latitude, longitude] = response.body.features[0].center;
        return callback({latitude, longitude})
    })
}

geoCode('new york',(data)=>{
    console.log(data)
})

