import { h } from "hyperapp"
import feather from "feather-icons"

export default ({},children) => (state, actions) => ( // eslint-disable-line no-empty-pattern
  <button
    class={"btn SortButton"}
    onclick={() => actions.setSortBy()}
    data-tooltip={
      `Sort ${state.sortBy}`
    }
  >
    {children}
    <i innerHTML={feather.icons["align-right"].toSvg({ class: "btn__icon" })} />
  </button>
)
