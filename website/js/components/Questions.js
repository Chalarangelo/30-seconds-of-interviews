import { h } from "hyperapp"
import Question from "./Question"
import { EXPERTISE_STRINGS } from "../utils"

export default () => state => (
  <main class="Questions">
    <div class="container">
      <ul class="Questions__list">
        {state.questions
          .filter(
            q =>
              state.filter.category.toLowerCase() === "all" ||
              q.tags.includes(state.filter.category.toLowerCase())
          )
          .sort((q1, q2) => {
            switch (state.filter.expertise.toLowerCase()) {
              case EXPERTISE_STRINGS[0]:
                return q1.expertise - q2.expertise
              case EXPERTISE_STRINGS[2]:
                return q2.expertise - q1.expertise
              default:
                return 1
            }
          })
          .map(q => <Question {...q} />)}
      </ul>
    </div>
  </main>
)
