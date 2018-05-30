### What is the difference between `null` and `undefined`?

#### Answer

In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.

#### Good to hear

* `typeof undefined` evaluates to `"undefined"`.
* `typeof null` evaluates `"object"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.
* `undefined == null` evaluates to `true`.

##### Additional links

* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
