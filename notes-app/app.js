const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


// customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing a note!')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    console.log('List all notes!')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading a note!')
  }
})

yargs.parse();

// console.log(yargs.argv);