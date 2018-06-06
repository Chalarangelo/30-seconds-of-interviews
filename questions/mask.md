### Create a function that masks a string of characters with `#` except for the last four (4) characters.

```js
mask("123456789") // "#####6789"
```

#### Answer

> There are many ways to solve this problem, this is just one one of them.

Using the length property we can calculate the length of the string to ba masked and using `String.prototype.repeat()` to repeat the mask character that many times. Then, using `String.prototype.slice()` once more, we can concatenate the last 4 characters by passing `-4` as an argument.

```js
const mask = (str, maskChar = "#") =>
  maskChar.repeat(str.length - 4) + str.slice(-4)
```

#### Good to hear

* Short, one-line functional solutions to problems should be preferred provided they are efficient

##### Additional links

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
