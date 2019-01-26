### How to apply prop validation in React?

#### Answer

When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`.

For example, we define `propTypes` for component as below:

```js
import PropTypes from "prop-types"

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }

  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h2>Age, {this.props.age}
    )
  }
}
```

#### Good to hear

* We can define custom `propTypes`
* Using `propTypes` is not mandatory. However, it is a good practice and can reduce bugs.

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (2) -->
