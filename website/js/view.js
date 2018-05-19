import { h } from "hyperapp"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"

export default (state, actions) => (
  <div>
    <Header />
    <Filter />
    <Questions />
  </div>
)
