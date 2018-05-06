// This script generates the README file

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const util = require('./util.js');

const QUESTIONS_PATH = './questions';
const STATIC_PARTS_PATH = './static-parts';

let questions = {};
let startPart = '';
let endPart = '';
let output = '';

console.time('Builder');

questions = util.readQuestions(QUESTIONS_PATH);

try {
  startPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, 'README-start.md'),
    'utf8'
  );
  endPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, 'README-end.md'),
    'utf8'
  );
} catch (err) {
  console.log(`${chalk.red('ERROR!')} During static part loading: ${err}`);
  process.exit(1);
}

try {
  // add static part for start
  output += `${startPart + '\n'}`;

  // loop over questions and add them to output
  for (let questionKey in questions) {
    output += `${questions[questionKey]}`;
  }

  // add static part for end
  output += `\n${endPart + '\n'}`;

  fs.writeFileSync('README.md', output);
} catch (err) {
  console.log(`${chalk.red('ERROR!')} During README generation: ${err}`);
  process.exit(1);
}

console.log(`${chalk.green('SUCCESS!')} README file generated!`);
console.timeEnd('Builder');
