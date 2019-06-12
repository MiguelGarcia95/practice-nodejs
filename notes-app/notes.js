const getNotes = () => {
  return 'Your notes...';
}

const createNote = (title, body) => {
    console.log('Title: ' + title);
    console.log('Body: ' + body);
}

module.exports = {getNotes, createNote};