const request = require('request');
const apiData = require('../../api_keys.js');

const geocode = (address, callback) => {
  const url = `${apiData.MAP_URL}/${encodeURIComponent(address)}.json?access_token=${apiData.MAP_KEY}&limit=1`;

  request({url, json: true}, (err, {body}) => {
    if (err) {
      callback('Unable to connect to location services.', undefined);
    } else if (body.features.length === 0) {
      callback('Location not found... Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  })
}


module.exports = geocode;