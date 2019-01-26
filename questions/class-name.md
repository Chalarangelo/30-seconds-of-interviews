### Why does React use `className` instead of `class` like in HTML?

#### Answer

React's philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:

```js
const element = document.createElement("div")
element.className = "hello"
```

Additionally, before ES5, reserved words could not be used in objects:

```js
const element = {
  attributes: {
    class: "hello"
  }
}
```

In IE8, this will throw an error.

In modern environments, destructuring will throw an error if trying to assign to a variable:

```js
const { class } = this.props // Error
const { className } = this.props // All good
const { class: className } = this.props // All good, but cumbersome!
```

However, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
