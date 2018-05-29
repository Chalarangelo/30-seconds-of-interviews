import { h } from "hyperapp"
import marked from "marked"
import Prism from "prismjs"

const setInnerHTML = html => el => {
  el.innerHTML = html
  Array.from(el.querySelectorAll("code[class^='lang']")).forEach(el =>
    Prism.highlightElement(el)
  )
}

export default ({ node = "div", content, ...props }) =>
  h(node, {
    ...props,
    oncreate: setInnerHTML(marked(content)),
    onupdate: setInnerHTML(marked(content))
  })
