const request = require('request');
let  apikey = 'd6233574a2916e0858315db07177e2fe';

const forecast = function (latitude, longitude) {

let url = `http://api.openweathermap.org/data/2.5/weather?`
			+`lat=${latitude}&lon=${longitude}&appid=${apikey}`

	request({ url: url, json: true }, function (error, response) {
		if (error) {
			console.log('Unable to connect to Forecast API');
		}
		else {

			console.log('It is '
				+ response.body.main.temp
				+ ' degrees out.'
			);

			console.log('The high is '
				+ response.body.main.temp_max
				+ ' with a low of '
				+ response.body.main.temp_min
			);

			console.log('Humidity is '
				+ response.body.main.humidity
			);
		}
	})
}

var latitude = 22.7196; 
var longitude = 75.8577;

// Function call
forecast(latitude, longitude);
