const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('dhaka',(error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

forecast('23.784506','90.403409',(error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

