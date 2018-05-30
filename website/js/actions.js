import { scrollToTop } from "./utils"

export default {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  filter: {
    onSortDirectionChange: () => state => ({
      sortAscending: !state.sortAscending
    }),
    set: name => ({ category: name })
  }
}
