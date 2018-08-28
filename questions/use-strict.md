### What does `'use strict'` do and what are some of the key benefits to using it?

#### Answer

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

* Easier debugging due to eliminating silent errors.
* Disallows variable redefinition.
* Prevents accidental global variables.
* Oftentimes provides increased performance over identical code that is not running in strict mode.
* Simplifies `eval()` and `arguments`.
* Helps make JavaScript more secure.

#### Good to hear

* Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
* Throws an error on invalid usage of `delete`.
* Prohibits some syntax likely to be defined in future versions of ECMAScript

##### Additional links

* [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
