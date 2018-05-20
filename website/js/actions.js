import Prism from "prismjs"
import { scrollToTop } from "./utils"

export default {
  onScroll: () => ({
    isBackToTopButtonVisible: window.scrollY >= 750
  }),
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ event, name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  setFilter: value => {
    requestAnimationFrame(() => {
      setTimeout(Prism.highlightAll)
    })
    return { filter: value }
  }
}
