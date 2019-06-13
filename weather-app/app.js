const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
  console.log('Add A Location')
} else {
  geocode(address, (err, data) => {
    if (err) {
      return console.log('Error: ', err);
    }
    const {latitude, longitude, location} = data;
  
      forecast(latitude, longitude, (err, forecastData) => {
        if (err) {
          return console.log('Error: ', err);
        }
  
        console.log('Location: ', location);
        console.log('Data: ', forecastData);
      });
  })
}