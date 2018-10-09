### How to apply prop validation in React?

#### Answer

When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data type, it will generate warning messages in the console for development mode whereas it is disabled in production mode due to performance impact. The required prop is defined with `isRequired`.

The set of predefined prop types are the following:

-`PropTypes.string` -`PropTypes.number` -`PropTypes.func` -`PropTypes.node` -`PropTypes.bool`

For example, we define propTypes for component as below:

```jsx
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h2>Age, {this.props.age}
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
```

#### Good to hear

* We can define custom `PropTypes`
* Using `PropTypes` is not mandatory. However, it is a good practice

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (2) -->
