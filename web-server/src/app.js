const path = require('path');
const express = require('express');
const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

app.get('/help', (req, res) => {
  res.send({help: 'Help page, url: /help'});
});

app.get('/about', (req, res) => {
  res.send('<h1>About page, url: /about</h1>');
});

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


