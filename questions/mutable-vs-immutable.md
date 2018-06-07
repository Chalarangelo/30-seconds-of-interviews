### Contrast mutable and immutable values, and mutating vs non-mutating methods.

#### Answer

The two terms can be contrasted as:

* Mutable: subject to change
* Immutable: cannot change

In JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.

All `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.

```js
const myString = "hello!"
myString.replace("!", "") // returns a new string, cannot mutate the original value

const originalArray = [1, 2, 3]
originalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]
originalArray.concat(4) // returns a new array, does not mutate the original
```

#### Good to hear

* List of mutating and non-mutating array methods

##### Additional links

* [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
