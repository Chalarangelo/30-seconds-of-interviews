### What is memoization?

#### Answer

Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.

A basic implementation in JavaScript looks like this:

```js
const memoize = fn => {
  const cache = new Map()
  return value => {
    const cachedResult = cache.get(value)
    if (cachedResult !== undefined) return cachedResult
    const result = fn(value)
    cache.set(value, result)
    return result
  }
}
```

#### Good to hear

* The above technique returns a unary function even if the function can take multiple arguments.
* The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.
* Memoization increases performance on subsequent function calls but still needs to do work on the first call.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
