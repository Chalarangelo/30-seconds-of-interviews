<h1 align="center">
  <br>
  <a href="https://30secondsofinterviews.org"><img src="logo.svg" alt="30 seconds of interviews logo" width="600"></a>
  <br>
  30 seconds of interviews
  <br>
  <br>
</h1>

<h4 align="center">A curated collection of common interview questions to help you prepare for your next interview.</h4>

<br>

<p align="center">
  <a href="https://gitter.im/30-seconds-of-interviews/Lobby"><img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg" alt="gitter"></a>
    <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://travis-ci.com/fejes713/30-seconds-of-interviews"><img src="https://img.shields.io/travis/fejes713/30secondsofinterviews.svg" alt="travis"></a>
  <a href=""><img src="https://img.shields.io/badge/producthunt-vote-orange.svg" alt="producthunt"></a>
  <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="licence"></a>
</p>

<br>

This repository contains short answers to most common questions asked in a full-stack interview. Each explanation is written with the motto _you can understand it in 30 seconds_.

Do you have an excellent idea or know some cool questions that aren't on the list? Read the [contribution guidelines](https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md) and submit a pull request.

## Table of Contents


### Javascript 

<details>
<summary>View contents</summary>

* [ How do you clone an object in JavaScript?](#how-do-you-clone-an-object-in-javascript) 
* [ What is a closure?](#what-is-a-closure) 
* [ How do you compare two objects in JavaScript?](#how-do-you-compare-two-objects-in-javascript) 
* [ What is event-driven programming?](#what-is-event-driven-programming) 
* [ Generate an array, containing the Fibonacci sequence, up until the nth term.](#generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term) 
* [ What does `0.1 + 0.2 === 0.3` evaluate to?](#what-does-0-1-0-2-0-3-evaluate-to) 
* [ What is the difference between the array methods `map()` and `forEach()`?](#what-is-the-difference-between-the-array-methods-map-and-foreach) 
* [ What is functional programming?](#what-is-functional-programming) 
* [ What will the console log in this example?](#what-will-the-console-log-in-this-example) 
* [ How does hoisting work in JavaScript?](#how-does-hoisting-work-in-javascript) 
* [ What are the differences between `null` and `undefined`?](#what-are-the-differences-between-null-and-undefined) 
* [ Does JavaScript pass by value or by reference?](#does-javascript-pass-by-value-or-by-reference) 
* [ How does prototypal inheritance differ from classical inheritance?](#how-does-prototypal-inheritance-differ-from-classical-inheritance) 
* [ What is the output of the following code?](#what-is-the-output-of-the-following-code) 
* [ What does the following function return?](#what-does-the-following-function-return) 
* [ What is the difference between `==` and `===`?](#what-is-the-difference-between-and) 
* [ What does the following code evaluate to?](#what-does-the-following-code-evaluate-to) 
* [ What are JavaScript data types?](#what-are-javascript-data-types) 
* [ What does `'use strict'` do and what are some of the key benefits to using it?](#what-does-use-strict-do-and-what-are-some-of-the-key-benefits-to-using-it) 
* [ What is the reason for wrapping the entire contents of a JavaScript source file in a function?](#what-is-the-reason-for-wrapping-the-entire-contents-of-a-javascript-source-file-in-a-function) 
</details>

### Css 

<details>
<summary>View contents</summary>

* [ What is CSS BEM?](#what-is-css-bem) 
* [ What are the advantages of using CSS preprocessors?](#what-are-the-advantages-of-using-css-preprocessors) 
* [ Can you describe how CSS specificity works?](#can-you-describe-how-css-specificity-works) 
* [ Use flexbox to create a 3-column layout where each of the columns has a width of 2/12, 7/12 and 3/12 of the screen width respectively. Use the following HTML code as a guide.](#use-flexbox-to-create-a-3-column-layout-where-each-of-the-columns-has-a-width-of-2-12-7-12-and-3-12-of-the-screen-width-respectively-use-the-following-html-code-as-a-guide) 
* [ Can you name the four types of `@media` properties?](#can-you-name-the-four-types-of-media-properties) 
* [ What are the advantages of using CSS sprites and how would one utilize them?](#what-are-the-advantages-of-using-css-sprites-and-how-would-one-utilize-them) 
* [ How does Z index function?](#how-does-z-index-function) 
</details>

### Html 

<details>
<summary>View contents</summary>

* [ What are some differences that XHTML has compared to HTML?](#what-are-some-differences-that-xhtml-has-compared-to-html) 
* [ What is the purpose of `alt` attribute on images?](#what-is-the-purpose-of-alt-attribute-on-images) 
* [ Where and why is the `rel="noopener"` attribute used?](#where-and-why-is-the-rel-noopener-attribute-used) 
</details>

### Node 

<details>
<summary>View contents</summary>

* [ What is the event loop in Node.js?](#what-is-the-event-loop-in-node-js) 
</details>

---

## Javascript

### How do you clone an object in JavaScript?

#### Answer

<details>
<summary>View answer</summary>

Using the object spread operator `...`, the object's own enumerable properties can be copied
into the new object. This creates a shallow clone of the object.

```js
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }
```

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

Other alternatives include:

* `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
* `Object.assign({}, obj)` is another alternative.
* `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.

#### Good to hear

* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is a closure?

#### Answer

<details>
<summary>View answer</summary>

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

* Variables declared in its own scope
* Variables declared in the scope of the parent function
* Variables declared in the global scope

#### Good to hear

* Closures are useful because they let you associate data with a function that operates on that data.
* A closure can substitute an object with only a single method.
* Closures can be used to emulate private methods.

##### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

<!-- tags: (javascript) -->

<!-- expertise: (senior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### How do you compare two objects in JavaScript?

#### Answer

<details>
<summary>View answer</summary>

Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.

In order to test if two objects are equal in structure, a helper function is required. It will
iterate through the own properties of each object to test if they have the same values, including nested objects.
Optionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.

Note: this technique does not attempt to test equivalence of data structures other than
plain objects, arrays, functions, dates and primitive values.

```js
function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString()
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime()
  }

  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true

  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
  )
}
```

#### Good to hear

* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference (location in memory)

##### Additional links

* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is event-driven programming?

#### Answer

<details>
<summary>View answer</summary>

Event-driven programming is building an application that is based on and responds to events. Whenever an event occurs, the application responds by running a callback function, which is registered to that event and context.

#### Good to hear

* Responds to events that occur by running a callback function
* Follows a publish-subscribe pattern

##### Additional links

* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

<!-- tags: (javascript) -->

<!-- expertise: (senior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Generate an array, containing the Fibonacci sequence, up until the nth term.

#### Answer

<details>
<summary>View answer</summary>

Create an empty array of the specific length. Use Array.reduce() to add values into the array, using the sum of the last two values, except for the first two.

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
```

#### Good to hear

##### Additional links

* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What does `0.1 + 0.2 === 0.3` evaluate to?

#### Answer

<details>
<summary>View answer</summary>

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2 // 0.300000004
```

#### Good to hear

* A simple solution to this problem

##### Additional links

* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is the difference between the array methods `map()` and `forEach()`?

#### Answer

<details>
<summary>View answer</summary>

Both methods iterate through the elements of an array. `map()` maps each element to new element by invoking the callback function on each element and returns a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.

#### Good to hear

* Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
* `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.

##### Additional links

* [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is functional programming?

#### Answer

<details>
<summary>View answer</summary>

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and mental overhead.

#### Good to hear

* Cleaner, more concise development experience
* Simple function composition
* Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
* JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)

##### Additional links

* [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)

* [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

<!-- tags: (javascript) -->

<!-- expertise: (senior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

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

<details>
<summary>View answer</summary>

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `log` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.

#### Good to hear

* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### How does hoisting work in JavaScript?

#### Answer

<details>
<summary>View answer</summary>

Hoisting is a JavaScript mechanism where variables and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

```js
console.log(hoist) // Output: undefined
var hoist = "The variable has been hoisted."
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

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What are the differences between `null` and `undefined`?

#### Answer

<details>
<summary>View answer</summary>

In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.

#### Good to hear

* `typeof undefined` returns `undefined`
* `typeof null` returns `object`. However, it is still a primitive value
* `undefined == null` equals to `true`

##### Additional links

* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Does JavaScript pass by value or by reference?

#### Answer

<details>
<summary>View answer</summary>

JavaScript always passes by value. However, with objects, the value is a reference to the object.

#### Good to hear

* Difference between pass-by-value and pass-by-reference

##### Additional links

* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### How does prototypal inheritance differ from classical inheritance?

#### Answer

<details>
<summary>View answer</summary>

In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.

In the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`. Finally, object instances can be composed from many different objects, allowing for selective inheritance.

#### Good to hear

* Classes create hierarches and taxonomies.
* Prototypal inheritance allows for a flat prototype delegation hierarchy.

##### Additional links

* [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Differences between class and prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is the output of the following code?

```js
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"

console.log(a == c)
console.log(a == b)
```

#### Answer

<details>
<summary>View answer</summary>

The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.

#### Good to hear

* JavaScript performs automatic type conversion
* Objects are compared by reference
* Primitives are compared by value

##### Additional links

* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What does the following function return?

```js
function greet() {
  return
  {
    message: "hello"
  }
}
```

#### Answer

<details>
<summary>View answer</summary>

Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.

#### Good to hear

* Automatic semicolon placement can lead to time-consuming bugs

##### Additional links

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is the difference between `==` and `===`?

#### Answer

<details>
<summary>View answer</summary>

When using triple equals in JavaScript we are testing for strict equality. This means both the type and the value we are comparing have to be the same. On the other hand, double equals first performs type coercion and then checks for loose equality.

#### Good to hear

* Whenever possible, use triple equals to test equality
* Type coercion - converts values into a common type
* Mention of falsy values and their comparison
* `NaN` is not equivalent to anything, not even itself

##### Additional links

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

<!-- tags: (javascript) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What does the following code evaluate to?

```js
typeof typeof 0
```

#### Answer

<details>
<summary>View answer</summary>

It evaluates to `"string"`.

`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.

#### Good to hear

##### Additional links

* [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What are JavaScript data types?

#### Answer

<details>
<summary>View answer</summary>

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.

#### Good to hear

* Mention of newly added `Symbol` data type
* `Array`, `Date` and `function` are all of type `object`
* Functions in JavaScript are objects with the capability of being callable

##### Additional links

* [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What does `'use strict'` do and what are some of the key benefits to using it?

#### Answer

<details>
<summary>View answer</summary>

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enfores more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

* Easier debugging due to eliminating silent errors.
* Disallows variable redefinition.
* Prevents accidental global variables.
* Oftentimes provides increased performance over identical code that is not running in strict mode.
* Simplifies `eval()` and `arguments`.
* Helps make JavaScript more secure.

#### Good to hear

* Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
* Throws an error on invalid usage of `delete`.
* Prohibits some syntax likely to be defined in future versions of ECMAScript

##### Additional links

* [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

<!-- tags: (javascript) -->

<!-- expertise: (senior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is the reason for wrapping the entire contents of a JavaScript source file in a function?

#### Answer

<details>
<summary>View answer</summary>

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is usually immediately invoked so that the namespace (library name) is assigned the return value of the function.

```js
const myLibrary = function () {
  var privateVariable = 2;
  return {
    publicMethod: () => privateVariable;
  };
}();
privateVariable; // ReferenceError
myLibrary.publicMethod(); // 2
```

#### Good to hear

* Used among many popular JavaScript libraries
* Creates a private namespace

##### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<!-- tags: (javascript) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)


---

## Css

### What is CSS BEM?

#### Answer

<details>
<summary>View answer</summary>

The BEM methodology is another naming convention for CSS classes. The BEM stands for Block, Element, Modifier which is an explanation for its structure. Block is a standalone component that is reusable across projects. Elements and modifiers are part of the block with no standalone meaning. Here is the example of the typical syntax:

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

#### Good to hear

* Block is a top-level abstraction of a new component
* Elements make no sense to be alone - they are tightly dependent on blocks
* Modifier is a flag added to block or element so it makes them a bit more specific

##### Additional links

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

<!-- tags: (css) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What are the advantages of using CSS preprocessors?

#### Answer

<details>
<summary>View answer</summary>

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), variables, mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.

#### Good to hear

* They allow us to write more maintainable and scalable CSS
* Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)

##### Additional links

* [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)

<!-- tags: (css) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Can you describe how CSS specificity works?

#### Answer

<details>
<summary>View answer</summary>

Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:

* Inline rules (binary - 1 or 0)
* Number of id selectors
* Number of class, pseudo-class and attribute selectors
* Number of tags and pseudo-element selectors

When two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.

#### Good to hear

* Specificity matrix: [inline, id, class/pseudo-class/attribute, tag/pseudo-element]
* In cases of equal specificity, last rule is applied

##### Additional links

* [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

<!-- tags: (css) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Use flexbox to create a 3-column layout where each of the columns has a width of 2/12, 7/12 and 3/12 of the screen width respectively. Use the following HTML code as a guide.

```html
<div class="flex-grid">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

#### Answer

<details>
<summary>View answer</summary>

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

#### Good to hear

##### Additional links

* [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<!-- tags: (css) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Can you name the four types of `@media` properties?

#### Answer

<details>
<summary>View answer</summary>

* `all`, which applies to all media type devices
* `print`, which only applies to printers
* `screen`, which only applies to screens (desktops, tablets, mobile etc.)
* `speech`, which only applies to screenreaders

#### Good to hear

##### Additional links

* [MDN docs for `@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
* [MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

<!-- tags: (css) -->

<!-- expertise: (basic) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What are the advantages of using CSS sprites and how would one utilize them?

#### Answer

<details>
<summary>View answer</summary>

CSS sprites combine multiple images into one image, limiting the amount of HTTP requests a browser has to make, thus improving load times.

To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of a CSS selector or an element.

#### Good to hear

* CSS sprites combine multiple images into one, which improves page load times by limiting requests
* `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet

##### Additional links

* [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)

<!-- tags: (css) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### How does Z index function?

#### Answer

<details>
<summary>View answer</summary>

When elements overlap, z-order determines which one covers the other.

#### Good to hear

* `z-index` only applies to positioned elements (except `static`)
* How to organize z-indexes on large scale projects

##### Additional links

* [MDN docs for z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
* [Understanding CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
* [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)

<!-- tags: (css) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)


---

## Html

### What are some differences that XHTML has compared to HTML?

#### Answer

<details>
<summary>View answer</summary>

Some of the key differences are:

* An XHTML element must have an XHTML `<DOCTYPE>`
* Attributes values must be enclosed in quotes
* Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)
* Elements must always be properly nested
* Elements must always be closed
* Special characters must be escaped

#### Good to hear

* Any element can be self-closed
* Tags ands attributes are case-sensitive, usually lowercase

##### Additional links

* [W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)

<!-- tags: (html) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### What is the purpose of `alt` attribute on images?

#### Answer

<details>
<summary>View answer</summary>

The `alt` attribute provides alternative information for an image if a user cannot view it. If the image is for decorative purposes only, the `alt` attribute should be empty. On the other hand, if image contains information the `alt` attribute should describe image.

#### Good to hear

* Decorative images should have empty `alt` tag

##### Additional links

* [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

<!-- tags: (html) -->

<!-- expertise: (junior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)

### Where and why is the `rel="noopener"` attribute used?

#### Answer

<details>
<summary>View answer</summary>

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.

#### Good to hear

* `rel="noopener"` is applied to hyperlinks.
* `rel="noopener"` prevents opened links from manipulating the source page.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)
* [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)

<!-- tags: (html) -->

<!-- expertise: (intermediate) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)


---

## Node

### What is the event loop in Node.js?

#### Answer

<details>
<summary>View answer</summary>

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

#### Good to hear

* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

<!-- tags: (node,javascript) -->

<!-- expertise: (senior) -->
</details> 

<br>[⬆ Back to top](#table-of-contents)


---


