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

module.exports = { readQuestions };