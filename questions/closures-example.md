### What is the output of the following code?

```js
const arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; ++i) {
  setTimeout(() => {
    console.log("arr[" + i + "]: " + arr[i]);
  }, 1000);
}
```

#### Answer
Because closures capture just the variable and not its value, when the functions execute after `1000ms` the value of `i` is `5`. Hence the output would be a series of `arr[5]: undefined`.

To get the desired output it sufficient to use `let i` instead of `var i` (ES6 syntax), `let` creates a new binding at every iteration and solves the problem.

#### Good to hear
Within loops bodies

* `var` creates a single binding for the variables
* `let` creates a new binding for every variables on every iteration
* `const` creates a new binding as `let` does, but the binding is immutable

##### Additional links

* [Variables and scoping](http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
