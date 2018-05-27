// This script generates the README file
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")
const util = require("./util.js")
const questions = require("../data/questions.json")
const { TAG_NAMES } = util

const STATIC_PARTS_PATH = "./static-parts"

const formatOptions = code => {
	return {
		text: code,
		eslintConfig: {
			parserOptions: {
				ecmaVersion: 7
			},
			rules: {
				semi: ["error", "never"]
			}
		},
		prettierOptions: {
			bracketSpacing: true,
			printWidth: 80,
			tabWidth: 2
		},
		fallbackPrettierOptions: {
			singleQuote: false
		}
	}
}

let tagOrder = ["javascript", "css", "html"]
let questionTags = {}
let startPart = ""
let endPart = ""
let output = ""

// methods for converting to markdown
const hX = (n, text) => `\n${"#".repeat(n)} ${text}`

const detailsTOC = (title, questionsArray) => {
	let list = questionsArray
		.map(
			question =>
				`* [${question.question
					.split("\`\`\`")[0]
					.replace("\n", "")}](#${util.toKebabCase(question.question)})`
		)
		.join("\n")
	return `\n\n<details>\n<summary>${title}</summary>${list}\n</details>\n\n`
}
const detailsQuestion = (title, question) => {
	let answer = question.answer
	// add Good to Hear
	answer += `\n\n${hX(4, "Good to hear")}\n\n`
	answer += `\n${question.goodToHear.map(s => `* ${s}`).join("\n")}`
	// add Additional links
	answer += `\n\n${hX(5, "Additional links")}\n\n`
	answer += `\n${question.links.map(link => `* ${link}`).join("\n")}`
	return `\n\n<details>\n<summary>${title}</summary>\n${answer}\n</details>\n\n`
}

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
	output += `${startPart + "\n"}`

	let questionsInTag = {}

	// put questions into respective tag-keyed arrays
	questions.forEach(question => {
		question.tags.forEach(tag => {
			if (Object.keys(questionsInTag).includes(tag)) {
				questionsInTag[tag].push(question)
			} else {
				let newArr = []
				newArr.push(question)
				questionsInTag[tag] = newArr
			}
		})
	})

	// sort questionsInTag by size
	tags = Object.keys(questionsInTag)
	tags.sort(
		(tag1, tag2) =>
			questionsInTag[tag1].length == questionsInTag[tag2].length
				? 0
				: questionsInTag[tag1].length < questionsInTag[tag2].length
					? 1
					: -1
	)

	// write Table of Contents
	tags.forEach(tagKey => {
		taggedQuestions = questionsInTag[tagKey]
		output += hX(3, TAG_NAMES[tagKey])
		output += detailsTOC("View contents", taggedQuestions)
	})

	// delimeter after TOC
	output += "\n---\n"

	// write actual questions
	tags.forEach(tagKey => {
		output += hX(2, TAG_NAMES[tagKey])
		taggedQuestions = questionsInTag[tagKey]
		// sort questions by expertise
		taggedQuestions.sort((q1, q2) => q1.expertise - q2.expertise)
		taggedQuestions.forEach(question => {
			output += hX(3, question.question)
			output += detailsQuestion("View answer", question)
			output += `\n\n<br>[⬆ Back to top](#table-of-contents)\n\n`
		})
	})

	// add static part for end
	output += `\n${endPart + "\n"}`

	fs.writeFileSync("README.md", output)
} catch (err) {
	console.log(`${chalk.red("ERROR!")} During README generation: ${err}`)
	process.exit(1)
}

console.log(`${chalk.green("SUCCESS!")} README file generated!`)
console.timeEnd("Builder")
