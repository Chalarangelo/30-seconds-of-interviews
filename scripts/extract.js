// This script converts question markdown files into JSON format
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")
const { attempt, readQuestions, getCodeBlocks } = require("./util")

console.time("Extractor")

const getSection = (searchString, contents) => {
  const searchIndex = contents.indexOf(searchString)
  if (searchIndex < 0) return ""
  const startIndex = searchIndex + searchString.length + 1
  const stopIndex = contents.indexOf("\n#", startIndex)
  const endIndex = stopIndex === -1 ? undefined : stopIndex

  return contents.slice(startIndex, endIndex).trim()
}

attempt("questions.json generation", () => {
  const output = Object.entries(readQuestions()).map(([ name, contents ]) => {
    const question = getSection("", contents.slice(3))
    const answer = getSection("#### Answer", contents)

    const goodToHear = getSection("#### Good to hear", contents)
      .split("\n")
      .map(v => v.replace(/[*-] /g, ""))
      .filter(v => v.trim() !== "")

    const links = getSection("##### Additional links", contents)
      .split("\n")
      .filter(v =>
        /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/.test(
          v
        )
      )
      .map(v => v.replace(/[*-] /g, ""))
      .filter(v => v.trim() !== "" && !v.includes("tags"))
    return {
      name,
      question,
      answer,
      goodToHear,
      links,
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
