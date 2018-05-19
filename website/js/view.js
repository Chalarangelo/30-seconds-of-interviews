import { h } from "hyperapp"
import Header from "./components/Header"
import Questions from "./components/Questions"

export default (state, actions) => (
  <div>
    <Header />
    <Questions />
  </div>
)
