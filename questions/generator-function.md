### Declare and explain a _Generator__ 

#### Answer

```
function* generator(i) {
  yield i;
  yield i + 10;
}

// or

new GeneratorFunction ('arg1','console.log(arg1)')

// or

const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
```

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function.


#### Good to hear

* Generators can be combined with Promises
* Generators in JavaScript are a very powerful tool for asynchronous programming as they mitigate the problems with callbacks, such as Callback Hell and Inversion of Control. 
* This pattern is what async functions are built on top of.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Mozilla Docs - Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator**)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
