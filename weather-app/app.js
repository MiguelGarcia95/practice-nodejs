const request = require('request');
const apiData = require('../api_keys.js');
const geocode = require('./utils/geocode.js');

// const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/37.8267,-122.4233?units=us&lang=en`;

// request({url: url, json: true}, (err, res) => {
//   if (err) {
//     console.log('Unable to connect to weather service!');
//   } else if (res.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(`${res.body.daily.data[0].summary} It\' currently ${res.body.currently.temperature} degrees out with a ${res.body.currently.precipProbability}% chance of rain`);
//   }
// })




// geocode('Houston', (err, data) => {
//   console.log('Error: ', err);
//   console.log('Data: ', data);
// })


const forecast = (location, callback) => {
  const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/37.8267,-122.4233?units=us&lang=en`;

  request({url: url, json: true}, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service!');
    } else if (res.body.error) {
      callback('Unable to find location.');
    }
  })

}


forecast({ latitude: 29.7589, longitude: -95.3677, location: 'houston'}, (err, data) => {
console.log('Error: ', err);
console.log('Data: ', data);
});