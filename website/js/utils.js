/* eslint no-restricted-globals: 0 */
export const cc = (constant, conditionalClasses = constant) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? ` ${className}` : ""),
    ""
  )
  return typeof constant === "object" ? res : constant + res
}

export const scrollToTop = (() => {
  let isScrolling = false
  let isScrollingTimeout
  addEventListener(
    "wheel",
    () => {
      isScrolling = true
      clearTimeout(isScrollingTimeout)
      isScrollingTimeout = setTimeout(() => {
        isScrolling = false
      }, 100)
    },
    { passive: true }
  )

  return () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (!isScrolling && c > 0) {
      requestAnimationFrame(scrollToTop)
      scrollTo(0, c - c / 8)
    }
  }
})()

export const nextValInObj = (obj, key) => {
  const keys = Object.keys(obj)
  const i = Object.values(obj).indexOf(key)
  return typeof (i !== -1 && keys[i + 1] && obj[keys[i + 1]]) === "undefined"
    ? Object.values(obj)[0]
    : i !== -1 && keys[i + 1] && obj[keys[i + 1]]
}

export const EXPERTISE_STRINGS = [ "easy", "intermediate", "hard" ]

export const TAG_NAMES = {
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  node: "Node",
  security: "Security",
  react: "React",
  all: "all"
}

export const onUserInputChange = callback => {
  let type = "mouse"
  let lastTime = 0
  const mousemoveHandler = () => {
    const now = performance.now()
    if (now - lastTime < 20) {
      type = "mouse"
      callback(type)
      document.removeEventListener("mousemove", mousemoveHandler)
    }
    lastTime = now
  }
  document.addEventListener("touchstart", () => {
    if (type === "touch") return
    type = "touch"
    callback(type)
    document.addEventListener("mousemove", mousemoveHandler)
  })
}
