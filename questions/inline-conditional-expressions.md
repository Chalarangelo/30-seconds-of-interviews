### What are inline conditional expressions?

#### Answer

Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.

For example, this won't work:

<!-- prettier-ignore -->
```js
function App({ messages, isVisible }) {
  return (
    <div>
      if (messages.length > 0) {
        <h2>You have {messages.length} unread messages.</h2>
      } else {
        <h2>You have no unread messages.</h2>
      }
      if (isVisible) {
        <p>I am visible.</p>
      }
    </div>
  )
}
```

Logical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.

```js
function App({ messages, isVisible }) {
  return (
    <div>
      {messages.length > 0 ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You have no unread messages.</h2>
      )}
      {isVisible && <p>I am visible.</p>}
    </div>
  )
}
```

#### Good to hear

##### Additional links

* [React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
