// This script converts question markdown files into JSON format
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")
const { attempt, readQuestions, getCodeBlocks } = require("./util")

console.time("Extractor")

attempt("questions.json generation", () => {
  const output = Object.entries(readQuestions()).map(([name, contents]) => {
    const question = contents
      .slice(0 + 4, contents.indexOf("#### Answer"))
      .trim()
    const answer = contents
      .slice(
        contents.indexOf("#### Answer") + 12,
        contents.indexOf("#### Good to hear")
      )
      .trim()

    return {
      name,
      question,
      answer,
      goodToHear: contents
        .slice(
          contents.indexOf("#### Good to hear") + 18,
          contents.indexOf("##### Additional links")
        )
        .trim()
        .split("\n")
        .map(v => v.replace(/[*-] /g, ""))
        .filter(v => v.trim() !== ""),
      links: contents
        .slice(contents.indexOf("##### Additional links") + 23)
        .trim()
        .split("\n")
        .filter(v =>
          /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/.test(
            v
          )
        )
        .map(v => v.replace(/[*-] /g, ""))
        .filter(v => v.trim() !== "" && !v.includes("tags")),
      tags: (contents.match(/<!--\s*tags:\s*\((.+)\)/) || [])[1].split(","),
      expertise: parseInt(
        (contents.match(/<!--\s*expertise:\s*\((.+)\)/) || [])[1],
        10
      ),
      questionCodeBlocks: getCodeBlocks(question),
      answerCodeBlocks: getCodeBlocks(answer)
    }
  })

  fs.writeFileSync("./data/questions.json", JSON.stringify(output, null, 2))
})

console.log(`${chalk.green("SUCCESS!")} questions.json file generated!`)
console.timeEnd("Extractor")
