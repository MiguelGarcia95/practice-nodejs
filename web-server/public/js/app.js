console.log('Client side java loaded.');

const form = document.querySelector('form');
const input = document.querySelector('input');
const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');

const fetchWeather = address => {
  if (!address) {
    return console.log('Location Input Empty');
  };

  message1.textContent = 'Loading...';
  message2.textContent = '';

  fetch(`http://localhost:3000/weather?address=${address}`).then(res => {
    return res.json();
  }).then(data => {
    if (data.error) throw Error(data.error);
    message1.textContent = data.forecast;
    message2.textContent = data.location;
  }).catch(err => {
    message1.textContent = 'Error, Try Again...';
    message2.textContent = `Error: ${err}`;
    console.log(err)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault();
  fetchWeather(input.value)
})