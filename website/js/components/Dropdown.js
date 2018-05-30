import { h } from "hyperapp"
import { cc } from "../utils"
import DropdownItem from "./DropdownItem"
import Icon from "./Icon"

export default ({ name, items, isOpen }) => state => (
  <div class="Dropdown">
    <div>
      <label class="Dropdown__label">{name}</label>
    </div>
    <button class="btn Dropdown__button">
      <span>{state.filter[name.toLowerCase()]}</span>
      <Icon class="btn__icon" name="chevron-down" />
    </button>
    <ul
      class={cc("Dropdown__items", {
        "is-open": isOpen
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
