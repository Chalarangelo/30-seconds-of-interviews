import { scrollToTop } from "./utils"

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
    set: ({ dropdown, name }) => ({ [dropdown]: name }),
    toggleDropdown: name => state => ({
      dropdowns: state.dropdowns.map(d => ({
        ...d,
        isOpen: d.name === name ? !d.isOpen : false
      }))
    })
  }
}
