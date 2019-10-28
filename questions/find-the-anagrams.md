### Given an array of words, write a method to output matching sets of anagrams.

```js
const words = ['rates', 'rat', 'stare', 'taser', 'tears', 'art', 'tabs', 'tar', 'bats', 'state'];
```

#### Answer

```js

const words = ['rates', 'rat', 'stare', 'taser', 'tears', 'art', 'tabs', 'tar', 'bats', 'state'];

function anagramGroups(wordAry){
    const groupedWords = {};

    // iterate over each word in the array
    wordAry.map(word => {
      // alphabetize the word and a separate variable
      alphaWord = word.split('').sort().join('');
      // if the alphabetize word is already a key, push the actual word value (this is an anagram)
      if(groupedWords[alphaWord]) {
        return groupedWords[alphaWord].push(word);
      }
      // otherwise add the alphabetize word key and actual word value (may not turn out to be an anagram)
      groupedWords[alphaWord] = [word]; 
    })
  
    return groupedWords;
}

// call the function and store results in a variable called collectedAnagrams
const collectedAnagrams = anagramGroups(words);

// iterate over groupedAnagrams, printing out group of values
for(const sortedWord in collectedAnagrams) {
  if(collectedAnagrams[sortedWord].length > 1) { 
    console.log(collectedAnagrams[sortedWord].toString());
  }
}
```

#### Good to hear

 - Iterate the array
 - Alphabetize each word
 - Store alphabetize word as the key value in a groupedWords object with the original word as the value
 - Compare alphabetize words to object keys and add additional original words when matches are found
 - Iterate over the return object and output the values, when there is more then one. (single values mean no anagram )


##### Additional links

* [Find The Anagrams Gist](https://gist.github.com/tinabme/fe6878f5cff42f60a537262503f9b765)
* [isAnagram function implementation](https://www.30secondsofcode.org/snippet/isAnagram)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
