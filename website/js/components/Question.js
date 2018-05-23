import { h } from "hyperapp"
import marked from "marked"
import feather from "feather-icons"
import { cc } from "../utils"

export default ({ name, question, answer, goodToHear, isOpen, expertise }) => (
  state,
  actions
) => (
  <div class="Question">
    <div class={`Question__badge is-${expertise}`}>{expertise}</div>
    <div class="Question__heading" innerHTML={marked(`## ${question}`)} />
    <button
      class="btn Question__button"
      onclick={() => actions.onAnswerButtonClick({ name, isOpen })}
    >
      {isOpen ? "Hide" : "Show"} answer
      <i
        innerHTML={feather.icons["chevron-down"].toSvg({
          class: cc("btn__icon", { "is-rotated": isOpen })
        })}
      />
    </button>
    <div class={cc("Question__answer", { "is-open": isOpen })}>
      <div innerHTML={marked(answer)} />
      {goodToHear.length ? <h4>Good to hear</h4> : null}
      <ul>{goodToHear.map(i => <li innerHTML={marked(i)} />)}</ul>
    </div>
  </div>
)
