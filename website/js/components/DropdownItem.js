import { h } from "hyperapp"
import feather from "feather-icons"
import { cc } from "../utils"

export default ({ name, icon, dropdown }) => (state, actions) => (
  <button
    class="DropdownItem"
    onclick={() =>
      actions.filter.set({ dropdown: dropdown.toLowerCase(), name })
    }
  >
    <i innerHTML={feather.icons[icon].toSvg({ class: "DropdownItem__icon" })} />
    <span>{name}</span>
  </button>
)
