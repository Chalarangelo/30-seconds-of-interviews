### What is the DOM?

#### Answer

The DOM (Document Object Model) is an API that represents the structure of HTML and XML documents. The document
is represented by a node tree (such as elements, text nodes, comments), where each node is an object that can be manipulated via JavaScript to change their styles, contents, placement in the tree, or interacted with through event listeners.

#### Good to hear

* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.

##### Additional links

* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
