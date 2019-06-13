const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Houston', (err, data) => {
  if (err) {
    return console.log('Error: ', err);
  }

    forecast(data.latitude, data.longitude, (err, forecastData) => {
      if (err) {
        return console.log('Error: ', err);
      }

      console.log('Location: ', data.location);
      console.log('Data: ', forecastData);
    });
})
// forecast({ latitude: 29.7589, longitude: -95.3677, location: 'houston'}, (err, data) => {
