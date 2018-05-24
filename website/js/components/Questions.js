import { h } from "hyperapp"
import Question from "./Question"

export default () => state => (
  <main class="Questions">
    <div class="container">
      {state.questions
        .filter(q => q.tags.includes(state.filter) || state.filter === "all")
        .sort((q1, q2) => q1.expertise > q2.expertise)
        .map(q => <Question {...q} />)}
    </div>
  </main>
)
