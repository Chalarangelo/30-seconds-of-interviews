import { h } from "hyperapp"
import marked from "marked"
import { cc } from "../utils"

export default ({ name, question, answer, isOpen }) => (state, actions) => (
  <div class="Question">
    <div class="Question__heading" innerHTML={marked(`## ${question}`)} />
    <button
      class="Question__button"
      onclick={event => actions.onAnswerButtonClick({ event, name, isOpen })}
    >
      {isOpen ? "Hide answer" : "Show answer"}
    </button>
    <div
      class={cc("Question__answer", { "is-open": isOpen })}
      innerHTML={marked(answer)}
    />
  </div>
)
