### Which is the preferred option between callback refs and findDOMNode()?

#### Answer

Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.

```js
// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}

// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView()
  }

  render() {
    return <div ref={node => (this.node = node)} />
  }
}
```

#### Good to hear

* Callback refs are preferred over `findDOMNode()`.

##### Additional links

* [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
