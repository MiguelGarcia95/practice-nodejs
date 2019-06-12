const chalk = require('chalk');
const notes = require('./notes');

const command = process.argv[2];

if (command === 'add') {
  console.log('Adding Note');
} else if (command === 'remove') {
  console.log('Removing Note');
}