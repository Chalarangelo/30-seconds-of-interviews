### What is the DOM?

#### Answer

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

#### Good to hear

* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
* `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
* Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

##### Additional links

* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

<!-- tags: (html,javascript) -->

<!-- expertise: (1) -->
