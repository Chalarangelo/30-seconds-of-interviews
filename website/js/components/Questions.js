import { h } from "hyperapp"
import Question from "./Question"
import { EXPERTISE_STRINGS } from "../utils"

const filterBy = ({ q, category, expertise }) => {
  const isOfCorrectCategory =
    category.toLowerCase() === "all" || q.tags.includes(category.toLowerCase())

  const isOfCorrectExpertise =
    expertise.toLowerCase() === "all" ||
    EXPERTISE_STRINGS[q.expertise] === expertise.toLowerCase()

  return isOfCorrectCategory && isOfCorrectExpertise
}

export default () => state => {
  const questions = state.questions
    .filter(
      q =>
        state.filter.category.toLowerCase() === "all" ||
        q.tags.includes(state.filter.category.toLowerCase())
    )
    .sort((q1, q2) => {
      switch (state.filter.expertise.toLowerCase()) {
        case EXPERTISE_STRINGS[0]:
          return q1.expertise - q2.expertise
          break
        case EXPERTISE_STRINGS[2]:
          return q2.expertise - q1.expertise
          break
      }
    })
    .map(q => <Question {...q} />)

  return (
    <main class="Questions">
      <div class="container">
        {questions.length ? (
          questions
        ) : (
          <p class="Questions__empty">
            There are no questions based on the current filter at this point in
            time. Feel free to{" "}
            <a
              href="https://github.com/fejes713/30-seconds-of-interviews/"
              target="_blank"
              rel="noopener"
            >
              contribute a question!
            </a>
          </p>
        )}
      </div>
    </main>
  )
}
