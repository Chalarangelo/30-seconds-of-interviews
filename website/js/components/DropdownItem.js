import { h } from "hyperapp"
import { cc, EXPERTISE_STRINGS } from "../utils"
import Icon from "./Icon"

export default ({ name, icon, dropdown }) => (state, actions) => {
  const dropdownIndex = EXPERTISE_STRINGS.indexOf(name.toLowerCase())

  return (
    <button
      class={cc(`DropdownItem is-${name.toLowerCase()}`, {
        "is-active": state.filter[dropdown.toLowerCase()] === name
      })}
      onclick={() => actions.filter.set(name)}
    >
      {[...Array(dropdownIndex === -1 ? 1 : dropdownIndex + 1)].map(() => (
        <Icon
          name={icon}
          class={`DropdownItem__icon is-${name.toLowerCase()}`}
        />
      ))}
      <span class="DropdownItem__text">{name}</span>
    </button>
  )
}
