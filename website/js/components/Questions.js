import { h } from "hyperapp"
import questions from "../../../data/questions.json"
import Question from "./Question"

export default () => (
  <main class="Questions">
    <div class="container">
      {questions.map(question => <Question {...question} />)}
    </div>
  </main>
)
