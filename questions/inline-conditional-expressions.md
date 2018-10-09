### What is inline conditional expressions?

#### Answer

You can use either `if` statements or ternary expressions to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by the logical operator `&&`.

```jsx
;<h1>Hello!</h1>
{
  messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>
}
```

#### Good to hear

##### Additional links

* [React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
