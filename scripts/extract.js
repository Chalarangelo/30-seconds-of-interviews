// This script converts question into JSON format

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const util = require('./util');

const QUESTIONS_PATH = './questions';

let questions = {};
let output = {};

// question model:
// questionName: {
//     question: ''
//     questionHTML: ''
//     questionCSS: ''
//     questionJS: ''
//     answer: ''
//     answerHTML: ''
//     answerCSS: ''
//     answerJS: ''
//     goodToHear: ['','','']
//     links: [{
//         title:
//         url:
//     }]
// }

console.time('Extractor');

try {
  questions = util.readQuestions(QUESTIONS_PATH);

  // TODO
  for (let question in questions) {
    output[question] = {
      name: question,
      question: null,
      questionHTML: null,
      questionCSS: null,
      questionJS: null,
      answer: null,
      answerHTML: null,
      answerCSS: null,
      answerJS: null,
      goodToHear: [],
      links: []
    };
  }

  fs.writeFileSync('./data/questions.json', JSON.stringify(output));
} catch (err) {
  console.log(
    `${chalk.red('ERROR!')} During questions.json generation: ${err}`
  );
  process.exit(1);
}

console.log(`${chalk.green('SUCCESS!')} questions.json file generated!`);
console.timeEnd('Extractor');
