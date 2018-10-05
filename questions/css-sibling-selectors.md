### What is the difference between '+' and '~' sibling selectors?.


#### Answer

<!-- Your answer goes here. -->

General Sibling Selector

The general sibling selector selects all elements that are siblings and are after of a specified element.
The following example selects all <p> elements that are siblings of <div> elements: 

```css
div ~ p {
    background-color: blue;
}
```

The Adjacent Sibling Selector '+' selects all elements that are next to a specified element and have the same parent.

This example will select all <p> elements that are placed immediately after <div> elements:

```css
div + p {
    background-color: red;
}
```

#### Good to hear

* This is a question helps you to show that you know more than the basics of CSS selectors

##### Additional links

* [W3School's CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)
* [Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

<!-- tags: (css) -->

<!-- expertise: (2) -->
