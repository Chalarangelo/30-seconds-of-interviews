### Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.

```js
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
```

#### Answer

Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.

```js
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
```

#### Good to hear

* Function composition is the process of combining two or more functions to produce a new function.

##### Additional links

* [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
