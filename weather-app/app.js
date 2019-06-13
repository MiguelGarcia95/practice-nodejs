const request = require('request');

const url = `https://api.darksky.net/forecast/a9a58e34dd722e4ef4d955bb52714d14/37.8267,-122.4233`;

request({url: url, json: true}, (err, res) => {
  console.log(`It\' currently ${res.body.currently.temperature} degrees out with a ${res.body.currently.precipProbability}% chance of rain`);
})