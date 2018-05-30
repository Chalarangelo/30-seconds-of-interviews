import { h } from "hyperapp"
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
      {state.filter.sortAscending ? (
        <Icon class="btn__icon" name="arrow-up" />
      ) : (
        <Icon class="btn__icon" name="arrow-down" />
      )}
    </button>
  </div>
)
