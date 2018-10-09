### What are the lifecycle methods in React?

#### Answer

`componentWillMount`: Executed before rendering and is used for application-level configuration in your root component.

`componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.

`componentWillReceiveProps`: Executed when particular prop updates to trigger state transitions.

`shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.

`componentWillUpdate`: Executed before re-rendering the component when there are pros & state changes confirmed by `shouldComponentUpdate` which returns true.

`componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes.

`componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
