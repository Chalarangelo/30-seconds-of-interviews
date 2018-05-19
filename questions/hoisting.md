### How does hoisting work in JavaScript?

#### Answer

Hoisting is a JavaScript mechanism where variables and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

```js
console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';
```

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Functions are hoisted before variables
* Mention of `strict` mode
* `const` variables must be both declared and initialised before use
* `let` variables must be declared before use

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

<!-- tags: (javascript) -->
