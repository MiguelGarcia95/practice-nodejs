const request = require('request');
const apiData = require('../../api_keys.js');

const forecast = (latitude, longitude, callback) => {
  const url = `${apiData.DSKY_URL}/${apiData.DSKY_KEY}/${latitude},${longitude}?units=us&lang=en`;

  request({url, json: true}, (err, {body}) => {
    if (err) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      console.log(body.error);
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary} It\'s currently ${body.currently.temperature} degrees out with a ${body.currently.precipProbability}% chance of rain`);
      // callback(null, {
      //   currently: body.currently,
      //   daily: body.daily,
      //   location: location.location
      // });
    }
  })
}

module.exports = forecast;