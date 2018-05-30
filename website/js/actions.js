import { scrollToTop } from "./utils"

export default {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => (state) => ({
    questions: state.questions.map(
      (q) => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  filter: {
    onSortDirectionChange: () => (state) => ({ sortAlpha: !state.sortAlpha }),
    onDocumentClick: (event) => (state) => {
      if (!event.target.closest(".Dropdown__button")) {
        return {
          dropdown: {
            ...state.dropdown,
            isOpen: false
          }
        }
      }
      return null
    },
    set: ({ dropdown, name }) => ({ [dropdown]: name }),
    toggleDropdown: () => (state) => ({
      dropdown: {
        ...state.dropdown,
        isOpen: !state.dropdown.isOpen
      }
    })
  }
}
