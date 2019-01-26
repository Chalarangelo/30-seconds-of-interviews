### What is the purpose of callback function as an argument of `setState`?

#### Answer

The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.

```js
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered")
})
```

#### Good to hear

* The callback function is invoked after `setState` finishes and is used for any post action.
* It is recommended to use lifecycle method rather this callback function.

##### Additional links

* [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
