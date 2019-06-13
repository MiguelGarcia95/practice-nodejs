const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


geocode('Houston', (err, data) => {
  console.log('Error: ', err);
  console.log('Data: ', data);
})

// forecast({ latitude: 29.7589, longitude: -95.3677, location: 'houston'}, (err, data) => {
forecast('29.7589', '-95.3677', (err, data) => {
  console.log('Error: ', err);
  console.log('Data: ', data);
});