### What does the following function return?

```js
function greet() {
    return
    {
      message: 'hello'
    }
}
```

#### Answer

Because of JavaScript's automatic semicolon placement compiler places a semicolon after `return` keyword and therefore it returns `undefined` without single error being thrown.

#### Additional links

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

#### Good to hear

* Automatic semicolon placement can lead to time-consuming bugs
* Even though semicolons are optional in JavaScript, you should use them


<!-- tags: (javascript) -->
