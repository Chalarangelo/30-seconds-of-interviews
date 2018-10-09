### What is children prop?

#### Answer

Children is a prop (`this.prop.children`) that allows components to be passed as data to other components. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:

```jsx
var MyDiv = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>
  }
})

ReactDOM.render(
  <MyDiv>
    <span>Hello</span>
    <span>World</span>
  </MyDiv>,
  node
)
```

#### Good to hear

* Children is a prop that allows components to be passed as data to other components.
* The React API provides methods to work with this prop.

##### Additional links

* [React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
