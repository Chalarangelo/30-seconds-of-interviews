// This script converts question markdown files into JSON format
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")

const util = require("./util")

const QUESTIONS_PATH = "./questions"

let questions = {}
let output = []

console.time("Extractor")

try {
  questions = util.readQuestions(QUESTIONS_PATH)

  // TODO
  for (let question in questions) {
    questions[question] = questions[question].replace(/\r\n/g, "\n")
    output.push({
      name: question,
      question: questions[question]
        .slice(0 + 4, questions[question].indexOf("#### Answer"))
        .trim(),
      answer: questions[question]
        .slice(
          questions[question].indexOf("#### Answer") + 12,
          questions[question].indexOf("#### Good to hear")
        )
        .trim(),
      goodToHear: questions[question]
        .slice(
          questions[question].indexOf("#### Good to hear") + 18,
          questions[question].indexOf("##### Additional links")
        )
        .trim()
        .split("\n")
        .map(v => v.replace("* ", ""))
        .filter(v => v.trim() !== ""),
      links: questions[question]
        .slice(questions[question].indexOf("##### Additional links") + 23)
        .trim()
        .split("\n")
        .map(v => v.replace("* ", ""))
        .filter(v => v.trim() !== "")
    })
    const q = output.find(({ name }) => name === question)
    q.questionCodeBlocks = util.getCodeBlocks(q.question)
    q.answerCodeBlocks = util.getCodeBlocks(q.answer)
  }

  fs.writeFileSync("./data/questions.json", JSON.stringify(output, null, 2))
} catch (err) {
  console.log(`${chalk.red("ERROR!")} During questions.json generation: ${err}`)
  process.exit(1)
}

console.log(`${chalk.green("SUCCESS!")} questions.json file generated!`)
console.timeEnd("Extractor")
