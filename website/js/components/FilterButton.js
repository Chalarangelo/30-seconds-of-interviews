import { h } from "hyperapp"
import { cc } from "../utils"
import feather from "feather-icons"

const TAG_NAMES = {
  javascript: "JavaScript",
  css: "CSS",
  html: "HTML",
  node: "Node"
}

export default ({ type, icon }, children) => (state, actions) => (
  <button
    class={cc("btn FilterButton", {
      "is-active": state.filter === type
    })}
    onclick={() => actions.setFilter(type)}
    data-tooltip={
      type === "all" ? "No filter" : `Display only ${TAG_NAMES[type]} questions`
    }
  >
    {children}
    <i innerHTML={feather.icons[icon].toSvg({ class: "btn__icon" })} />
  </button>
)
