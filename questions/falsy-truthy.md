### What are truthy and falsy values in JavaScript?

#### Answer

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.

There are 6 falsy values in JavaScript. They are:

* `false`
* `undefined`
* `null`
* `""` (empty string)
* `NaN`
* `0` (both `+0` and `-0`)

Every other value is considered truthy.

A value's truthiness can be examined by passing it into the `Boolean` function.

```js
Boolean("") // false
Boolean([]) // true
```

There is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.

```js
!!"" // false
!![] // true
```

#### Good to hear

##### Additional links

* [Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)
* [Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
