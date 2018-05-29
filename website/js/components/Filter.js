import { h } from "hyperapp"
import Dropdown from "./Dropdown"
import SortButton from "./SortButton"

export default () => state => (
  <div class="Filter">
    <div class="container">
      <Dropdown {...state.filter.dropdown} />
      <SortButton />
    </div>
  </div>
)
