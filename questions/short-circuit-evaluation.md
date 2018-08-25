### What is short-circuit evaluation in JavaScript?

#### Answer

Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.

```js
true || false
```

In the above sample using logical OR, JavaScript won't look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation.

This also works for logical AND.

```js
false && true
```

This means you can have an expression that throws an error if evaluated, and it won't cause issues.

```js
true || nonexistentFunction()
false && nonexistentFunction()
```

This remains true for multiple operations because of left-to-right evaluation.

```js
true || nonexistentFunction() || window.nothing.wouldThrowError
true || window.nothing.wouldThrowError
true
```

A common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.

```js
const options = {}
const setting = options.setting || "default"
setting // "default"
```

Another common use case is only evaluating an expression if the first operand is truthy.

```js
// Instead of:
addEventListener("click", e => {
  if (e.target.closest("button")) {
    handleButtonClick(e)
  }
})

// You can take advantage of short-circuit evaluation:
addEventListener(
  "click",
  e => e.target.closest("button") && handleButtonClick(e)
)
```

In the above case, if `e.target` is not or does not contain an element matching the `"button"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.

#### Good to hear

* Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean.

##### Additional links

* [JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
