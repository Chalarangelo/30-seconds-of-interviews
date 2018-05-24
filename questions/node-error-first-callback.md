### What is an error-first callback and why should I use it?

```js
fs.readFile(filePath, function(err, data) {  
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

#### Answer

In Node.js, it is considered standard practice to handle errors in asynchronous functions by returning them as the first argument to the current function's callback. If there is an error, the first parameter is passed an Error object with all the details. Otherwise, the first parameter is null.

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

```js
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.");
  } else {
    callback(new Error("Value is not true!"));
  }
}

var callback = function (error, retval) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(retval);
}

isTrue(false, callback);
isTrue(true,  callback);

{ stack: [Getter/Setter],
  arguments: undefined,
  type: undefined,
  message: 'Value is not true!' }
Value was true.
```

As you can see from the example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function shows the reason for this: it allows a user to easily know whether or not an error occurred. If null was not the first argument passed on success, the user would need to check the object being returned and determine themselves whether or not the object constituted an error - a much more complex and less user-friendly approach.

#### Good to hear

This is just a convention. Node could use the convention that you suggest as well - with the exception that you wouldn't be able to return an error object as an intended value on success as you noticed, which may or may not be a problem, depending on your particular requirements.

##### Additional links

* [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

<!-- tags: (node, javascript) -->

<!-- expertise: (1) -->
