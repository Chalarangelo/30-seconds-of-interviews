### What is a stateful component in React?

#### Answer

A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.

```js
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    // ...
  }
}

// Stateful function component
function App() {
  const [count, setCount] = useState(0)
  return // ...
}
```

#### Good to hear

* Stateful components have internal state that they depend on.
* Stateful components are class components or function components that use stateful Hooks.
* Stateful components have their state initialized in the constructor or with `useState()`.

##### Additional links

* [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (0) -->
