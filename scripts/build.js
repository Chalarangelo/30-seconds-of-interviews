// This script generates the README file

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const util = require('./util.js');

const QUESTIONS_PATH = './questions';
const STATIC_PARTS_PATH = './static-parts';

let questions = {};

console.log(util.readQuestions(QUESTIONS_PATH));

