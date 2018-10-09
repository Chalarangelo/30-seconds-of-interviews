### What is the difference between HTML and React event handling?

#### Answer

Some of the key differences are:

* In HTML, the event name should be in lowercase, whereas in React it follows camelcase convention.

```html
<!-- HTML -->
<button onclick="handleClick()">
```

```jsx
/* React */
<button onClick="handleClick()">
```

* In HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.

```html
<!-- HTML -->
<a href="#" onclick="console.log('The link was clicked.'); return false"/>
```

```jsx
/* React */
function handleClick(e) {
  e.preventDefault()
  console.log("The link was clicked.")
}
```

#### Good to hear

* HTML uses lowercase event names, React uses camelcase event names.

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

<!-- tags: (react,javascript,html) -->

<!-- expertise: (1) -->
