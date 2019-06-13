const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


if (!process.argv[2]) {
  console.log('Add A Location')
} else {
  geocode(process.argv[2], (err, {latitude, longitude, location}) => {
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