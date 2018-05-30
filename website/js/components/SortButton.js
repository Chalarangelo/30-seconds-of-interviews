import { h } from "hyperapp"
import { cc } from "../utils"
import Icon from "./Icon"

export default () => (state, actions) => (
  <div class="Dropdown">
    <div>
      <label class="Dropdown__label">Sort by</label>
    </div>
    <button
      class="btn Dropdown__button"
      onclick={() => actions.filter.onSortDirectionChange()}
      data-tooltip={`${
        state.filter.sortAscending ? "Ascending" : "Descending"
      } order`}
    >
      <span>Expertise</span>
      <i
        class={cc("Dropdown__button-icon", {
          "is-rotated": state.filter.sortAscending
        })}
      >
        <Icon class="btn__icon" name="arrow-down" />
      </i>
    </button>
  </div>
)
