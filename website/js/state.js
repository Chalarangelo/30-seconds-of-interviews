import questions from "../../data/questions.json"

export default {
  questions,
  filter: {
    category: "All",
    expertise: "All",
    dropdowns: [
      {
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
      },
      {
        name: "Expertise",
        isOpen: false,
        position: "right",
        items: [
          {
            name: "All",
            icon: "check"
          },
          {
            name: "Junior",
            icon: "star"
          },
          {
            name: "Intermediate",
            icon: "star"
          },
          {
            name: "Senior",
            icon: "star"
          }
        ]
      }
    ]
  }
}
