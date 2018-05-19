import { h } from "hyperapp"
import Question from "./Question"

export default () => state => (
  <main class="Questions">
    <div class="container">
      {state.questions
        .filter(q => q.category === state.filter || state.filter == "all")
        .map(q => <Question {...q} />)}
    </div>
  </main>
)
