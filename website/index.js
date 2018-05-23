import "./css/index"
import "./js/browser"
import "focus-visible"
import Prism from "prismjs"

import { app } from "hyperapp"
import state from "./js/state"
import actions from "./js/actions"
import view from "./js/view"

const main = app(state, actions, view, document.body)

// Once app has mounted to DOM
setTimeout(() => {
  Prism.highlightAll()

  // Back to top button. Linking with Hyperapp state seems
  // to debounce the view update
  const backToTopButton = document.querySelector(".BackToTopButton")
  addEventListener("scroll", () => {
    backToTopButton.classList[window.scrollY > 750 ? "add" : "remove"](
      "is-visible"
    )
  })
})
