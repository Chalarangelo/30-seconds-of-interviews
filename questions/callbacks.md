### What is a callback?

#### Answer

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are callbacks that are only executed when a specific event occurs.

```js
function onClick() {
  console.log("The user clicked on the page.")
}
document.addEventListener("click", onClick)
```

#### Good to hear

* Functions are first-class objects in JavaScript
* Callbacks vs Promises

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
