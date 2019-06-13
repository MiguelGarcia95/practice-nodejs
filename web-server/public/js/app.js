console.log('Client side java loaded.');

const fetchWeather = address => {
  if (!address) return;

  fetch(`http://localhost:3000/weather?address=${address}`).then(res => {
    return res.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err)
  })
}
const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', e => {
  e.preventDefault();
  fetchWeather(input.value)
})