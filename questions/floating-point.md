### What does `0.1 + 0.2 === 0.3` evaluate to?

#### Answer

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2 // 0.30000000000000004
```

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

```js
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```

#### Good to hear

* A simple solution to this problem

##### Additional links

* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
