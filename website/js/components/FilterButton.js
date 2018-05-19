import { h } from "hyperapp"
import { cc } from "../utils"
import feather from "feather-icons"

export default ({ type, icon }, children) => (state, actions) => (
  <button
    class={cc("btn FilterButton", {
      "is-active": state.filter === type
    })}
    onclick={() => actions.setFilter(type)}
  >
    {children}
    <i class="btn__icon" innerHTML={feather.icons[icon].toSvg()} />
  </button>
)
