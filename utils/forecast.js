require('dotenv').config();
const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHER_API_KEY + '&query=' + latitude + ',' + longitude + '&units=m';

    request({ url: url, json: true }, (error, response) => {
        
        if(error){
            callback('Unable to connect.', undefined)
        }else if(response.body.error){
            callback('Something went wrong.', undefined)
        }else{
            callback(undefined, {
                temp_c: response.body.current.temperature
            })
        }
    })
}

module.exports = forecast;