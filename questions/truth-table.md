### What is a truth table? Try to recreate the following Boolean expression using different operators in JavaScript.

```js
a && b
```

#### Answer

A truth table is a mathematical table used in logic when working with Boolean expressions. It describes the Boolean result when applying logical operations on two or more expressions.

Intuitively, we construct a truth table when working with logical operations.

```
Using logical OR, only one of the operands needs to be true to evaluate to true:
-----------------------
false OR false is false
false OR true  is true
true  OR false is true
true  OR true  is true

Using logical AND, both operands must be true to evaluate to true:
------------------------
false AND false is false
false AND true  is false
true  AND false is false
true  AND true  is true
```

The truth table for `a && b` (logical AND) is as follows:

| a     | b     | result |
| ----- | ----- | ------ |
| false | false | false  |
| false | true  | false  |
| true  | false | false  |
| true  | true  | true   |

If we want an equivalent table, we need to look at other expressions available to us.

The three logical operators in JavaScript are:

* `&&` AND
* `||` OR
* `!` NOT

Logical OR (`||`) has the following truth table:

```js
a || b
```

| a     | b     | result |
| ----- | ----- | ------ |
| false | false | false  |
| false | true  | true   |
| true  | false | true   |
| true  | true  | true   |

We want to exchange only the top and bottom rows of the table to achieve a NAND (`&&!`) gate. A NAND gate is a logical expression that is true when any of the inputs are false. To arrive at NAND using OR, we need to invert the top and bottom outputs, which is achieved by inverting the original values using the logical NOT (`!`) operator.

```js
!a || !b
```

| !a    | !b    | result |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

Finally, we need to invert the results using the logical NOT operator on the entire expression to get back to the original truth table:

```js
!(!a || !b)
```

| !a    | !b    | !result |
| ----- | ----- | ------- |
| true  | true  | false   |
| true  | false | false   |
| false | true  | false   |
| false | false | true    |

This works because NAND is the logical inversion of AND, and if we negate NAND's output we get AND again.

#### Good to hear

* Equivalent expressions for logic can be built out of a different number of steps and inversions.
* Most languages do not have a NAND or NOR gate, but the logic can be recreated by proper inversion of the arguments and result.
* Replicated input to a universal gate is the same as negating the argument.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [All About Circuits: Universal Logic Gates](https://www.allaboutcircuits.com/technical-articles/universal-logic-gates/)
* [Math Memoirs: Intro to Truth Tables and Logic](https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
