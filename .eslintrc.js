module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["import", "react", "markdown"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "linebreak-style": "off",
    "react/jsx-uses-vars": "error",
    "no-nested-ternary": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-vars": [2, { varsIgnorePattern: "h" }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        singleValue: false
      }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    "no-param-reassign": ["error", { props: false }]
  }
}
