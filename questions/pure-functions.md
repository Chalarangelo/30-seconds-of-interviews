### What is a pure function?

#### Answer

A pure function is function that satisfies these two conditions:

* Given the same input, the function returns the same output.
* The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).

Pure functions can mutate local data within the function as long as it satisfies the two conditions above.

##### Pure

```js
const a = (x, y) => x + y
const b = (arr, value) => arr.concat(value)
const c = arr => [...arr].sort((a, b) => a - b)
```

##### Impure

```js
const a = (x, y) => x + y + Math.random()
const b = (arr, value) => (arr.push(value), arr)
const c = arr => arr.sort((a, b) => a - b)
```

#### Good to hear

* Pure functions are easier to reason about due to their reliability.
* All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).
* If a function does not return a value, it is an indication that it is causing side effects.

##### Additional links

* [MDN docs for `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for `undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
