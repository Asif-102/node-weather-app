require('dotenv').config()
const request = require('request')

const geoCode = (address, callback) => {
    if(address == ''){
        address = 'none'
    }
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+process.env.MAP_BOX_API_KEY+'&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (!response.body.features.length) {
            return callback(response.body)
        }
        const [latitude, longitude] = response.body.features[0].center
        return callback({latitude, longitude})
    })
}

module.exports = geoCode;