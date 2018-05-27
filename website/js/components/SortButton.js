import { h } from "hyperapp"
import { cc } from "../utils"
import feather from "feather-icons"

export default ({ sortBy }, children) => (state, actions) => (
  <button
    class={"btn SortButton"}
    onclick={() => actions.setSortBy(sortBy)}
    data-tooltip={
      `Sort ${state.sortBy}`
    }
  >
    {children}
    <i innerHTML={feather.icons["align-right"].toSvg({ class: "btn__icon" })} />
  </button>
)
