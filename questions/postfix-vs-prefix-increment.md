### What is the difference between the postfix `i++` and prefix `++i` increment operators?

#### Answer

Both increment the variable value by 1. The difference is what they evaluate to.

The postfix increment operator evaluates to the value _before_ it was incremented.

```js
let i = 0
i++ // 0
// i === 1
```

The prefix increment operator evaluates to the value _after_ it was incremented.

```js
let i = 0
++i // 1
// i === 1
```

#### Good to hear

##### Additional links

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
