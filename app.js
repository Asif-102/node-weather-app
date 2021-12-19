require('dotenv').config();
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('new york',(error, data)=>{
    console.log(data)
})

forecast('23.784506','90.403409',(error, data)=>{
    console.log(data)
})

