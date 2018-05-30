import { h } from "hyperapp"
import BackToTopButton from "./components/BackToTopButton"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"

export default () => (
  <div>
    <BackToTopButton />
    <Header />
    <Filter />
    <Questions />
  </div>
)
