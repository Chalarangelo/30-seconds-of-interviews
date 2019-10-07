/* eslint no-console: 0, no-cond-assign: 0 */

const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")

const QUESTIONS_PATH = "./questions"

const TAG_NAMES = {
  javascript: "JavaScript",
  css: "CSS",
  html: "HTML",
  security: "Security",
  node: "Node",
  react: "React",
  accessibility: "Accessibility"
}

const attempt = (task, cb) => {
  try {
    return cb()
  } catch (e) {
    console.log(`${chalk.red("ERROR!")} During ${task}: ${e}`)
    process.exit(1)
    return null
  }
}

const readQuestions = () =>
  attempt("read questions", () =>
    fs
      .readdirSync(QUESTIONS_PATH)
      .filter(f => !f.includes("eslint"))
      .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
      .reduce((acc, name) => {
        acc[name] = fs
          .readFileSync(path.join(QUESTIONS_PATH, name), "utf8")
          .replace(/\r\n/g, "\n")
        return acc
      }, {})
  )

const capitalize = ([ first, ...rest ], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""))

const getCodeBlocks = str => {
  const regex = /```[.\S\s]*?```/g
  const results = []
  let m = null
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex += 1
    }
    m.forEach(match => results.push(match))
  }
  return results
}

const getSection = (searchString, contents, includeSubsections = true) => {
  const indexOfSearch = contents.indexOf(searchString)
  if (indexOfSearch < 0) return ""

  let endSearch = "\\n#"
  if (includeSubsections) {
    let i
    for (i = 0; searchString[i] === "#" && i < searchString.length; i++);

    if (i > 0) {
      endSearch += `{${i - 1},${i}}[^#]`
    }
  }
  const endRegex = new RegExp(endSearch)

  const sliceStart = indexOfSearch + searchString.length + 1
  const endIndex = contents.slice(sliceStart).search(endRegex)
  const sliceEnd = endIndex === -1 ? undefined : endIndex + sliceStart

  return contents.slice(sliceStart, sliceEnd).trim()
}

const getFirstSection = (contents, includeSubsections) =>
  getSection("", contents.slice(3), includeSubsections)

module.exports = {
  attempt,
  readQuestions,
  capitalize,
  getCodeBlocks,
  QUESTIONS_PATH,
  TAG_NAMES,
  getSection,
  getFirstSection
}
