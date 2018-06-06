### In Javascript, Hoisting happens to unassigned functions and variables declared with `var`. Where can they be scoped?

#### Answer

Either globally or in a function/local scope.

Unlike `let` or `const`, `var` declerations and unassigned named functions are not lexically scoped and can only exist in either one of the compiled scopes because they are assigned a pointer before any evaluation of the code. If you attempt to access a var declared variable before it's assigned a value you get `undefined` instead of a reference error, and unassigned named functions are able to be called because they are hoisted and compiled at the scope's compile time before the rest of the code is evaluated. Anonymous functions have no reference and can only be called immeadiatly, and assigned functions are only evaluated when they are assigned.

#### Good to hear

* There is more than one type of scope in Javascript(Global, Local, Block)
* Hoisting defines the references before actually evaluating the script
* Block scopes are lexical
* Assigned functions are not hoisted because they are only evaluated at time of assignment

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [30 Seconds of Interviews: How does Hoisting work in Javascript](https://github.com/fejes713/30-seconds-of-interviews#how-does-hoisting-work-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
