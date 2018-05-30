# Contribution guidelines

> 30 seconds of interviews is a community effort, so feel free to contribute in any way you can. Every contribution helps!

## There are several ways in which you can help:

* Submit [pull requests](https://github.com/fejes713/30-seconds-of-interviews/pulls) with new questions using our [template](https://github.com/fejes713/30-seconds-of-interviews/blob/master/question-template.md)
  * Don't sweat if you don't know the answer to the question. Simply put **TODO** as an answer, and someone will try to answer it
  * Try to keep answers **short** and **straight to the point**. They should be understandable in under 30 seconds
  * Summarize your answer in short thesis in **good to hear** section.
  * Every code snippet and html tag should be enclosed in markdown code blocks.
  * Of course, 30 seconds is not enough to fully cover a specific topic so include up to three additional links that further describe the mentioned topic
* [Open issue](https://github.com/fejes713/30-seconds-of-interviews/issues/new)
  * If you would like to see a new feature(eg. a new category of questions)
  * If you noticed the wrong answer to a question
  * If you noticed any other bug in our codebase
* Whenever you get an idea of the better answer to any question, please share it with us in a new [pull request](https://github.com/fejes713/30-seconds-of-interviews/pulls)
  * If it's just a typo, we don't mind, submit a quick fix to it
  * If you happen to find a better code example for the answer share it with us

## Additional information regarding the project and its structure

* **Do not modify** the `README.md` or `index.html` files. **Travis CI** will automatically build the README.md and index.html files when your pull request is merged. All changes to questions should be inside of `questions directory`

* We weren't sure how to name files inside `questions` directory. If you have any idea, let us know

* Currently, we support 4 categories of questions: _javascript_, _css_, _html_ and _node_
  * We would like to expand the project to include more categories
  * Some of the planned categories are _general_, _security_, _database_
