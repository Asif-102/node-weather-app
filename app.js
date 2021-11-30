const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a64ee73e334fcf0808d769bd51b3be22&query=Dhaka';

request({url:url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})