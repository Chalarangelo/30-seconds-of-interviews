### How does `this` work?

#### Answer

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with `.call`, `.apply` and `.bind`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call`.

Here are some common examples of `this`:

```js
// Object literals
var myObject = {
  regularFunction: function() {
    return this
  },
  arrowFunction: () => {
    return this
  }
}
myObject.regularFunction() // myObject
myObject.arrowFunction() // NOT myObject
const withoutContextFunction = myObject.regularFunction
withoutContextFunction() // NOT myObject

// Event listeners
document.body.addEventListener("click", function() {
  console.log(this) // document.body
})

// Classes
class myClass {
  constructor() {
    console.log(this) // myClassInstance
  }
}
var myClassInstance = new myClass()

// Manual
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }

// Unwanted `this`
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this === this.arr
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

* Global `this` in strict and non-strict mode
* Differences between `call`, `apply` and `bind`
* Cases where a method will not have the correct `this` context
* When to use arrow functions and regular functions

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
