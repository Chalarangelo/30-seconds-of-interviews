/* eslint no-restricted-globals: 0 */
import { app } from "hyperapp"
import "focus-visible"
import "./css/index.scss"
import "./js/browser"

import state from "./js/state"
import actions from "./js/actions"
import view from "./js/view"

const main = app(state, actions, view, document.body) // eslint-disable-line no-unused-vars

setTimeout(() => {
  const backToTopButton = document.querySelector(".BackToTopButton")
  addEventListener("scroll", () => {
    backToTopButton.classList[window.scrollY > 750 ? "add" : "remove"](
      "is-visible"
    )
  })
})
