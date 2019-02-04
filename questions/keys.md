### What is a key? What are the benefits of using it in lists?

#### Answer

Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element's key must be unique (e.g. IDs from the data or indexes as a last resort).

```js
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)
```

* Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.
* If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag.

#### Good to hear

* Keys give elements in a collection a stable identity and help React identify changes.
* You should avoid using indexes as keys if the order of items may change.
* You should lift the key up to the component, instead of the `<li>` element, if you extract list items as components.

##### Additional links

* [React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
