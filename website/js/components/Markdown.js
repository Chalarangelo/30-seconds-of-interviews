import { h } from "hyperapp"
import marked from "marked"
import Prism from "prismjs"

const markStore = Object.create(null)

const setInnerHTML = html => el => {
  el.innerHTML = html
  Array.from(el.querySelectorAll("code[class^='lang']")).forEach(e =>
    Prism.highlightElement(e)
  )
}

const memoMarked = content => {
  if (!markStore.hasOwnProperty(content)) markStore[content] = marked(content) 

  return markStore[content]
}

export default ({ node = "div", content, ...props }) =>
  h(node, {
    ...props,
    oncreate: setInnerHTML(memoMarked(content))
  })
