import Prism from "prismjs"
import { scrollToTop } from "./utils"

export default {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  setFilter: value => {
    requestAnimationFrame(() => setTimeout(Prism.highlightAll))
    return { filter: value }
  }
}
