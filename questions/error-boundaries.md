### What are error boundaries in React?

#### Answer

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

Class components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // Use componentDidCatch to log the error
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info)
  }
  
  // use getDerivedStateFromError to update state
  static getDerivedStateFromError(error) {
    // Display fallback UI
     return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
```

#### Good to hear

* Error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself.

##### Additional links
https://reactjs.org/docs/error-boundaries.html

<!-- tags: (react) -->

<!-- expertise: (2) -->