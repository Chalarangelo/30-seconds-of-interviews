import { h } from "hyperapp"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Filter from "./components/Filter"
import Questions from "./components/Questions"
import BackToTopButton from "./components/BackToTopButton"

export default () => (
  <div>
    <BackToTopButton />
    <Header />
    <Introduction />
    <Filter />
    <Questions />
  </div>
)
