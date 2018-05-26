export const cc = (constant, conditionalClasses = constant) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? " " + className : ""),
    ""
  )
  return typeof constant === "object" ? res : constant + res
}

export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    requestAnimationFrame(scrollToTop)
    scrollTo(0, c - c / 8)
  }
}

export const EXPERTISE_STRINGS = ["junior", "intermediate", "senior"]

export const TAG_NAMES = {
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  node: "Node"
}
