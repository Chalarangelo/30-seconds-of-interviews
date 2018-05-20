import { h } from "hyperapp"
import feather from "feather-icons"
import { cc } from "../utils"

export default () => (state, actions) => (
  <button
    class={cc("BackToTopButton", {
      "is-visible": state.isBackToTopButtonVisible
    })}
    onclick={actions.scrollBackToTop}
  >
    <i
      innerHTML={feather.icons["arrow-up"].toSvg({
        class: "BackToTopButton__icon"
      })}
    />
  </button>
)
