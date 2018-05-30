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
      <Icon
        class="btn__icon"
        name={state.filter.sortAscending ? "arrow-down" : "arrow-up"}
      />
    </button>
  </div>
)
