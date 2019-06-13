const request = require('request');
const apiData = require('../api_keys.js');

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

const geoUrl = `${apiData.MAP_URL}/Los%20Angeles.json?access_token=${apiData.MAP_KEY}&limit=1`;

request({url: geoUrl, json: true}, (err , res) => {
  if (err) {
    console.log('Unable to connect to location map services.');
  } else if (res.body.message) {
    console.log('Location not found...')
  } else {
    console.log(`lat: ${res.body.features[0].center[1]}`);
    console.log(`long: ${res.body.features[0].center[0]}`);
    console.log(`place: ${res.body.features[0].place_name}`);
  }
})
