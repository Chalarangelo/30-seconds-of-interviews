### What will be the output of this code?

```js
var foo = 1;
var foobar = function () {
    console.log(foo);
    var foo = 2;
};
foobar();
```

#### Answer

Firstly `foobar` won't look for the outer scope as `var foo = 2;`'s declaration is hoisted. On the other hand,  JavaScript doesn't hoist initialization, so the output of this code is going to be `undefined`.

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

<!-- tags: (javascript) -->
