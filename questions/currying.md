### How do you get both statements to evaluate to the same thing?

```
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

#### Answer

This is an example of Currying, which is the process of breaking down a function into a series of functions that each take a single argument.

In simplest terms, the second expression can be expressed as follows:

```
function sum (a) {
  return function (b) {
    return a + b;
  }
}

sum(2)(3) // returns 5
```

In this example, the argument `a` of `sum(2)` is accessible by the inner `function (b)`, and therefore can perform the operation `a + b`, and pass the response back.

Another way to visualize this would be:

```
const sum = (a) => (b) => a + b;
```

As you can see, we're passing one function into another to evaluate an expression.

However, this will not handle the first case of `sum(2,3)` unless we handle the potential second argument.

In this case, we should use a slight conditional to handle both cases.

```
function sum (a, b) {
  const curry = (b) => a + b;
  return b ? curry(b) : curry;
}
```

#### Good to hear

- Currying can be integrated with callbacks to create higher-order ‘factory’ functions.
- React Redux's `connect()` function is an example of a curried function, as it can take a second optional function as a parameter, although this is not the default.

```
connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(component);
```

##### Additional Links

- [Currying in JS](https://hackernoon.com/currying-in-js-d9ddc64f162e)
- [Currying in JavaScript 6](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
- [Gettin' Freaky Functional w/Curried JavaScript](https://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/)
- [Curry Away in React](https://hackernoon.com/curry-away-in-react-7c4ed110c65a)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
