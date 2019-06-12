const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
}

const createNote = (title, body) => {
  fs.writeFileSync(`${title}.json`, body);
}

const removeNote = title => {
  fs.unlinkSync(`${title}.json`);
}

module.exports = {getNotes, createNote, removeNote};