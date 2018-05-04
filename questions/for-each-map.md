### What is the difference between a `.map` loop and a `.forEach` loop

#### Answer

Both loops iterate through the elements in an array. `.map()` maps each element to new element by calling the function on each element and it returns the new array. On the other hand, `.forEach()` executes a callback function for each element but does not return anything.

#### Additional links

* [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

#### Good to hear

* If you need to iterate over an array, `.forEach()` is a solid option
* If you need a result but don't want to mutate original array, `.map()` is the right choice

<!-- tags: (javascript) -->
