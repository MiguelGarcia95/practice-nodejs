const validator = require('validator');

const notes = require('./notes');
const note = notes();

console.log(note);

console.log(validator.isEmail('miguel@email.com'));