### What is the event loop in Node.js?

#### Answer

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

#### Good to hear

* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

<!-- tags: (node,javascript) -->

<!-- expertise: (2) -->
