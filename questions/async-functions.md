### What is an `async` function?

```js
async function foo() {
  ...
}
```

#### Answer
An `async` function is a function that allows you to pause the function's execution while it waits for (`await`s) a promise to resolve. It's an abstraction on top of the Promise API that makes asynchronous operations _look_ like they're synchronous.

`async` functions automatically return a Promise object. Whatever you `return` from the `async` function will be the promise's *resolution*. If instead you `throw` from the body of an `async` function, that will be how your async function *rejects* the promise it returns.

Most importantly, `async` functions are able to use the `await` keyword in their function body, which **pauses the function** until the operation after the `await` completes, and allows it to return that operation's result to a variable synchronously.

```js
// Normal promises in regular function:
function foo() {
  promiseCall()
    .then(result => {
      // do something with the result
    })
}

// async functions
async function foo() {
  const result = await promiseCall()
  // do something with the result
}
```

#### Good to hear

* `async` functions are just syntactic sugar on top of Promises.
* They make asynchronous operations look like synchronous operations in your function.
* They implicitly return a promise which resolves to whatever your `async` function returns, and reject to whatever your `async` function `throw`s.

##### Additional links

* [MDN Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [MDN Docs - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
