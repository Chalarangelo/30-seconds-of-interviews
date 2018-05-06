// This script generates the README file

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const util = require('./util.js');

const QUESTIONS_PATH = './questions';
const STATIC_PARTS_PATH = './static-parts';

let questions = {};
let start = '';
let end = '';
let output = '';

questions = util.readQuestions(QUESTIONS_PATH));

try {
  startPart = fs.readFileSync(path.join(STATIC_PARTS_PATH, 'README-start.md'), 'utf8');
  endPart = fs.readFileSync(path.join(STATIC_PARTS_PATH, 'README-end.md'), 'utf8');
} catch (err) {
  console.log(`${chalk.red('ERROR!')} During static part loading: ${err}`);
  process.exit(1);
}

