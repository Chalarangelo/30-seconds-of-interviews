const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const readQuestions = questionsPath => {
  let questions = {};
  try {
    let questionFilenames = fs.readdirSync(questionsPath);
    questionFilenames.sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    // Store the data read from each question in the appropriate object
    for (let question of questionFilenames)
      questions[question] = fs.readFileSync(path.join(questionsPath, question), 'utf8');
  } catch (err) {
    // Handle errors (hopefully not!)
    console.log(`${chalk.red('ERROR!')} During question loading: ${err}`);
    process.exit(1);
  }
  return questions;
};

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

module.exports = { readQuestions, toKebabCase, capitalize };
