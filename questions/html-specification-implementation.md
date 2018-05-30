### Discuss the differences between an HTML specification and a browser’s implementation thereof.

#### Answer

HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.

A browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.

#### Good to hear

* `HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)
* However, invalid documents may contain anything, so it's impossible for the specification to handle all possibilities comprehensively.
* Thus, many decisions about how to handle malformed documents are left up to the browser.

##### Additional links

* [HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)

<!-- tags: (html) -->

<!-- expertise: (1) -->
