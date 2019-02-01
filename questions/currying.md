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

Where the result of sum(2) is then passed into sum(3) and evaluated.

However, this will not handle the first case of `sum(2,3)` unless we handle the potential second argument.

In this case, we should use a slight conditional to handle both cases.

```
function sum (a, b) {
  if (!b) {
    return function (c) {
      return a + c;
    }
  }
  return a + b;
}
```

#### Good to hear

- Mentioning React Redux Connect
- Currying can be integrated with callbacks to create higher-order ‘factory’ functions.

##### Additional Links

- [Currying in JS](https://hackernoon.com/currying-in-js-d9ddc64f162e)
- [Currying in JavaScript 6](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
- [Gettin' Freaky Functional w/Curried JavaScript](https://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
