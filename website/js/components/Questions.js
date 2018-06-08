import { h } from "hyperapp"
import Question from "./Question"

export default () => state => (
  <main class="Questions">
    <div class="container">
      <ul class="Questions__list">
        {[...state.questions]
          .sort(
            (q1, q2) =>
              state.filter.sortAscending
                ? q1.expertise - q2.expertise
                : q2.expertise - q1.expertise
          )
          .map(q => <Question {...q} />)}
      </ul>
    </div>
  </main>
)
