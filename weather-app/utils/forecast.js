const request = require('request');
const apiData = require('../../api_keys.js');

const forecast = (location, callback) => {
  const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/${location.latitude},${location.longitude}?units=us&lang=en`;

  request({url: url, json: true}, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service!');
    } else if (res.body.error) {
      console.log(res.body.error);
      callback('Unable to find location.');
    } else {
      callback(null, {
        currently: res.body.currently,
        daily: res.body.daily,
        location: location.location
      });
    }
  })
}

module.exports = forecast;