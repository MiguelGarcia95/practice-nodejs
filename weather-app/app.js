const request = require('request');
const apiData = require('../api_keys.js');

const url = `${apiData.MAP_URL}/${apiData.DSKY_KEY}/37.8267,-122.4233?units=us&lang=en`;

request({url: url, json: true}, (err, res) => {
  console.log(`${res.body.daily.data[0].summary} It\' currently ${res.body.currently.temperature} degrees out with a ${res.body.currently.precipProbability}% chance of rain`);
})