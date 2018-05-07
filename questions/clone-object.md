### How do you clone an object in JavaScript?

#### Answer

Using `Object.assign()`, one can create a shallow clone of an object, like this:

```js
var obj = {a: 1, b: 2};
var objClone = Object.assign(obj);
```

It is important to remember that nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original.

#### Good to hear

* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.
* `JSON.stringify()` is another alternative, but is CPU-intensive.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

<!-- tags: (javascript) -->
