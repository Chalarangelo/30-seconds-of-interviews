### How to pass a parameter to an event handler or callback?

#### Answer

You can use an arrow function to wrap around an event handler and pass parameters, which is equivalent to calling `bind`:

```jsx
<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
``` 

#### Good to hear

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->