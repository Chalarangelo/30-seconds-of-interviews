### How do you clone an object in JavaScript?

#### Answer

Using the object spread operator `...`, the object's own enumerable properties can be copied
into the new object. This creates a shallow clone of the object.

```js
const obj = { a: 1, b: 2 };
const shallowClone = { ...obj };
```

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Dates, RegExp, Function, Set, etc) that may be nested within the object.

Other alternative include

* `JSON.stringify()` but has the drawback that it is CPU-intensive.
* `Object.assign({},obj)` is another alternative.
* `Object.keys(obj).reduce((acc, key) => acc[key] = obj[key], acc , {})` is another more verbose alternative that shows the concept in greater depth.

#### Good to hear

* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

<!-- tags: (javascript) -->
