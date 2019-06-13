const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Home page, url: /');
});

app.get('/help', (req, res) => {
  res.send('Help page, url: /help');
});

app.get('/about', (req, res) => {
  res.send('About page, url: /about');
});

app.get('/weather', (req, res) => {
  res.send('Weather page, url: /weather');
});

app.listen(3000, () => {
  console.log('Server is up on port: 3000');
});


