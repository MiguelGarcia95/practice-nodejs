const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
}

const createNote = (title, body) => {
  const notes = loadNotes(title);
  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
}

const saveNotes = () => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch(e) {
    return [];
  }
}

const removeNote = title => {
  fs.unlinkSync(`${title}.json`);
}

module.exports = {getNotes, createNote, removeNote};