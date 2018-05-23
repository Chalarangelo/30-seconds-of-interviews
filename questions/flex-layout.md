### Use flexbox to create a 3-column layout where each of the columns has a width of 2/12, 7/12 and 3/12 of the screen width respectively. Use the following HTML code as a guide.

```html
<div class="flex-grid">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

#### Answer

We only need to set the `display` property of the `flex-grid` element to `flex` and then apply the appropriate values for each column, using the `flex` property like this:

```css
.flex-grid {
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

<!-- expertise: (junior) -->
