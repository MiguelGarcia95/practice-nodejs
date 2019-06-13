const request = require('request');
const apiData = require('../../api_keys.js');

// const forecast = (location, callback) => {
const forecast = (latitude, longitude, callback) => {
  // const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/${location.latitude},${location.longitude}?units=us&lang=en`;
  const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/${latitude},${longitude}?units=us&lang=en`;

  request({url: url, json: true}, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service!');
    } else if (res.body.error) {
      console.log(res.body.error);
      callback('Unable to find location.');
    } else {
      callback(null, `${res.body.daily.data[0].summary} It\'s currently ${res.body.currently.temperature} degrees out with a ${res.body.currently.precipProbability}% chance of rain`);
      // callback(null, {
      //   currently: res.body.currently,
      //   daily: res.body.daily,
      //   location: location.location
      // });
    }
  })
}

module.exports = forecast;