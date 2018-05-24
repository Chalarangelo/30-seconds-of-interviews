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

Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.

#### Good to hear

* Automatic semicolon placement can lead to time-consuming bugs

##### Additional links

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
