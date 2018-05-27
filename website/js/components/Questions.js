import { h } from "hyperapp"
import Question from "./Question"
import { SORTBY_STRINGS } from '../utils'

export default () => state => (
  <main class="Questions">
    <div class="container">
      {state.questions
        .filter(q => q.tags.includes(state.filter.toLowerCase()) || state.filter === "all")
        .sort((q1, q2) => sortComparison(q1, q2, state.sortBy))
        .map(q => <Question {...q} />)}
    </div>
  </main>
)

const sortComparison = (q1, q2, sortCondition) => {
  switch(sortCondition) {
    case SORTBY_STRINGS.expertise:
      return q1.expertise - q2.expertise
      break
    case SORTBY_STRINGS.alpha:
      return q1.name === q2.name ? 0 : q1.name > q2.name ? 1 : -1
      break
    case SORTBY_STRINGS.nonalpha:
      return q1.name === q2.name ? 0 : q1.name < q2.name ? 1 : -1
      break
  }
}