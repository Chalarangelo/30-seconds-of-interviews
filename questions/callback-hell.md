### How can you avoid callback hells?

```js
getData(function(a){  
    getMoreData(a, function(b){
        getMoreData(b, function(c){ 
            getMoreData(c, function(d){ 
                getMoreData(d, function(e){ 
                    ...
                });
            });
        });
    });
});
```

#### Answer

There are lots of ways to solve the issue of callback hells:

* modularization: break callbacks into independent functions
* use a control flow library, like async
* use generators with Promises
* use async/await (from v7 on)

#### Good to hear

* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

##### Additional links

* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)

<!-- tags: (node, javascript) -->

<!-- expertise: (2) -->
