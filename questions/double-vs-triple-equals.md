### What is the difference between the equality operators `==` and `===`?

#### Answer

Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

#### Good to hear

* Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.
* Type coercion means the values are converted into the same type.
* Mention of falsy values and their comparison.

##### Additional links

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
