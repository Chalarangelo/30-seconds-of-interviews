### What is an IIFE and why might you use it?

#### Answer

Immediately Invoked Function Expression better known as IFFE is a JavaScript function that runs as soon as it is defined. This pattern is often used when trying to avoid polluting the global namespace because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

By wrapping a function in parenthesis, we tell the parser to parse our JavaScript as a function expression, and not a function declaration.

```js
(function() {
    alert("I am an IIFE");
})();
```

#### Good to hear

* IIFEs reduce scope lookups (ability to pass commonly used global objects)
* It is used by most popular libraries such as jQuery, Backbone.js and Modernizr

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE#Learn_more)
* [Mastering Immediately-invoked Function Expressions](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->