### What is the difference between an element and a component in React?

#### Answer

An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.

A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.

```js
const Component = () => "Hello"
const componentElement = <Component />
const domNodeElement = <div />
```

#### Good to hear

* Elements are immutable, plain objects that describe the DOM nodes or components you want to render.
* Components can be either classes or functions, that take props as an input and return an element tree as the output.

##### Additional links

* [React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* [React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (0) -->
