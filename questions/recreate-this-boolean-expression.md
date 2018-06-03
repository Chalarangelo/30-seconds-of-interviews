### Recreate this Boolean expression with an expression that would have the same truth table

```js
a && b
```

#### Answer

```js
!( !a || !b )
```
____

> Note: We will be using Javascript for this example, which does not have universal gates, but the functionality can be emulated with proper negation

The truth table for the given expression is as follows:

a|b|result
---|---|---
false|false|false
false|true|false
true|false|false
true|true|true

which if we want an equivilant we need to look at the other expression available to us that isn't equality: NOR(`||`) which is an inverted OR(`||`) gate, meaning if one of the values is false, evaluate to true. To get there we start with an OR(`||`) gate:

```js
a || b
```

a|b|result
---|---|---
false|false|false
false|true|true
true|false|true
true|true|true

However we need to invert the top and bottom, which is achieved by inverting the evaluation of the original values to achieve NOR(`!||`)

```js
!a || !b
```

!a|!b|result
---|---|---
true|true|true
true|false|true
false|true|true
false|false|false

Next we just need to invert all results to get back to the original truth table which would be a replicated input to an universal gate (NAND(`!&&`) or NOR(`!||`)), but is the same as negating the end result

```js
!( !a || !b )
```

!a|!b|!result
---|---|---
true|true|false
true|false|false
false|true|false
false|false|true

#### Good to hear

* Equivilant expressions for Logic can be built out of a different number of steps and inversions
* Most languages do not have a NAND or NOR gate, but the logic can be recreated by proper inversion of the arguments and result
* Replicated input to a universal gate is the same as just negating the argument

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->
* [All About Circuits: Universal Logic Gates](https://www.allaboutcircuits.com/technical-articles/universal-logic-gates/)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
