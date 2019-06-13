const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

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
  console.log(req.query.address);
  if (!req.query.address) {
    return res.send({
      error: 'Address not found'
    })
  }

  res.send({
    forecast: 'Weather Data here',
    location: 'Location goes here',
    address: req.query.address
  });
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


