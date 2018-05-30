import { h } from "hyperapp"
import marked from "marked"
import Prism from "prismjs"

const setInnerHTML = (html) => (el) => {
  el.innerHTML = html
  Array.from(el.querySelectorAll("code[class^='lang']")).forEach((e) =>
    Prism.highlightElement(e)
  )
}

export default ({ node = "div", content, ...props }) =>
  h(node, {
    ...props,
    oncreate: setInnerHTML(marked(content))
  })
