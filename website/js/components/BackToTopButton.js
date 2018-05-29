import { h } from "hyperapp"
import { cc } from "../utils"
import Icon from "./Icon"

export default () => (state, actions) => (
  <button
    class={cc("BackToTopButton", {
      "is-visible": state.isBackToTopButtonVisible
    })}
    onclick={actions.scrollBackToTop}
  >
    <Icon name="arrow-up" class="BackToTopButton__icon" />
  </button>
)
