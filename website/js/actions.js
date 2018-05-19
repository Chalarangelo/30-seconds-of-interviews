export default {
  onAnswerButtonClick: ({ event, name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  setFilter: value => ({ filter: value })
}
