import { h } from "hyperapp"
import feather from "feather-icons"
import { cc } from "../utils"

export default ({ type, icon }, children) => (state, actions) => (
  <button
    class={cc(`btn FilterButton is-${type.toLowerCase()}`, {
      "is-active": state.filter === type,
      "is-all": type === "all"
    })}
    onclick={() => actions.setFilter(type)}
    data-tooltip={
      type === "all" ? "No filter" : `Display only ${type} questions`
    }
  >
    {children}
    <i innerHTML={feather.icons[icon].toSvg({ class: "btn__icon" })} />
  </button>
)
