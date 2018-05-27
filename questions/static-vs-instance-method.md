### Explain the difference between a static method and an instance method.

#### Answer

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

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
