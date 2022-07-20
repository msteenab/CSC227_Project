const request = require('request');

const argv = require('yargs').argv;

let  API_KEY = 'd6233574a2916e0858315db07177e2fe';

let city = argv.c || 'raleigh';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&imperial&appid=${API_KEY}`

request(url, function (err, response, body) {
    if(err){
        console.log('error', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}.`;
        console.log(message)
    }
});