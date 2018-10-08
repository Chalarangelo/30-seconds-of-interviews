import questions from "../../data/questions.json"

export default {
  questions,
  filter: {
    category: "All",
    expertise: "Junior",
    sortAscending: true,
    dropdown: {
      name: "Category",
      items: [
        {
          name: "All",
          icon: "check"
        },
        {
          name: "HTML",
          icon: "layout"
        },
        {
          name: "CSS",
          icon: "feather"
        },
        {
          name: "JavaScript",
          icon: "code"
        },
        {
          name: "React",
          icon: "globe"
        },
        {
          name: "Node",
          icon: "server"
        },
        {
          name: "Security",
          icon: "shield"
        }
      ]
    }
  }
}
