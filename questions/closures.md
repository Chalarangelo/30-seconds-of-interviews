### What is a closure? Can you give a useful example of one?

#### Answer

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

* Variables declared in its own scope
* Variables declared in the scope of the parent function
* Variables declared in the global scope

In JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.

In addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.

#### Good to hear

* Closures are useful because they let you associate data with a function that operates on that data.
* A closure can substitute an object with only a single method.
* Closures can be used to emulate private properties and methods.

##### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
