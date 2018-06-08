### How can you avoid callback hells?

```js
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
```

#### Answer

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.

The above code can be restructured like so:

```js
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(d)
  // ...
}
```

There are lots of ways to solve the issue of callback hells:

* Modularization: break callbacks into independent functions
* Use a control flow library, like async
* Use generators with Promises
* Use async/await (from v7 on)

#### Good to hear

* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

##### Additional links

* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)

<!-- tags: (node,javascript) -->

<!-- expertise: (2) -->
