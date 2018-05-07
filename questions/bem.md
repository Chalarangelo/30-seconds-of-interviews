### What is CSS BEM?

#### Answer

The BEM methodology is another naming convention for CSS classes. The BEM stands for Block, Element, Modifier which is an explanation for its structure. Block is a standalone component that is reusable across projects. Elements and modifiers are part of the block with no standalone meaning. Here is the example of the typical syntax:

```css
/* block component */
.block {}

/* element */
.block__element {}

/* modifier */
.block__element-modifier {}
```

#### Good to hear

* Block is a top-level abstraction of a new component
* Elements make no sense to be alone - they are tightly dependent on blocks
* Modifier is a flag added to block or element so it makes them a bit more specific

##### Additional links

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

<!-- tags: (css) -->
