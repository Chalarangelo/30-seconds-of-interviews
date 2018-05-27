import Prism from "prismjs";
import { scrollToTop, SORTBY_STRINGS, nextValInObj } from "./utils";

export default {
	scrollBackToTop: scrollToTop,
	onAnswerButtonClick: ({ name, isOpen }) => state => ({
		questions: state.questions.map(
			q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
		)
	}),
	setFilter: value => {
		requestAnimationFrame(() => setTimeout(Prism.highlightAll));
		return { filter: value };
	},
	setSortBy: value => state => {
		return { sortBy: nextValInObj(SORTBY_STRINGS, state.sortBy) };
	}
};
