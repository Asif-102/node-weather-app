require('dotenv').config()
const request = require('request')

const geoCode = (address, callback) => {

    (address == '')?(address = 'fdsafksdfjlsdfjffdsjfasdf'):address

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+process.env.MAP_BOX_API_KEY+'&limit=1'

    request({ url: url, json: true }, (error, response) => {

        if(error){
            callback('Unable to connect.', undefined)
        }else if(response.body.features.length === 0){
            callback('No place found', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geoCode;