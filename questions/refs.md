### What are refs in React? When should they be used?

#### Answer

Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

Refs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    return <div ref={this.myRef} />
  }
}
```

Refs can also be used in functional components with the help of closures.

#### Good to hear

* Refs are used to return a reference to an element.
* Refs shouldn't be overused.
* You can create a ref using `React.createRef()` and attach to elements via the `ref` attribute.

##### Additional links

* [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
