import { h } from "hyperapp"
import {cc} from "../utils"
import Icon from "./Icon"

export default ({ name, icon, dropdown }) => (state, actions) => (
  <button
    class="DropdownItem"
    onclick={() =>
      actions.filter.set({ dropdown: dropdown.toLowerCase(), name })
    }
  >
    <Icon name={icon} class={`DropdownItem__icon is-${name.toLowerCase()}`} />
    <span>{name}</span>
  </button>
)
