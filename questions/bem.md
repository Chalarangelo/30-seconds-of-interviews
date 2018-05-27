### What is CSS BEM?

#### Answer

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

Here is an example with the class names on markup:

```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.

Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

```html
<a href="/" class="navbar__link is-active"></a>
```

These must be chained to the Element and never alone however, or there will be scope issues.

```css
.navbar__link.is-active {
}
```

#### Good to hear

* Alternative solutions to scope issues like CSS-in-JS

##### Additional links

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

<!-- tags: (css) -->

<!-- expertise: (0) -->
