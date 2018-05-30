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
    >
      <span>Expertise</span>
      {state.filter.sortAlpha ? (
        <Icon class="btn__icon" name="arrow-down" />
      ) : (
        <Icon class="btn__icon" name="arrow-up" />
      )}
    </button>
  </div>
)
