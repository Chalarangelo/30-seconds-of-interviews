### What is a stateful component?

#### Answer

A stateful component is a component whose behavior depends on its state. Stateful components are always class components and have a state that is initialized in the constructor.

```jsx
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    // ...
  }
}
```

#### Good to hear

* Stateful components have internal state that they depend on.
* Stateful components are always class components.
* Stateful components have their state initialized in the constructor.

##### Additional links

* [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (0) -->
