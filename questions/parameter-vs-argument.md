### What is the difference between a parameter and an argument?

#### Answer

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

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
