### In Javascript, Hoisting happens to functions and variables declared with `var`. Where can they be scoped?

#### Answer

Either globally or in a function.

Unlike `let` or `const` they are not block-scoped and can only exist in either one of them because they are assigned a pointer before any evaluation of the code.

#### Good to hear

* There is more than one type of scope in Javascript(Global, Function, Block)
* Hoisting defines the references before actually evaluating the script

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [30 Seconds of Interviews: How does Hoisting work in Javascript](https://github.com/fejes713/30-seconds-of-interviews#how-does-hoisting-work-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
