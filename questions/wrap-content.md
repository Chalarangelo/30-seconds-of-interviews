### What is the reason for wrapping the entire content of a JavaScript source file in a function block?


#### Answer

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries

#### Good to hear

* Used among many popular JavaScript libraries
* Creates a private namespace

##### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<!-- tags: (javascript) -->
