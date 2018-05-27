### Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

```html
<div class="row">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

#### Answer

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

```css
.row {
  display: flex;
}

.col-2 {
  flex: 2;
}

.col-7 {
  flex: 7;
}

.col-3 {
  flex: 3;
}
```

#### Good to hear

##### Additional links

* [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<!-- tags: (css) -->

<!-- expertise: (0) -->
