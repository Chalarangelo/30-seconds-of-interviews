### What is a truth table? Try to recreate the following Boolean expression using different operators in JavaScript.

```js
a && b
```

#### Answer

A truth table is a mathematical table used in logic when working with Boolean expressions. 

Intuitively, we logically construct a truth table when working with logical operations.

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

The truth table for `a && b` is as follows:

a|b|result
---|---|---
false|false|false
false|true|false
true|false|false
true|true|true

If we want an equivalent table, we need to look at other expressions available to us. 

> Note: JavaScript does not have universal gates, but the functionality can be emulated with proper negation.

NOR (`!||`) is an inverted OR (`||`) gate, meaning if one of the values is `false`, it evaluates to `true`. To get there, we start with an OR gate:

```js
a || b
```

a|b|result
---|---|---
false|false|false
false|true|true
true|false|true
true|true|true

To achieve NOR from this, we need to invert the top and bottom, which is achieved by inverting the original values using the logical NOT (`!`) operator.

```js
!a || !b
```

!a|!b|result
---|---|---
true|true|true
true|false|true
false|true|true
false|false|false

Finally, we need to invert the results using the logical NOT operator on the entire expression to get back to the original truth table.

```js
!(!a || !b)
```

!a|!b|!result
---|---|---
true|true|false
true|false|false
false|true|false
false|false|true

#### Good to hear

* Equivalent expressions for logic can be built out of a different number of steps and inversions.
* Most languages do not have a NAND or NOR gate, but the logic can be recreated by proper inversion of the arguments and result.
* Replicated input to a universal gate is the same as negating the argument.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->
* [All About Circuits: Universal Logic Gates](https://www.allaboutcircuits.com/technical-articles/universal-logic-gates/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
