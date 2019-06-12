const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
}

const createNote = (title, body) => {
  const notes = loadNotes(title);

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note already exists.");
  }



}

const saveNotes = notes => {
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
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => {
    return note.title !== title
  });
  console.log(filteredNotes);
  saveNotes(filteredNotes);
  // fs.unlinkSync(`${title}.json`);
}

module.exports = {getNotes, createNote, removeNote};