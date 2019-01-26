### How do you ensure methods have the correct `this` context in React component classes?

#### Answer

In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.

```js
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  // Perform some logic
}
```

* The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:

```js
handleClick = () => {
  console.log('this is:', this);
}

render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
```

* You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:

```js
<button onClick={e => this.handleClick(e)}>Click me</button>
```

Note that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant.

#### Good to hear

* You can either bind methods to the component instance context in the constructor, use public class fields syntax, or use inline arrow functions.

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
* [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
