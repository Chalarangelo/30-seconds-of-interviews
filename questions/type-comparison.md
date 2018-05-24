### What is the difference between `==` and `===`?

#### Answer

When using triple equals in JavaScript we are testing for strict equality. This means both the type and the value we are comparing have to be the same. On the other hand, double equals first performs type coercion and then checks for loose equality.

#### Good to hear

* Whenever possible, use triple equals to test equality
* Type coercion - converts values into a common type
* Mention of falsy values and their comparison
* `NaN` is not equivalent to anything, not even itself

##### Additional links

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
