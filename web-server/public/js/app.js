console.log('Client side java loaded.');

fetch(`http://localhost:3000/weather?address=Houston`).then(res => {
  return res.json();
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err)
})