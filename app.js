let zipcodes = process.argv.slice(2);
let https = require('https');
let http = require('http');
let getCoords = (zip) => {
    let api = "Dqfcw9y4aAw0fEC7Q7F5v1eCMu851ZZFpeSVnqZy0vzgabn0j26P3krPOAVQzUvY";
    let url = "https://www.zipcodeapi.com/rest/" + api + "/info.json/" + zip + "/degrees";
    let request = https.get(url, function (response) {
        let body = "";
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            let obj = JSON.parse(body);
            let city = obj.acceptable_city_names[0].city;
            let lat = obj.lat;
            let long = obj.lng;
            getTemp(city, lat, long);
        });
    });
};
let getTemp = (city, latitude, longitude) => {
    let api = "a2375127e4964d414de339b5f5d0edff";
    let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + api;
    let request = http.get(url, (response) => {
        let body = "";
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            //console.log(body);
            let obj = JSON.parse(body);
            let fahrenheit = kelvinToFahrenheit(obj.main.temp);
            
            console.log(city + " - latitude: " + latitude + " longitude: " + longitude);
            console.log("The current temperature in " + city + " is " + fahrenheit + "°F");
            console.log("The weather in " + city + " is " + obj.weather[0].main + " - " + obj.weather[0].description + ".\n");
        });
    });
};

let kelvinToFahrenheit = (kelvinTemp) => {
    let f = Math.round(kelvinTemp * (9 / 5) - 459.67);
    return f;
};
let makeRequest
zipcodes.forEach(function (zip) {
    getCoords(zip);
});