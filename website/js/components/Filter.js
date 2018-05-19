import { h } from "hyperapp"
import FilterButton from "./FilterButton"

export default () => (
  <div class="Filter">
    <div class="container">
      <FilterButton type="all" icon="check">
        All
      </FilterButton>
      <FilterButton type="html" icon="layout">
        HTML
      </FilterButton>
      <FilterButton type="css" icon="feather">
        CSS
      </FilterButton>
      <FilterButton type="javascript" icon="terminal">
        JavaScript
      </FilterButton>
    </div>
  </div>
)
