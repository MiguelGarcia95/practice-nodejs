const path = require('path');
const express = require('express');
const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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
    message: 'Here is a useless help message.'
  });
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Weather Data here',
    location: 'Location goes here',
    random: 'Weather page, url: /weather',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port: 3000');
});


