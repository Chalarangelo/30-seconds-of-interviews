import { h } from "hyperapp"
import marked from "marked"
import feather from "feather-icons"
import { cc } from "../utils"

export default ({ name, question, answer, isOpen }) => (state, actions) => (
  <div class="Question">
    <div class="Question__heading" innerHTML={marked(`## ${question}`)} />
    <button
      class="btn Question__button"
      onclick={event => actions.onAnswerButtonClick({ event, name, isOpen })}
    >
      {isOpen ? "Hide answer" : "Show answer"}
      <span
        class={cc("btn__icon", { "is-rotated": isOpen })}
        innerHTML={feather.icons["chevron-down"].toSvg()}
      />
    </button>
    <div
      class={cc("Question__answer", { "is-open": isOpen })}
      innerHTML={marked(answer)}
    />
  </div>
)
