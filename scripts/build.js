// This script generates the README file

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const util = require('./util.js');

const QUESTIONS_PATH = './questions';
const STATIC_PARTS_PATH = './static-parts';

let tagOrder = ['javascript', 'css', 'html'];
let questions = {};
let questionTags = {};
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

  // add table of contents
  for (let questionKey in questions) {
    let tags = /tags:\s+\((.*)\)/g.exec(questions[questionKey])[1].split(',').map(v => v.trim());
    questionTags[questionKey] = tags;
    tags.forEach(v => tagOrder.includes(v) ? '' : tagOrder.push(v));
  }

  for(tag of tagOrder){
    output += `\n### ${util.capitalize(tag)} \n\n<details>\n<summary>View contents</summary>\n\n`;
    let taggedSnippets = Object.keys(questionTags).filter(v => questionTags[v][0] === tag);
    for (let taggedSnippet of taggedSnippets){
      let title = /###.+/g.exec(questions[taggedSnippet])[0];
      output += `* [${title.replace('###','')}](#${util.toKebabCase(title.toLowerCase())}) \n`;
    }
    output += `</details>\n`;
  }
  output += '\n---\n';

  for(tag of tagOrder){
    output += `\n## ${util.capitalize(tag)}\n\n`;
    let taggedSnippets = Object.keys(questionTags).filter(v => questionTags[v][0] === tag);
    for (let taggedSnippet of taggedSnippets){
      output += `${questions[taggedSnippet].replace(/####\s+Answer/g,'#### Answer\n\n<details>\n<summary>View answer</summary>')}</details> \n\n<br>[⬆ Back to top](#table-of-contents)\n\n`;
    }
    output += '\n---\n';
  }

  // loop over questions and add them to output
  // for (let questionKey in questions) {
  //   output += `${questions[questionKey]}`;
  // }

  // add static part for end
  output += `\n${endPart + '\n'}`;

  fs.writeFileSync('README.md', output);
} catch (err) {
  console.log(`${chalk.red('ERROR!')} During README generation: ${err}`);
  process.exit(1);
}

console.log(`${chalk.green('SUCCESS!')} README file generated!`);
console.timeEnd('Builder');
