### What are portals in React?

#### Answer

Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, container)
```

The first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.

#### Good to hear

##### Additional links

* [React docs on Portals](https://reactjs.org/docs/portals.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
