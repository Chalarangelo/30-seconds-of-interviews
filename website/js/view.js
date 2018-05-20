import { h } from "hyperapp"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"
import BackToTopButton from "./components/BackToTopButton"

export default (state, actions) => (
  <div>
    <BackToTopButton />
    <Header />
    <Filter />
    <Questions />
  </div>
)
