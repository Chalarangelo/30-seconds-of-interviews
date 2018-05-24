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

To become an efficient Node.js developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

##### Additional links

* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Async Best-Practices to avoid Callback Hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)

<!-- tags: (node, javascript) -->

<!-- expertise: (2) -->
