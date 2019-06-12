const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
}

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title);
  });
}

const createNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen('New note added'));
  } else {
    console.log(chalk.bgRed('Note already exists.'));
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

  if (notes.length === filteredNotes.length) {
    console.log(chalk.bgRed('No Note Found!'));
  } else {
    console.log(chalk.bgGreen('Note Removed!'));
    saveNotes(filteredNotes);
  }
}

module.exports = {getNotes, createNote, removeNote, listNotes};