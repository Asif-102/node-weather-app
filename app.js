require('dotenv').config();
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('new york',(data)=>{
    console.log(data)
})

forecast('23.784506','90.403409',(data)=>{
    console.log(data)
})

