### How would you compare two objects in JavaScript?

#### Answer

Even though two objects have the same properties and all of their properties have the same value they're not considered equal. This is because JavaScript has two different approaches for testing equality. Primitives are compared by their value while objects are compared by their reference(location in memory). To compare two objects we need to do it with a helper function.

```js
function isEqual(obj1, obj2){
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length != obj2Props.length) {
    return false
  }

  for (let prop of obj1Props) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
  }

  return true
}
```

#### Aditional links

* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)


#### Good to hear

* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference(location in memory)

<!-- tags: (javascript) -->
