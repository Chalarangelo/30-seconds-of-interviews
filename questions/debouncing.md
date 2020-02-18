### What is debouncing?

#### Answer
Debouncing is a process to add some delay before executing a function. It is commonly used with DOM event listeners to improve the performance of page.
It is a technique which allow us to "group" multiple sequential calls in a single one.
A raw DOM event listeners can easily trigger 20+ events per second. A debounced function will only be called once the delay has passed.

```js
const debounce = (func, delay) => { 
  let debounceTimer;
  return function() { 
    const context = this;
    const args = arguments; 
      clearTimeout(debounceTimer); 
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

window.addEventListere('scroll', debounce(function() {
  // Do stuff, this function will be called after a delay of 1 second
}, 1000));
```

#### Good to hear

* Common use case is to make API call only when user is finished typing while searching.

##### Additional links
* [Debouncing explained](https://css-tricks.com/debouncing-throttling-explained-examples/)
