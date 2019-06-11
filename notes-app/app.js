const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Hey man! I just made this file with nodejs.');
fs.appendFile('notes.txt', 'Im appending this data.', err => {
  if (err) console.log(err); 
  console.log('worked');
});