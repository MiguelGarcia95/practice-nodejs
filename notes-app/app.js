const chalk = require('chalk');
const notes = require('./notes');
const note = notes();

console.log(note);

console.log(chalk.green('Success!'));