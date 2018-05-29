import { h } from "hyperapp"
import Dropdown from "./Dropdown"

export default () => state => (
  <div class="Filter">
    <div class="container">
      <Dropdown {...state.filter.dropdown} />
    </div>
  </div>
)
