### What is the difference between an expression and a statement in JavaScript?

#### Answer

There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:

* **Expression**: produces a value
* **Statement**: performs an action
* **Expression statement**: produces a value and performs an action

A general rule of thumb:

> If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement.

##### Statements

```js
let x = 0

function declaration() {}

if (true) {
}
```

Statements appear as instructions that do something but don't produce values.

```js
// Assign `x` to the absolute value of `y`.
var x
if (y >= 0) {
  x = y
} else {
  x = -y
}
```

The only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.

##### Expressions

Expressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.

```js
5 + 5 // => 10

lastCharacter("input") // => "t"

true === true // => true
```

##### Expression statements

There is an equivalent version of the set of statements used before as an expression using the conditional operator:

```js
// Assign `x` as the absolute value of `y`.
var x = y >= 0 ? y : -y
```

This is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).

#### Good to hear

* Function declarations vs function expressions

##### Additional links

* [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
