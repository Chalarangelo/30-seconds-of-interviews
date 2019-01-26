### What is the `children` prop?

#### Answer

`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:

```js
function GenericBox({ children }) {
  return <div className="container">{children}</div>
}

function App() {
  return (
    <GenericBox>
      <span>Hello</span> <span>World</span>
    </GenericBox>
  )
}
```

#### Good to hear

* Children is a prop that allows components to be passed as data to other components.
* The React API provides methods to work with this prop.

##### Additional links

* [React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
