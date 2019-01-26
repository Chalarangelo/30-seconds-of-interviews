### What are higher-order components?

#### Answer

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

#### Good to hear

* They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (2) -->
