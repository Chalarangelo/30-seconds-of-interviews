### What is context?

#### Answer

Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

```js
const { Provider, Consumer } = React.createContext(defaultValue)
```

#### Good to hear

* Context provides a way to pass data through a tree of React components, without having to manually pass props.
* Context is designed to share data that is considered _global_ for a tree of React components.

##### Additional links

* [React docs on Context](https://reactjs.org/docs/context.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
