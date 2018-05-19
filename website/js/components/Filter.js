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
      <FilterButton type="javascript" icon="code">
        JavaScript
      </FilterButton>
      <FilterButton type="node" icon="server">
        Node
      </FilterButton>
    </div>
  </div>
)
