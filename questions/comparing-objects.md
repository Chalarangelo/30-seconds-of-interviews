### How would you compare two objects in JavaScript?

#### Answer

Even though two different objects can have the same properties with equal values, they are not considered equal when compared. When two objects are compared with `==` or `===`, they are being compared by their reference (location in memory), unlike primitive values which are compared by value.

Note: this technique ignores prototypes and does not consider nested objects equal if they are not the same reference.

```js
function isShallowEqual(obj1, obj2) {
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length != obj2Props.length) {
    return false;
  }

  for (const prop of obj1Props) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}
```

#### Good to hear

* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference (location in memory)

##### Additional links

* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)

<!-- tags: (javascript) -->
