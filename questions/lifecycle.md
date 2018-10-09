### What are the different phases of the component lifecycle in React?

#### Answer

There are four different phases of component’s lifecycle:

**Initialization**: In this phase react component prepares setting up the initial state and default props.

**Mounting**: The react component is ready to mount in the browser DOM. This phase covers `componentWillMount` and `componentDidMount` lifecycle methods.

**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers `shouldComponentUpdate`, `componentWillUpdate` and `componentDidUpdate` lifecycle methods.

**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase include `componentWillUnmount` lifecycle method.

<img alt="lifecycle phases" src="https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/master/images/phases.png" style="width: 100%"/>

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
