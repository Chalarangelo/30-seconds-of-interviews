### What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?

#### Answer

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

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
