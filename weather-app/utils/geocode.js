const request = require('request');
const apiData = require('../../api_keys.js');

const geocode = (address, callback) => {
  const url = `${apiData.MAP_URL}/${encodeURIComponent(address)}.json?access_token=${apiData.MAP_KEY}&limit=1`;

  request({url: url, json: true}, (err, res) => {
    if (err) {
      callback('Unable to connect to location services.', null);
    } else if (res.body.features.length === 0) {
      callback('Location not found... Try another search', null);
    } else {
      callback(null, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  })
}


module.exports = geocode;