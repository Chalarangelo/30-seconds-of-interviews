### What are fragments?

#### Answer

Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// Short syntax supported by Babel 7
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

#### Good to hear

* Fragments group multiple elements returned from a component, without adding a DOM element around them.

##### Additional links

* [React docs on Fragments](https://reactjs.org/docs/fragments.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
