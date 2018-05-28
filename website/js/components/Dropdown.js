import { h } from "hyperapp"
import feather from "feather-icons"
import { cc } from "../utils"
import DropdownItem from "./DropdownItem"

export default ({ name, items, isOpen, position }) => (state, actions) => (
  <div class="Dropdown">
    <div>
      <label class="Dropdown__label">{name}</label>
    </div>
    <button
      class={cc("btn Dropdown__button", {
        "is-open": isOpen
      })}
      onmousedown={() => actions.filter.toggleDropdown(name)}
    >
      <span>{state.filter[name.toLowerCase()]}</span>
      <i
        innerHTML={feather.icons["chevron-down"].toSvg({
          class: "btn__icon"
        })}
      />
    </button>
    <ul
      class={cc("Dropdown__items", {
        "is-open": isOpen,
        "is-right": position === "right"
      })}
    >
      {items.map(item => (
        <li>
          <DropdownItem {...item} dropdown={name} />
        </li>
      ))}
    </ul>
  </div>
)
