### Why React uses className over class attribute?

#### Answer

`class` is a reserved keyword in JavaScript and JSX is an extension of JavaScript. That's the primary reason why React uses `className` instead of `class`.

```jsx
render() {
  return <span className="tooltip">tooltip</span>
}
```

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
