### What is the output of the following code?

```js
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"

console.log(a == c)
console.log(a == b)
```

#### Answer

The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.

#### Good to hear

* JavaScript performs automatic type conversion
* Objects are compared by reference
* Primitives are compared by value

##### Additional links

* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
