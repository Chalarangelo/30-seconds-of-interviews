import Prism from "prismjs"
import { scrollToTop } from "./utils"

// TODO: Find a better solution to highlighting on state change...
const highlightCode = () => {
  requestAnimationFrame(() => setTimeout(Prism.highlightAll))
  return true
}

export default {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  filter: {
    onDocumentClick: ({ target }) => ({ dropdowns }) => ({
      dropdowns: target.closest(".Dropdown__button")
        ? dropdowns
        : dropdowns.map(d => ({
            ...d,
            isOpen: false
          }))
    }),
    set: ({ dropdown, name }) => highlightCode() && { [dropdown]: name },
    toggleDropdown: name => state => ({
      dropdowns: state.dropdowns.map(d => ({
        ...d,
        isOpen: d.name === name ? !d.isOpen : false
      }))
    })
  }
}
