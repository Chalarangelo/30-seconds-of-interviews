export const cc = (constant, conditionalClasses) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? " " + className : ""),
    ""
  )
  return typeof constant === "object" ? res : constant + res
}
