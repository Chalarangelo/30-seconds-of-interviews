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
  if (content in markStore) {
    return markStore[content]
  }

  const result = marked(content)
  markStore[content] = result
  return result
}

export default ({ node = "div", content, ...props }) =>
  h(node, {
    ...props,
    oncreate: setInnerHTML(memoMarked(content))
  })
