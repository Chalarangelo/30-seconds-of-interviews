### How to bind methods or event handlers in JSX callbacks?

#### Answer

* In JavaScript classes, the methods are not bound by default. The same thing applies for ReactJS event handlers defined as class methods. Normally we `bind` them in constructor as follows:

```jsx
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  // Perform some logic
}
```

* If you don’t like to use `bind` approach, then public class fields syntax can be used to correctly bind callbacks:

```jsx
handleClick = () => {
  console.log('this is:', this);
}
<button onClick={this.handleClick}>
  Click me
</button>
```

* You can also use arrow functions directly in the callbacks as below:

```jsx
<button onClick={(e) => this.handleClick(e)}>
  Click me
</button>
```

Remember that ff the callback is passed as prop to lower components, those components might do an extra re-rendering. In those cases, it is preferred to go with bind or public class fields syntax approach considering performance.

#### Good to hear

* You can bind methods to event handlers in the constructor, using public class fields syntax or using arrow functions in callbacks.

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
* [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->