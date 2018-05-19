import { h } from "hyperapp"
import Question from "./Question"

export default () => state => (
  <main class="Questions">
    <div class="container">
      {state.questions.map(question => <Question {...question} />)}
    </div>
  </main>
)
