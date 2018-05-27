import { h } from "hyperapp"
import FilterButton from "./FilterButton"
import SortButton from "./SortButton"
import { TAG_NAMES } from "../utils"

export default () => (
  <div class="Filter">
    <div class="container">
      <FilterButton type={TAG_NAMES.all} icon="check">
        All
      </FilterButton>
      <FilterButton type={TAG_NAMES.html} icon="layout">
        HTML
      </FilterButton>
      <FilterButton type={TAG_NAMES.css} icon="feather">
        CSS
      </FilterButton>
      <FilterButton type={TAG_NAMES.javascript} icon="code">
        JavaScript
      </FilterButton>
      <FilterButton type={TAG_NAMES.node} icon="server">
        Node
      </FilterButton>
      <SortButton>
        Sort By
      </SortButton>
    </div>
  </div>
)
