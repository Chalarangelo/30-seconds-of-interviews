import { scrollToTop } from "./utils"

export default {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  filter: {
    onDocumentClick: event => state => {
      if (!event.target.closest(".Dropdown__button")) {
        return {
          dropdown: {
            ...state.dropdown,
            isOpen: false
          }
        }
      }
    },
    set: ({ dropdown, name }) => ({ [dropdown]: name }),
    toggleDropdown: name => state => ({
      dropdown: {
        ...state.dropdown,
        isOpen: !state.dropdown.isOpen
      }
    })
  }
}
