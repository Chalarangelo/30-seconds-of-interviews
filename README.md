![30 seconds of interviews](/logo-512x512.png)

# 30 seconds of interviews

## The curated collection of common interview questions to help you prepare for your next interview.

### What is CSS BEM?

#### Answer

The BEM methodology is another naming convention for CSS classes. The BEM stands for Block, Element, Modifier which is an explanation for its structure. Block is a standalone component that is reusable across projects. Elements and modifiers are part of the block with no standalone meaning. Here is the example of the typical syntax:

```css
/* block component */
.block {}

/* element */
.block__element {}

/* modifier */
.block__element-modifier {}
```

#### Additional links

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

#### Good to hear

* Block is a top-level abstraction of a new component
* Elements make no sense to be alone - they are tightly dependent on blocks
* Modifier is a flag added to block or element so it makes them a bit more specific

<!-- tags: (css) -->
### How do you clone an object in JavaScript?

#### Answer

Using `Object.assign()`, one can create a shallow clone of an object, like this:

```js
var obj = {a: 1, b: 2};
var objClone = Object.assign(obj);
```

It is important to remember that nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original.

#### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

#### Good to hear

* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.
* `JSON.stringify()` is another alternative, but is CPU-intensive.

<!-- tags: (javascript) -->
### What is a closure in Javascript?

#### Answer

A closure is a function defined insider another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

* Variables declared in its own scope
* Variables declared in the scope of the parent function
* Variables declared in the global scope

#### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

#### Good to hear

* Closures are useful because they let you associate data with a function that operates on that data.
* A closure can substitute an object with only a single method.
* Closures can be used to emulate private methods.

<!-- tags: (javascript) -->
### How would you compare two objects in JavaScript?

#### Answer

Even though two objects have the same properties and all of their properties have the same value they're not considered equal. This is because JavaScript has two different approaches for testing equality. Primitives are compared by their value while objects are compared by their reference(location in memory). To compare two objects we need to do it with a helper function.

```js
function isEqual(obj1, obj2){
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length != obj2Props.length) {
    return false
  }

  for (let prop of obj1Props) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
  }

  return true
}
```

#### Additional links

* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)


#### Good to hear

* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference(location in memory)

<!-- tags: (javascript) -->
### What are the advantages of using CSS preprocessors?

#### Answer

There are many advantages of using CSS preprocessors. Firstly, they allow us to write more maintainable and scalable CSS overall. Secondly, they provide syntax for easy to write nested selectors as well as variables for consistent theming. CSS preprocessors also allow us to write mixins to generate repeated CSS. On top of everything, they let us split code into multiple files (without needing to make HTTP request for each one).


#### Additional links

* [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)

#### Good to hear

* They allow us to write more maintainable and scalable CSS
* Some disadvantages of using CSS preprocessors(setup, re-compilation time can be slow etc.)

<!-- tags: (css) -->
### What is event-driven programming?

#### Answer

Event-driven programming is building an application that is based on and responds to events. Whenever an event occurs, the application responds by running a callback function, which is registered to that event and context. 

#### Additional links

* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

#### Good to hear

* Responds to events that occur by running a callback function
* Follows a publish-subscribe pattern

<!-- tags: (javascript) -->
### Generate an array, containing the Fibonacci sequence, up until the nth term

#### Answer

Create an empty array of the specific length, initializing the first two values (0 and 1). Use Array.reduce() to add values into the array, using the sum of the last two values, except for the first two.

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

#### Additional links

* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)

#### Good to hear

<!-- tags: (javascript) -->
### Use flexbox to create a 3-column layout where each of the columns has a width of 2/12, 7/12 and 3/12 of the screen width respectively. Use the following HTML code as a guide.

```html
<div class="flex-grid">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

#### Answer

We only need to set the `display` property of the `flex-grid` element to `flex` and then apply the appropriate values for each column, using the `flex` property like this:

```css
.flex-grid {
  display: flex;
}

.col-2 {
  flex: 2;
}

.col-7 {
  flex: 7;
}

.col-3 {
  flex: 3;
}
```

#### Additional links

* [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Good to hear

<!-- tags: (css) -->
### What does `0.1 + 0.2 === 0.3` return?

#### Answer

It equals to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2; // 0.300000004
```

#### Additional links

* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

#### Good to hear

* A simple solution to this problem

<!-- tags: (javascript) -->
### What is the difference between a `.map` loop and a `.forEach` loop

#### Answer

Both loops iterate through the elements in an array. `.map()` maps each element to new element by calling the function on each element and it returns the new array. On the other hand, `.forEach()` executes a callback function for each element but does not return anything.

#### Additional links

* [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

#### Good to hear

* If you need to iterate over an array, `.forEach()` is a solid option
* If you need a result but don't want to mutate original array, `.map()` is the right choice

<!-- tags: (javascript) -->
### What is functional programming?

#### Answer

Functional programming is an essential concept in JavaScript. It produces programs by composing mathematical functions and avoids shared state and mutable data. The main difference in functional programming in comparison to other programming paradigms is a declarative approach versus an imperative one.

#### Additional links

* [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)

* [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)



#### Good to hear

* Cleaner, more concise development experience
* Simple function composition
* Features of JavaScript that enable functional programming(`.map`, `.reduce` etc.)
* JavaScript is multi-paradigm programming language

<!-- tags: (javascript) -->
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

#### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode

<!-- tags: (javascript) -->
### How does hoisting work in JavaScript?

#### Answer

Hoisting is a JavaScript mechanism where variables and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

```js
console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';
```

#### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Functions are hoisted before variables
* Mention of `strict` mode
* `const` variables must be both declared and initialised before use
* `let` variables must be declared before use

<!-- tags: (javascript) -->
### What is the purpose of `alt` attribute on images?

#### Answer

The `alt` attribute provides alternative information for an image if a user cannot view it. If the image is for decorative purposes only, the `alt` attribute should be empty. On the other hand, if image contains information the `alt` attribute should describe image.

#### Additional links

* [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

#### Good to hear

* Decorative images should have empty `alt` tag

<!-- tags: (html) -->
### What is the event loop in Node.js?

#### Answer

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

#### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

#### Good to hear

* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

<!-- tags: (node,javascript) -->
### What are the differences between `null` and `undefined`?

#### Answer

In JavaScript, two values discretely represent nothing - `undefined` and `null`. When value of the variable is not defined it is `undefined`. On the other hand, `null` means empty or non-existent value which is used by programmers to indicate “no value”.

#### Additional links

* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

#### Good to hear

* `typeof undefined` returns `undefined`
* `typeof null` returns `object`. However, it is still a primitive value
* `undefined == null` equals to `true`

<!-- tags: (javascript) -->
### Does JavaScript pass parameter by value or by reference?

#### Answer

In JavaScript, primitive values are passed by value while objects are passed by reference.


#### Additional links

* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

#### Good to hear

* Difference between pass-by-value and pass-by-reference

<!-- tags: (javascript) -->
### How does prototypal inheritance differ from classical inheritance?

#### Answer

In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.

In the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`. Finally, object instances can be composed from many different objects, allowing for selective inheritance.

#### Additional links

* [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Differences between class and prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)

#### Good to hear

* Classes create hierarches and taxonomies.
* Prototypal inheritance allows for a flat prototype delegation hierarchy.

<!-- tags: (javascript) -->
### What is the output of the following code?

```js
const a = [1,2,3];
const b = [1,2,3];
const c = "1,2,3";

console.log(a == c);
console.log(a == b);
```

#### Answer

The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are  Objects and Objects are compared by reference.

#### Additional links

* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

#### Good to hear

* JavaScript performs automatic type conversion
* Objects are compared by reference
* Primitives are compared by value

<!-- tags: (javascript) -->
### Where and why is the `rel="noopener"` attribute used?

#### Answer

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is. 

#### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)
* [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)

#### Good to hear

* `rel="noopener"` is applied to hyperlinks.
* `rel="noopener"` prevents opened links from manipulating the source page.

<!-- tags: (html) -->
### What does the following function return?

```js
function greet() {
    return
    {
      message: 'hello'
    }
}
```

#### Answer

Because of JavaScript's automatic semicolon placement compiler places a semicolon after `return` keyword and therefore it returns `undefined` without single error being thrown.

#### Additional links

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

#### Good to hear

* Automatic semicolon placement can lead to time-consuming bugs
* Even though semicolons are optional in JavaScript, you should use them


<!-- tags: (javascript) -->
### What is the difference between `==` and `===`

#### Answer

When using triple equals in JavaScript we are testing for strict equality. This means both the type and the value we are comparing have to be the same. On the other hand, double equals firstly performs type coercion and then checks for the loose equality.

#### Additional links

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

#### Good to hear

* Whenever possible, use triple equals to test equality
* Type coercion - converts values into a common type
* Mention of falsy values and their comparison
* `NaN` is not equivalent to anything, not even itself

<!-- tags: (javascript) -->
### What would the following code return?

```js
console.log(typeof typeof 0);
```

#### Answer

`typeof 0` returns `"number"` and therefore `typeof "number"` would return `string`.

#### Additional links

* [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

#### Good to hear

<!-- tags: (javascript) -->
### What are JavaScript data types?

#### Answer

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.

#### Additional links

* [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)


#### Good to hear

* Mention of newly added `Symbol` data type
* `Array`, `Date` and `function` are all of type `object`
* Functions in JavaScript are objects with the capability of being callable


<!-- tags: (javascript) -->
### What does `'use strict'` do and what are some of the key benefits to using it?

#### Answer

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enfores more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

* Easier debugging due to eliminating silent errors.
* Disallows variable redefinition.
* Prevents accidental global variables.
* Oftentimes provides increased performance over identical code that is not running in strict mode.
* Simplifies `eval()` and `arguments`.
* Helps make JavaScript more secure.

#### Additional links

* [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

#### Good to hear

* Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
* Throws an error on invalid usage of `delete`.
* Prohibits some syntax likely to be defined in future versions of ECMAScript

<!-- tags: (javascript) -->
### What is the reason for wrapping the entire content of a JavaScript source file in a function block?


#### Answer

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries


#### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

#### Good to hear

* Used among many popular JavaScript libraries
* Creates a private namespace

<!-- tags: (javascript) -->
### How does Z index function?

#### Answer

When elements overlap, z-order determines which one covers the other.


#### Additional links

* [MDN docs for z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
* [Understanding CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
* [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)

#### Good to hear

* `z-index` only applies to positioned elements (except `static`)
* How to organize z-indexes on large scale projects


<!-- tags: (css) -->


