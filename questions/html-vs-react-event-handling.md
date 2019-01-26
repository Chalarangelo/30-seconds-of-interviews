### What is the difference between HTML and React event handling?

#### Answer

In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:

```html
<button onclick="handleClick()"></button>
```

In React, the attribute name is camelCase and are passed the function reference inside curly braces:

```js
<button onClick={handleClick} />
```

In HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.

```html
<a href="#" onclick="console.log('The link was clicked.'); return false" />
```

```js
function handleClick(e) {
  e.preventDefault()
  console.log("The link was clicked.")
}
```

#### Good to hear

* HTML uses lowercase, React uses camelCase.

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

<!-- tags: (react,javascript,html) -->

<!-- expertise: (1) -->
