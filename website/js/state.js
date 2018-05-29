import questions from "../../data/questions.json"

export default {
  questions,
  filter: {
    category: "All",
    expertise: "Junior",
    sortAlpha: true,    
    dropdown: {
      name: "Category",
      isOpen: false,
      position: "left",
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
          name: "Node",
          icon: "server"
        }
      ]
    }
  }
}
