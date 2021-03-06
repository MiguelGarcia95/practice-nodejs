const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

//Paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static dir to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Miguel Me',
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Miguel Me',
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Miguel Me',
    message: 'Here is a useless help message.'
  });
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({error: 'Provide an Address'})
  }

  geocode(req.query.address, (err, {latitude, longitude, location} = {}) => {
    if (err) {
      return res.send({error: err})
    }
  
      forecast(latitude, longitude, (err, forecastData) => {
        if (err) {
          return res.send({error: err})
        }

        return res.send({
          forecast: forecastData,
          location: location,
          address: req.query.address
        });
      });
  })
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Miguel Me',
    errorMessage: 'Help Page Not Found!'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Miguel Me',
    errorMessage: 'Page Not Found!'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port: 3000');
});


