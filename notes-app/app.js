const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


// customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note!')
  }
})

console.log(yargs.argv);