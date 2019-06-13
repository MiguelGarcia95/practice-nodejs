const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
  console.log('Add A Location')
} else {
  geocode(address, (err, {latitude, longitude, location}) => {
    if (err) {
      return console.log('Error: ', err);
    }
  
      forecast(latitude, longitude, (err, forecastData) => {
        if (err) {
          return console.log('Error: ', err);
        }
  
        console.log('Location: ', location);
        console.log('Data: ', forecastData);
      });
  })
}