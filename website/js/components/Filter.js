import { h } from "hyperapp"
import FilterButton from "./FilterButton"
import SortButton from "./SortButton"
import { filterStrings } from "../utils"

export default () => (
  <div class="Filter">
    <div class="container">
      <FilterButton type={filterStrings.all} icon="check">
        All
      </FilterButton>
      <FilterButton type={filterStrings.html} icon="layout">
        HTML
      </FilterButton>
      <FilterButton type={filterStrings.css} icon="feather">
        CSS
      </FilterButton>
      <FilterButton type={filterStrings.js} icon="code">
        JavaScript
      </FilterButton>
      <FilterButton type={filterStrings.node} icon="server">
        Node
      </FilterButton>
      <SortButton>
        Sort By
      </SortButton>
    </div>
  </div>
)
