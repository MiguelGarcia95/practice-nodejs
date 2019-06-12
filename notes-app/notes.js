const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
}

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Error: Not Found'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your Notes'));
  console.log(chalk.green('----------'));
  notes.forEach(note => {
    console.log(note.title);
  });
}

const createNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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
  const filteredNotes = notes.filter(note => note.title !== title);

  if (notes.length === filteredNotes.length) {
    console.log(chalk.bgRed('No Note Found!'));
  } else {
    console.log(chalk.bgGreen('Note Removed!'));
    saveNotes(filteredNotes);
  }
}

module.exports = {getNotes, createNote, removeNote, listNotes, readNote};