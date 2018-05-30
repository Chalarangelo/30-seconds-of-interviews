### In which states can a Promise be?

#### Answer

A `Promise` is in one of these states:

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).
When either of these options happens, the associated handlers queued up by a promise's then method are called.

#### Good to hear

##### Additional links

* [Official Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
