### What are the different phases of the component lifecycle in React?

#### Answer

There are four different phases of component’s lifecycle:

**Initialization**: In this phase, the component prepares setting up the initial state and default props.

**Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods.

**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods.

**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method.

**Error Handling**: In this phase, the component is called whenever there's an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.

<img alt="lifecycle phases" src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" style="width: 100%"/>

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
