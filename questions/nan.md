### What is the only value not equal to itself in JavaScript?

#### Answer

`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.

#### Good to hear

* The difference between `isNaN()` and `Number.isNaN()`
* `const isNaN = x => x !== x`

##### Additional links

* [MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
