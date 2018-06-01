### What is memoization?

#### Answer

Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.

A simple implementation in JavaScript looks like this:

```js
const memoize = fn => {
  const cache = Object.create(null)
  return value => (value in cache ? cache[value] : (cache[value] = fn(value)))
}
```

#### Good to hear

- Downsides of the above technique including returning a unary function even if the function can take multiple arguments.
- Memoization increases performance on subsequent function calls but still needs to do work on the first call.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

- [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
