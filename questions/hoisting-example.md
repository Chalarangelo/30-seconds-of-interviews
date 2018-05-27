### What will the console log in this example?

```js
var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()
```

#### Answer

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
