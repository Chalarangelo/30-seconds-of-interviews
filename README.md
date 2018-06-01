<a href="https://30secondsofinterviews.org"><img src="logo.jpg" alt="30 Seconds of Interviews logo"></a>

<h1 align="center">
  30 Seconds of Interviews
</h1>

<h4 align="center">A curated collection of common interview questions to help you prepare for your next interview.</h4>

<br>

<p align="center">
  <a href="https://gitter.im/30-seconds-of-interviews/Lobby"><img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg" alt="gitter"></a>
    <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://travis-ci.com/fejes713/30-seconds-of-interviews"><img src="https://travis-ci.com/fejes713/30-seconds-of-interviews.svg?token=uZrzJhwCxqfwx7TdXzc4&branch=master" alt="travis"></a>
  <a href="https://www.patreon.com/fejes713"><img src="https://img.shields.io/badge/Patreon-support%20us-orange.svg" alt="patreon"></a>
  <a href="https://www.producthunt.com/posts/30-seconds-of-interviews"><img src="https://img.shields.io/badge/Product%20Hunt-vote-orange.svg" alt="producthunt"></a>
  <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="licence"></a>
</p>

<br>

## Foreword

Interviews are daunting and can make even the most seasoned expert forget things under pressure. Review and learn what questions are commonly encountered in interviews curated by the community that's answered them and go prepared for anything they'll ask. By bringing together experience and real-world examples, you can go from being nervous to being prepared for that next big opportunity.

## [View online](https://30secondsofinterviews.org/)

<a href="https://30secondsofinterviews.org"><img src="promo.jpg" alt="30 Seconds of Interviews promo"></a>

<br>

## Sponsors

All financial support on [Patreon](https://www.patreon.com/fejes713) will be equally split between core colaborators on projects in the way of purchasing educational materials and courses.

## Contributing

> 30 seconds of interviews is a community effort, so feel free to contribute in any way you can. Every contribution helps!

Do you have an excellent idea or know some cool questions that aren't on the list? Read the [contribution guidelines](https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md) and submit a pull request.

Join our [Gitter channel](https://gitter.im/30-seconds-of-interviews/Lobby) to help with the development of the project.

## Table of Contents


### JavaScript

<details>
<summary>View contents</summary>

* [What is Big O Notation?](#what-is-big-o-notation)
* [How can you avoid callback hells?](#how-can-you-avoid-callback-hells)
* [What is a callback?](#what-is-a-callback)
* [How do you clone an object in JavaScript?](#how-do-you-clone-an-object-in-javascript)
* [What is a closure? Can you give a useful example of one?](#what-is-a-closure-can-you-give-a-useful-example-of-one)
* [How do you compare two objects in JavaScript?](#how-do-you-compare-two-objects-in-javascript)
* [What is the DOM?](#what-is-the-dom)
* [What is the difference between the equality operators `==` and `===`?](#what-is-the-difference-between-the-equality-operators--and-)
* [What is event delegation and why is it useful? Can you show an example of how to use it?](#what-is-event-delegation-and-why-is-it-useful-can-you-show-an-example-of-how-to-use-it)
* [What is event-driven programming?](#what-is-event-driven-programming)
* [Generate an array, containing the Fibonacci sequence, up until the nth term.](#generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term)
* [What does `0.1 + 0.2 === 0.3` evaluate to?](#what-does-01--02--03-evaluate-to)
* [What is the difference between the array methods `map()` and `forEach()`?](#what-is-the-difference-between-the-array-methods-map-and-foreach)
* [What is functional programming?](#what-is-functional-programming)
* [What will the console log in this example?](#what-will-the-console-log-in-this-example)
* [How does hoisting work in JavaScript?](#how-does-hoisting-work-in-javascript)
* [What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?](#what-is-the-reason-for-wrapping-the-entire-contents-of-a-javascript-source-file-in-a-function-that-is-immediately-invoked)
* [Create a function that masks a string of characters with `#` except for the last four (4) characters.](#create-a-function-that-masks-a-string-of-characters-with--except-for-the-last-four-4-characters)
* [What is memoization?](#what-is-memoization)
* [Explain the difference between mutability and immutability, and mutating vs non-mutating methods.](#explain-the-difference-between-mutability-and-immutability-and-mutating-vs-non-mutating-methods)
* [What is the only value not equal to itself in JavaScript?](#what-is-the-only-value-not-equal-to-itself-in-javascript)
* [NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?](#nodejs-uses-a-callback-pattern-in-many-instances-where-if-an-error-were-returned-it-will-pass-it-as-the-first-argument-to-the-callback-what-are-the-advantages-of-this-pattern)
* [What is the event loop in Node.js?](#what-is-the-event-loop-in-nodejs)
* [What is the difference between `null` and `undefined`?](#what-is-the-difference-between-null-and-undefined)
* [Describe the different ways to create an object. When should certain ways be preferred over others?](#describe-the-different-ways-to-create-an-object-when-should-certain-ways-be-preferred-over-others)
* [What is the difference between a parameter and an argument?](#what-is-the-difference-between-a-parameter-and-an-argument)
* [Does JavaScript pass by value or by reference?](#does-javascript-pass-by-value-or-by-reference)
* [Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.](#create-a-function-pipe-that-performs-left-to-right-function-composition-by-returning-a-function-that-accepts-one-argument)
* [In which states can a Promise be?](#in-which-states-can-a-promise-be)
* [What are Promises?](#what-are-promises)
* [How does prototypal inheritance differ from classical inheritance?](#how-does-prototypal-inheritance-differ-from-classical-inheritance)
* [What is a pure function?](#what-is-a-pure-function)
* [What is recursion and when is it useful?](#what-is-recursion-and-when-is-it-useful)
* [What is the output of the following code?](#what-is-the-output-of-the-following-code)
* [What does the following function return?](#what-does-the-following-function-return)
* [Explain the difference between a static method and an instance method.](#explain-the-difference-between-a-static-method-and-an-instance-method)
* [What is the difference between synchronous and asynchronous code in JavaScript?](#what-is-the-difference-between-synchronous-and-asynchronous-code-in-javascript)
* [What is the `this` keyword and how does it work?](#what-is-the-this-keyword-and-how-does-it-work)
* [What does the following code evaluate to?](#what-does-the-following-code-evaluate-to)
* [What are JavaScript data types?](#what-are-javascript-data-types)
* [What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?](#what-is-the-purpose-of-javascript-ui-librariesframeworks-like-react-vue-angular-hyperapp-etc)
* [What does `'use strict'` do and what are some of the key benefits to using it?](#what-does-use-strict-do-and-what-are-some-of-the-key-benefits-to-using-it)
* [What are the differences between `var`, `let`, `const` and no keyword statements?](#what-are-the-differences-between-var-let-const-and-no-keyword-statements)
* [What is a virtual DOM and why is it used in libraries/frameworks?](#what-is-a-virtual-dom-and-why-is-it-used-in-librariesframeworks)
* [What is a cross-site scripting attack (XSS) and how do you prevent it?](#what-is-a-cross-site-scripting-attack-xss-and-how-do-you-prevent-it)
</details>


### HTML

<details>
<summary>View contents</summary>

* [What are `defer` and `async` attributes on a `<script>` tag?](#what-are-defer-and-async-attributes-on-a-script-tag)
* [What is the purpose of cache busting and how can you achieve it?](#what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it)
* [What is the DOM?](#what-is-the-dom)
* [Can a web page contain multiple `<header>` elements? What about `<footer>` elements?](#can-a-web-page-contain-multiple-header-elements-what-about-footer-elements)
* [Discuss the differences between an HTML specification and a browser’s implementation thereof.](#discuss-the-differences-between-an-html-specification-and-a-browsers-implementation-thereof)
* [What are some differences that XHTML has compared to HTML?](#what-are-some-differences-that-xhtml-has-compared-to-html)
* [Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`](#briefly-describe-the-correct-usage-of-the-following-html5-semantic-elements-header-articlesection-footer)
* [What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.](#what-is-html5-web-storage-explain-localstorage-and-sessionstorage)
* [What is the purpose of `alt` attribute on images?](#what-is-the-purpose-of-alt-attribute-on-images)
* [Where and why is the `rel="noopener"` attribute used?](#where-and-why-is-the-relnoopener-attribute-used)
</details>


### CSS

<details>
<summary>View contents</summary>

* [What is CSS BEM?](#what-is-css-bem)
* [What are the advantages of using CSS preprocessors?](#what-are-the-advantages-of-using-css-preprocessors)
* [Can you describe how CSS specificity works?](#can-you-describe-how-css-specificity-works)
* [Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.](#using-flexbox-create-a-3-column-layout-where-each-column-takes-up-a-col-n--12-ratio-of-the-container)
* [What is a focus ring? What is the correct solution to handle them?](#what-is-a-focus-ring-what-is-the-correct-solution-to-handle-them)
* [Can you name the four types of `@media` properties?](#can-you-name-the-four-types-of-media-properties)
* [What are the advantages of using CSS sprites and how are they utilized?](#what-are-the-advantages-of-using-css-sprites-and-how-are-they-utilized)
</details>


### Node

<details>
<summary>View contents</summary>

* [How can you avoid callback hells?](#how-can-you-avoid-callback-hells)
* [NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?](#nodejs-uses-a-callback-pattern-in-many-instances-where-if-an-error-were-returned-it-will-pass-it-as-the-first-argument-to-the-callback-what-are-the-advantages-of-this-pattern)
* [What is the event loop in Node.js?](#what-is-the-event-loop-in-nodejs)
* [What is REST?](#what-is-rest)
</details>


### Security

<details>
<summary>View contents</summary>

* [What is a cross-site scripting attack (XSS) and how do you prevent it?](#what-is-a-cross-site-scripting-attack-xss-and-how-do-you-prevent-it)
</details>


---

## JavaScript
### What is the difference between the equality operators `==` and `===`?

<details>
<summary>View answer</summary>

Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.


#### Good to hear


* Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.
* Type coercion means the values are converted into the same type.
* Mention of falsy values and their comparison.


##### Additional links


* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
</details>



<br>[⬆ Back to top](#table-of-contents)


### In which states can a Promise be?

<details>
<summary>View answer</summary>

A `Promise` is in one of these states:

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).
When either of these options happens, the associated handlers queued up by a promise's then method are called.


#### Good to hear





##### Additional links


* [Official Web Docs Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
</details>



<br>[⬆ Back to top](#table-of-contents)


### NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?

```js
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

<details>
<summary>View answer</summary>

Advantages include:

* Not needing to process data if there is no need to even reference it
* Having a consistent API leads to more adoption
* Ability to easily adapt a callback pattern that will lead to more maintainable code

As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred.

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

```js
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}

var callback = function(error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}

isTrue(false, callback)
isTrue(true, callback)

/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
```


#### Good to hear


* This is just a convention. However, you should stick to it.


##### Additional links


* [The Node.js Way Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How do you compare two objects in JavaScript?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the DOM?

<details>
<summary>View answer</summary>

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.


#### Good to hear


* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
* `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
* Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.


##### Additional links


* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a cross-site scripting attack (XSS) and how do you prevent it?

<details>
<summary>View answer</summary>

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.

For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.
* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.


#### Good to hear


* On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
* On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.


##### Additional links


* [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is event delegation and why is it useful? Can you show an example of how to use it?

<details>
<summary>View answer</summary>

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.

DOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.

This provides two main benefits:

* It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
* If elements are dynamically added to the parent, there is no need to register new event listeners for them.

Instead of:

```js
document.querySelectorAll("span").forEach(span => {
  span.addEventListener("click", handleSpanClick)
})
```

Event delegation involves using a condition to ensure the child target matches our desired element:

```js
document.addEventListener("click", e => {
  if (e.target.matches("span")) {
    handleSpanClick()
  }
})
```


#### Good to hear


* The difference between event bubbling and capturing


##### Additional links


* [Event Delegation](https://davidwalsh.name/event-delegate)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Generate an array, containing the Fibonacci sequence, up until the nth term.

<details>
<summary>View answer</summary>

Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

```js
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
```


#### Good to hear





##### Additional links


* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What does `0.1 + 0.2 === 0.3` evaluate to?

<details>
<summary>View answer</summary>

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2 // 0.30000000000000004
```

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

```js
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```


#### Good to hear


* A simple solution to this problem


##### Additional links


* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between the array methods `map()` and `forEach()`?

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

<details>
<summary>View answer</summary>

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.


#### Good to hear


* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode


##### Additional links


* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does hoisting work in JavaScript?

<details>
<summary>View answer</summary>

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

However, the value is not hoisted with the declaration.

The following snippet:

```js
console.log(hoist)
var hoist = "value"
```

is equivalent to:

```js
var hoist
console.log(hoist)
hoist = "value"
```

Therefore logging `hoist` outputs `undefined` to the console, not `"value"`.

Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

```js
myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}
```

But be wary of function expressions that are assigned to a variable:

```js
myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}
```


#### Good to hear


* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Functions declarations are hoisted before variable declarations


##### Additional links


* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?

<details>
<summary>View answer</summary>

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.

```js
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
```


#### Good to hear


* Used among many popular JavaScript libraries
* Creates a private namespace


##### Additional links


* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Create a function that masks a string of characters with `#` except for the last four (4) characters.

```js
mask("123456789") // "#####6789"
```

<details>
<summary>View answer</summary>

> There are many ways to solve this problem, this is just one one of them.

Using `String.prototype.slice()`, we can grab a portion of the string from index `0` (first character) to index `-4` (5th last character) and calculate the resulting length, using `String.prototype.repeat()` to repeat the mask character that many times. Then, using `String.prototype.slice()` once more, we can concatenate the last 4 characters by passing `-4` as an argument.

```js
const mask = (str, maskChar = "#") =>
  maskChar.repeat(str.slice(0, -4).length) + str.slice(-4)
```


#### Good to hear


* Short, one-line functional solutions to problems should be preferred provided they are efficient


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a callback?

<details>
<summary>View answer</summary>

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are callbacks that are only executed when a specific event occurs.

```js
function onClick() {
  console.log("The user clicked on the page.")
}
document.addEventListener("click", onClick)
```


#### Good to hear


* Functions are first-class objects in JavaScript
* Callbacks vs Promises


##### Additional links


* [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between `null` and `undefined`?

<details>
<summary>View answer</summary>

In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.


#### Good to hear


* `typeof undefined` evaluates to `"undefined"`.
* `typeof null` evaluates `"object"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.
* `undefined == null` evaluates to `true`.


##### Additional links


* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Describe the different ways to create an object. When should certain ways be preferred over others?

<details>
<summary>View answer</summary>

##### Object literal

Often used to store one occurrence of data.

```js
const person = {
  name: "John",
  age: 50,
  birthday() {
    this.age++
  }
}
person.birthday() // person.age === 51
```

##### Constructor

Often used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.birthday = function() {
  this.age++
}
const person1 = new Person("John", 50)
const person2 = new Person("Sally", 20)
person1.birthday() // person1.age === 51
person2.birthday() // person2.age === 21
```

##### Factory function

Creates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.

```js
const createPerson = (name, age) => {
  const birthday = () => person.age++
  const person = { name, age, birthday }
  return person
}
const person = createPerson("John", 50)
person.birthday() // person.age === 51
```

##### `Object.create()`

Sets the prototype of the newly created object.

```js
const personProto = {
  birthday() {
    this.age++
  }
}
const person = Object.create(personProto)
person.age = 50
person.birthday() // person.age === 51
```

A second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.

```js
Object.create(personProto, {
  age: {
    value: 50,
    writable: true,
    enumerable: true
  }
})
```


#### Good to hear


* Prototypes are objects that other objects inherit properties and methods from.
* Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object.


##### Additional links


* [Factory functions vs constructor functions vs classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between a parameter and an argument?

<details>
<summary>View answer</summary>

Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.

```js
function myFunction(parameter1, parameter2) {
  console.log(arguments[0]) // "argument1"
}
myFunction("argument1", "argument2")
```


#### Good to hear


* `arguments` is an array-like object containing information about the arguments supplied to an invoked function.
* `myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### Does JavaScript pass by value or by reference?

<details>
<summary>View answer</summary>

JavaScript always passes by value. However, with objects, the value is a reference to the object.


#### Good to hear


* Difference between pass-by-value and pass-by-reference


##### Additional links


* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How do you clone an object in JavaScript?

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


* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are Promises?

<details>
<summary>View answer</summary>

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result")
  }, 100)
})
  .then(console.log)
  .catch(console.error)
```


#### Good to hear


* Take a look into the other questions regarding `Promise`s!


##### Additional links


* [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does prototypal inheritance differ from classical inheritance?

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

<details>
<summary>View answer</summary>

The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.


#### Good to hear


* JavaScript performs automatic type conversion
* Objects are compared by reference
* Primitives are compared by value


##### Additional links


* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
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

<details>
<summary>View answer</summary>

Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.


#### Good to hear


* Automatic semicolon placement can lead to time-consuming bugs


##### Additional links


* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between synchronous and asynchronous code in JavaScript?

<details>
<summary>View answer</summary>

Synchronous means each operation must wait for the previous one to complete.

Asynchronous means an operation can occur while another operation is still being processed.

In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.


#### Good to hear


* JavaScript has a concurrency model based on an "event loop".
* Functions like `alert` block the main thread so that no user input is registered until the user closes it.


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### What does the following code evaluate to?

```js
typeof typeof 0
```

<details>
<summary>View answer</summary>

It evaluates to `"string"`.

`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.


#### Good to hear





##### Additional links


* [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are JavaScript data types?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the differences between `var`, `let`, `const` and no keyword statements?

<details>
<summary>View answer</summary>

##### No keyword

When no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.

##### var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.

Below, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs `10` ten times
    console.log(i)
  })
}

/* Solutions with `var` */
for (var i = 0; i < 10; i++) {
  // Passed as an argument will use the value as-is in
  // that point in time
  setTimeout(console.log, 0, i)
}

for (var i = 0; i < 10; i++) {
  // Create a new function scope that will use the value
  // as-is in that point in time
  ;(i => {
    setTimeout(() => {
      console.log(i)
    })
  })(i)
}
```

##### let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i)
  })
}
```

##### const

`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

```js
const myObject = {}
myObject.prop = "hello!" // No error
myObject = "hello" // Error
```


#### Good to hear


* All declarations are hoisted to the top of their scope.
* However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.
* Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.
* `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.


##### Additional links


* [`let` vs `const`](https://wesbos.com/let-vs-const/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Explain the difference between mutability and immutability, and mutating vs non-mutating methods.

<details>
<summary>View answer</summary>

"Mutability" means a value is subject to change. "Immutability" means a value cannot change.

Objects are mutable, while primitive values (strings, numbers, etc) are immutable. This means any operation performed on a primitive value does not change the original value.

All `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.

```js
const myString = "hello!"
myString.replace("!", "") // returns a new string, cannot mutate the original value

const originalArray = [1, 2, 3]
originalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]
originalArray.concat(4) // returns a new array, does not mutate the original
```


#### Good to hear


* List of mutating and non-mutating array methods


##### Additional links


* [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the only value not equal to itself in JavaScript?

<details>
<summary>View answer</summary>

`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.


#### Good to hear


* The difference between `isNaN()` and `Number.isNaN()`
* `const isNaN = x => x !== x`


##### Additional links


* [MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is Big O Notation?

<details>
<summary>View answer</summary>

Big O notation is used in Computer Science to describe time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.

Algorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.

In these examples, the base time is `1ms` to make it more familiar.

##### O(1)

```js
arr[arr.length - 1]
```

Constant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.

* 1000 elements = `1ms`

##### O(N)

```js
arr.filter(fn)
```

Linear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.

* 1000 elements = `1000ms`

##### O([1, N])

```js
arr.some(fn)
```

* 1000 elements = `1ms <= x <= 1000ms`

The execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).

##### O(logN)

```js
arr.sort(fn)
```

Browsers usually implement the quicksort algorithm for the `sort()` method which is logN time complexity. This is very efficient for large collections.

* 1000 elements = `3ms`

##### O(N^2)

```js
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ...
  }
}
```

The execution time rises quadratically with the number of elements. Usually the result of nesting loops.

* 1000 elements = `1000000ms`

##### O(N!)

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val
        ])
      ),
    []
  )
}
```

The execution time rises extremely fast with even just 1 addition to the array.

1000 elements = `Infinity` (practically) ms


#### Good to hear


* Be wary of nesting loops as execution time increases exponentially.


##### Additional links


* [Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a pure function?

<details>
<summary>View answer</summary>

A pure function is function that satisfies these two conditions:

* Given the same input, the function returns the same output.
* The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).

Pure functions can mutate local data within the function as long as it satisfies the two conditions above.

##### Pure

```js
const a = (x, y) => x + y
const b = (arr, value) => arr.concat(value)
const c = arr => [...arr].sort((a, b) => a - b)
```

##### Impure

```js
const a = (x, y) => x + y + Math.random()
const b = (arr, value) => (arr.push(value), arr)
const c = arr => arr.sort((a, b) => a - b)
```


#### Good to hear


* Pure functions are easier to reason about due to their reliability.
* All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).
* If a function does not return a value, it is an indication that it is causing side effects.


##### Additional links


* [MDN docs for `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for `undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is recursion and when is it useful?

<details>
<summary>View answer</summary>

Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.

For example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply... we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.

```js
const nest = (items, id = null, link = "parent_id") =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))

const comments = [
  { id: 1, parent_id: null, text: "First reply to post." },
  { id: 2, parent_id: 1, text: "First reply to comment #1." },
  { id: 3, parent_id: 1, text: "Second reply to comment #1." },
  { id: 4, parent_id: 3, text: "First reply to comment #3." },
  { id: 5, parent_id: 4, text: "First reply to comment #4." },
  { id: 6, aprent_id: null, text: "Second reply to post." }
]

nest(comments)
/*
[
  { id: 1, parent_id: null, text: "First reply to post.", children: [...] },
  { id: 6, parent_id: null, text: "Second reply to post." children: [] }
]
*/
```

In the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won't invoke the callback function which contains the recursive call, thereby breaking the loop.


#### Good to hear


* Recursion is useful when working with data structures containing an unknown number of nested structures.
* Recursion must have a base condition to be met that breaks out of the loop or it will call itself indefinitely.


##### Additional links


* [In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How can you avoid callback hells?

```js
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
```

<details>
<summary>View answer</summary>

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.

The above code can be restructured like so:

```js
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(e)
  // ...
}
```

There are lots of ways to solve the issue of callback hells:

* Modularization: break callbacks into independent functions
* Use a control flow library, like async
* Use generators with Promises
* Use async/await (from v7 on)


#### Good to hear


* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.


##### Additional links


* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a closure? Can you give a useful example of one?

<details>
<summary>View answer</summary>

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### Explain the difference between a static method and an instance method.

<details>
<summary>View answer</summary>

Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

```js
Array.isArray // static method of Array
Array.prototype.push // instance method of Array
```

In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.

Instance methods could technically work as static methods, but provide terser syntax:

```js
const arr = [1, 2, 3]
arr.push(4)
Array.push(arr, 4)
```


#### Good to hear


* How to create static and instance methods with ES2015 class syntax


##### Additional links


* [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is event-driven programming?

<details>
<summary>View answer</summary>

Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.

A common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.

```js
document.addEventListener("click", function(event) {
  // This callback function is run when the user
  // clicks on the document.
})
```

Without the context of the DOM, the pattern may look like this:

```js
const hub = createEventHub()
hub.on("message", function(data) {
  console.log(`${data.username} said ${data.text}`)
})
hub.emit("message", {
  username: "John",
  text: "Hello?"
})
```

With this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.


#### Good to hear


* Follows a publish-subscribe pattern.
* Responds to events that occur by running any callback functions subscribed to the event.
* Show how to create a simple pub-sub implementation with JavaScript.


##### Additional links


* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the `this` keyword and how does it work?

<details>
<summary>View answer</summary>

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.

Here are some common examples of how `this` works:

##### Object literals

`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.

Properties set as `this` do not refer to the object.

```js
var myObject = {
  property: this,
  regularFunction: function() {
    return this
  },
  arrowFunction: () => {
    return this
  },
  iife: (function() {
    return this
  })()
}
myObject.regularFunction() // myObject
myObject["regularFunction"]() // my Object

myObject.property // NOT myObject; lexical `this`
myObject.arrowFunction() // NOT myObject; lexical `this`
myObject.iife() // NOT myObject; lexical `this`
const regularFunction = myObject.regularFunction
regularFunction() // NOT myObject; lexical `this`
```

##### Event listeners

`this` refers to the element listening to the event.

```js
document.body.addEventListener("click", function() {
  console.log(this) // document.body
})
```

##### Constructors

`this` refers to the newly created object.

```js
class Example {
  constructor() {
    console.log(this) // myExample
  }
}
const myExample = new Example()
```

##### Manual

With `call()` and `apply()`, `this` refers to the object passed as the first argument.

```js
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }
```

##### Unwanted `this`

Because `this` can change depending on the scope, it can have unexpected values when using regular functions.

```js
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this is now this.arr
      return this.double(value)
    })
  },
  double() {
    return value * 2
  }
}
obj.doubleArr() // Uncaught TypeError: this.double is not a function
```


#### Good to hear


* In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.
* `Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.
* `Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.
* If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.


##### Additional links


* [`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is functional programming?

<details>
<summary>View answer</summary>

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.


#### Good to hear


* Cleaner, more concise development experience
* Simple function composition
* Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
* JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)


##### Additional links


* [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)
* [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is memoization?

<details>
<summary>View answer</summary>

Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.

A basic implementation in JavaScript looks like this:

```js
const memoize = fn => {
  const cache = new Map()
  return value => {
    const cachedResult = cache.get(value)
    if (cachedResult !== undefined) return cachedResult
    const result = fn(value)
    cache.set(value, result)
    return result
  }
}
```


#### Good to hear


* The above technique returns a unary function even if the function can take multiple arguments.
* The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.
* Memoization increases performance on subsequent function calls but still needs to do work on the first call.


##### Additional links


* [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

<details>
<summary>View answer</summary>

The main purpose is to avoid manipulating the DOM directly and keep the state of an application
in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.

When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.


#### Good to hear


* The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.
* JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.


##### Additional links


* [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What does `'use strict'` do and what are some of the key benefits to using it?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.

```js
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
```

<details>
<summary>View answer</summary>

Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.

```js
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
```


#### Good to hear


* Function composition is the process of combining two or more functions to produce a new function.


##### Additional links


* [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a virtual DOM and why is it used in libraries/frameworks?

<details>
<summary>View answer</summary>

The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.

```html
<div class="counter">
  <h1>0</h1>
  <button>-</button>
  <button>+</button>
</div>
```

The above markup's virtual DOM representation might look like this:

```js
{
  nodeName: "div",
  attributes: { class: "counter" },
  children: [
    {
      nodeName: "h1",
      attributes: {},
      children: [0]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["-"]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["+"]
    }
  ]
}
```

The library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.

Once the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.


#### Good to hear


* Why accessing the DOM can be so costly.


##### Additional links


* [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the event loop in Node.js?

<details>
<summary>View answer</summary>

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.


#### Good to hear


* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded


##### Additional links


* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## HTML
### What is the purpose of cache busting and how can you achieve it?

<details>
<summary>View answer</summary>

Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.

However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.

Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.

A common technique to force the browser to re-download the file is to append a query string to the end of the file.

* `src="js/script.js"` => `src="js/script.js?v=2"`

The browser considers it a different file but prevents the need to change the file name.


#### Good to hear





##### Additional links


* [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

<details>
<summary>View answer</summary>

Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor "section". So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.


#### Good to hear


* W3 recommends having as many as you want, but only 1 of each for each "section" of your page, i.e. body, section etc.


##### Additional links


* [StackOverflow Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`

<details>
<summary>View answer</summary>

* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.

* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it’s meaining. Individual blog posts or news stories are good examples.

* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.

* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.


#### Good to hear


* Other semantic elements are `<form>` and `<table>`


##### Additional links


* [HTML 5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the purpose of `alt` attribute on images?

<details>
<summary>View answer</summary>

The `alt` attribute provides alternative information for an image if a user cannot view it. If the image is for decorative purposes only, the `alt` attribute should be empty. On the other hand, if image contains information the `alt` attribute should describe image.


#### Good to hear


* Decorative images should have empty `alt` tag


##### Additional links


* [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are `defer` and `async` attributes on a `<script>` tag?

<details>
<summary>View answer</summary>

If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order
they are encountered.

The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.

The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.

Note: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).

```html
<script src="myscript.js"></script>
<script src="myscript.js" defer></script>
<script src="myscript.js" async></script>
```


#### Good to hear


* Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.
* If the scripts rely on each other, use `defer`.
* If the script is independent, use `async`.
* Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.


##### Additional links


* [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the DOM?

<details>
<summary>View answer</summary>

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.


#### Good to hear


* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
* `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
* Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.


##### Additional links


* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Discuss the differences between an HTML specification and a browser’s implementation thereof.

<details>
<summary>View answer</summary>

HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.

A browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.


#### Good to hear


* `HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)
* However, invalid documents may contain anything, so it's impossible for the specification to handle all possibilities comprehensively.
* Thus, many decisions about how to handle malformed documents are left up to the browser.


##### Additional links


* [HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are some differences that XHTML has compared to HTML?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### Where and why is the `rel="noopener"` attribute used?

<details>
<summary>View answer</summary>

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.


#### Good to hear


* `rel="noopener"` is applied to hyperlinks.
* `rel="noopener"` prevents opened links from manipulating the source page.


##### Additional links


* [Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)
* [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.

<details>
<summary>View answer</summary>

With HTML5, web pages can store data locally within the user’s browser.
The data is stored in name/value pairs, and a web page can only access data stored by itself.

**Differences between `localStorage` and `sessionStorage` regarding lifetime:**

* Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.
* `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.

**Differences between `localStorage` and `sessionStorage` regarding storage scope:**
Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.

* `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.
* Unlike in `localStorage`, the same scripts from the same origin can't access each other's `sessionStorage` when opened in different tabs.


#### Good to hear


* Earlier, this was done with cookies.
* The storage limit is far larger (at least 5MB) than with cookies and its faster.
* The data is never transferred to the server and can only be used if the client specifically asks for it.


##### Additional links


* [W3Schools HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)
</details>



<br>[⬆ Back to top](#table-of-contents)


## CSS
### What is CSS BEM?

<details>
<summary>View answer</summary>

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

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

Here is an example with the class names on markup:

```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.

Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

```html
<a href="/" class="navbar__link is-active"></a>
```

These must be chained to the Element and never alone however, or there will be scope issues.

```css
.navbar__link.is-active {
}
```


#### Good to hear


* Alternative solutions to scope issues like CSS-in-JS


##### Additional links


* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the advantages of using CSS preprocessors?

<details>
<summary>View answer</summary>

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.


#### Good to hear


* They allow us to write more maintainable and scalable CSS
* Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)


##### Additional links


* [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

```html
<div class="row">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

<details>
<summary>View answer</summary>

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

```css
.row {
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
</details>



<br>[⬆ Back to top](#table-of-contents)


### Can you name the four types of `@media` properties?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the advantages of using CSS sprites and how are they utilized?

<details>
<summary>View answer</summary>

CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.

Under HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.

However, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.

To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.


#### Good to hear


* `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet.


##### Additional links


* [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Can you describe how CSS specificity works?

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
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a focus ring? What is the correct solution to handle them?

<details>
<summary>View answer</summary>

A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.

In the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.

In recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.

The best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.


#### Good to hear





##### Additional links


* [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## Node
### NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?

```js
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

<details>
<summary>View answer</summary>

Advantages include:

* Not needing to process data if there is no need to even reference it
* Having a consistent API leads to more adoption
* Ability to easily adapt a callback pattern that will lead to more maintainable code

As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred.

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

```js
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}

var callback = function(error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}

isTrue(false, callback)
isTrue(true, callback)

/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
```


#### Good to hear


* This is just a convention. However, you should stick to it.


##### Additional links


* [The Node.js Way Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is REST?

<details>
<summary>View answer</summary>

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.

Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:

* An identifier for the resource. This is known as the endpoint or URL for the resource.
* The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.

Here is an example of the URL and HTTP method with a `posts` resource:

* Reading: `/posts/` => GET
* Creating: `/posts/new` => POST
* Updating: `/posts/:id` => PUT
* Destroying: `/posts/:id` => DELETE


#### Good to hear


* Alternatives to this pattern like GraphQL


##### Additional links


*   ](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How can you avoid callback hells?

```js
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
```

<details>
<summary>View answer</summary>

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.

The above code can be restructured like so:

```js
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(e)
  // ...
}
```

There are lots of ways to solve the issue of callback hells:

* Modularization: break callbacks into independent functions
* Use a control flow library, like async
* Use generators with Promises
* Use async/await (from v7 on)


#### Good to hear


* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.


##### Additional links


* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the event loop in Node.js?

<details>
<summary>View answer</summary>

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.


#### Good to hear


* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded


##### Additional links


* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## Security
### What is a cross-site scripting attack (XSS) and how do you prevent it?

<details>
<summary>View answer</summary>

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.

For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.
* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.


#### Good to hear


* On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
* On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.


##### Additional links


* [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## License

[MIT](LICENSE). Copyright (c) [Stefan Feješ](https://stefanfejes.com/).
