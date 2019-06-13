console.log('Client side java loaded.');

// http://localhost:3000/weather?address=Houston

// puzzle.mead.io/puzzle

// fetch('http://puzzle.mead.io/puzzle').then(res => {
//   return res.json()
// }).then((data) => {
//   console.log(data);
// })

fetch(`http://localhost:3000/weather?address=Houston`).then(res => {
  return res.json();
}).then(data => {
  console.log(data);
})