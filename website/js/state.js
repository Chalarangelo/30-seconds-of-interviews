import questions from "../../data/questions.json"
import { filterStrings, sortByStrings } from './utils'

export default {
  questions,
  filter: filterStrings.all,
  sortBy: sortByStrings.expertise
}
