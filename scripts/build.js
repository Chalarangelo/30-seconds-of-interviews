// This script generates the README file
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")
const util = require("./util.js")
const markdown = require("markdown-builder")
const questions = require("../data/questions.json")

const { headers, misc, lists } = markdown
const { TAG_NAMES } = util

const STATIC_PARTS_PATH = "./static-parts"

let startPart = ""
let endPart = ""
let output = ""

const detailsTOC = (title, questionsArray) =>
  `\n${misc
    .collapsible(
      title,
      lists
        .ul(questionsArray, question =>
          misc.link(
            question.question
              .replace("\n", "")
              .split("```")[0]
              .trim(),
            misc.anchor(
              question.question
                .replace("\n", "")
                .split("```")[0]
                .trim()
            )
          )
        )
        .trim()
    )
    .trim()}\n\n`

const detailsQuestion = (title, question) =>
  misc.collapsible(
    title,
    `${question.answer.toString()}\n\n${headers.h4(
      "Good to hear"
    )}\n\n${lists.ul(question.goodToHear)}\n${headers.h5(
      "Additional Links"
    )}\n\n${lists.ul(question.links)}`
  )

console.time("Builder")

try {
  startPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, "README-start.md"),
    "utf8"
  )
  endPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, "README-end.md"),
    "utf8"
  )
} catch (err) {
  console.log(`${chalk.red("ERROR!")} During static part loading: ${err}`)
  process.exit(1)
}

try {
  // add static part for start
  output += `${startPart}\n`

  const questionsInTag = {}

  // put questions into respective tag-keyed arrays
  questions.forEach(question => {
    question.tags.forEach(tag => {
      if (Object.keys(questionsInTag).includes(tag)) {
        questionsInTag[tag].push(question)
      } else {
        const newArr = []
        newArr.push(question)
        questionsInTag[tag] = newArr
      }
    })
  })

  // sort questionsInTag by size
  const tags = Object.keys(questionsInTag)
  tags.sort(
    (tag1, tag2) =>
      questionsInTag[tag1].length === questionsInTag[tag2].length
        ? 0
        : questionsInTag[tag1].length < questionsInTag[tag2].length
          ? 1
          : -1
  )

  // write Table of Contents
  tags.forEach(tagKey => {
    const taggedQuestions = questionsInTag[tagKey]
    output += headers.h3(TAG_NAMES[tagKey])
    output += detailsTOC("View contents", taggedQuestions)
  })

  // delimeter after TOC
  output += misc.hr()

  // write actual questions
  tags.forEach(tagKey => {
    output += headers.h2(TAG_NAMES[tagKey])
    const taggedQuestions = questionsInTag[tagKey]
    // sort questions by expertise
    taggedQuestions.sort((q1, q2) => q1.expertise - q2.expertise)
    taggedQuestions.forEach(question => {
      output += headers.h3(question.question).trim()
      output += detailsQuestion("View answer", question)
      output += `\n<br>${misc.link(
        "⬆ Back to top",
        misc.anchor("Table of Contents")
      )}\n\n`
    })
  })

  // add static part for end
  output += `\n${endPart}\n`

  fs.writeFileSync("README.md", output)
} catch (err) {
  console.log(`${chalk.red("ERROR!")} During README generation: ${err}`)
  process.exit(1)
}

console.log(`${chalk.green("SUCCESS!")} README file generated!`)
console.timeEnd("Builder")
