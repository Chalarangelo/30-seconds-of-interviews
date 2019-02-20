import { h } from "hyperapp"
import Question from "./Question"
import FrontendMasters from "./RecommendedResource"
import RecommendedResource from "./RecommendedResource"

const displayQuestions = (state, questions) => {
  questions.sort(
    (q1, q2) =>
      state.filter.sortAscending
        ? q1.expertise - q2.expertise
        : q2.expertise - q1.expertise
  )

  const halfway = Math.floor(questions.length / 2)
  const firstHalf = questions.slice(0, halfway)
  const secondHalf = questions.slice(halfway, questions.length)

  return (
    <div>
      {firstHalf.map(q => <Question {...q} />)}
      <RecommendedResource />
      {secondHalf.map(q => <Question {...q} />)}
    </div>
  )
}

export default () => state => (
  <main class="Questions">
    <div class="container">
      <ul class="Questions__list">
        {displayQuestions(state, [...state.questions])}
        <FrontendMasters />
      </ul>
    </div>
  </main>
)
