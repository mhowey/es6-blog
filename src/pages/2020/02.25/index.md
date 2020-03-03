---
title: Quick Tip - Map, Filter and Includes
date: '2020-02-25T22:40:32.169Z'
---

## What are they and when to use them?

ES6 (i.e. 2015!!), introduced some very useuful new features to the JavaScript programming language. `Map` and `filter` are two array functions introduced alongside methods such as `forEach`, `reduce`, `includes`, and `reverse`, among others. In this article, however, we're going to quickly look at `map` and `filter`, while also utilizing `includes` in our code.

## Array.includes

This one works on arrays and strings, So it's pretty handy! It returns a boolean. So for instance...

```javascript
// with an array...
const anArray = ['one', 'two', 'three']
const includesOne = anArray.includes('one')
console.log(includesOne)

// or a string...
const myString = 'Hello World!'
const includesExclamation = myString.includes('!')
console.log(includesExclamation)
```

...and the console output...

```bash
true
true
```

So you see, it's simply telling you whether that value exists in the array or not.

## Array.map

The `Array.map` function is a way to iterate over an array and return a new array after doing operations during iteration. Let's look at a simple example:

```javascript
const myArray = ['one', 'two', 'three', 'four']

const anotherArray = myArray.map(value => {
  if (value.includes('o')) {
    return value
  }
})

console.log(anotherArray)
```

So what do you think the output of the console log above will be? You think it will be an array containing the three values that have an 'o' in them, 'one', 'two', 'four'??

Suprise! Here's what the above map actually spits out into `anotherArray`...

```bash
['one', 'two', undefined, 'four']
```

So yeah, if you guess that 'one', 'two' and 'four' would be in there, you were partially correct. If you didn't guess that `undefined` would ALSO be in there, that's why you're reading this article!

`undefined` makes the cut because map doesn't remove any values from the array, it will ALWAYS return a value for EVERY item in the array. In this case, map knows that if the value includes an 'o', to just return the value. Otherwise, it doesn't know what to return, so it returns `undefined`.

## Array.filter

The `Array.filter` method is much more suited to removing values from an array that don't match some criteria. Let's take a quick look...

```javascript
const myArray = ['one', 'two', 'three', 'four']

const anotherArray = myArray.map(value => {
  if (value.includes('o')) {
    return value
  }
})
console.log(anotherArray)

const filteredArray = myArray.filter(item => item.includes('o'))
console.log(filteredArray)
```

Ok, so now you can see the difference between these two Array methods in the console output...

```bash
["one", "two", undefined, "four"]
["one", "two", "four"]
```

The filteredArray code is a bit more concise because it takes advantage of the fat arrow "implicit return". This simply means that if we exclude our curly braces and explicit return statement, the "item" is automatically returned.

Filter only returns Truthy values. So any comparison that results in a boolean will have the desired outcome. Only those array items containing the leter 'o' will be returned into the filteredArray variable.

## Summary

`Array.map` and `Array.filter` are two of the most utilized JavaScript functions, and although they work in a similar manner, they have specific use cases when they are best used. If you need to iterate over EVERY element in an array and return some value from that element, such as outputting some JSX markup from returned data, `Array.map` is what you're looking for.

Alternatively, if you have an array of values that you need to "filter" down to a specific set of values that match some criteria, then `Array.filter` is the function you need!

Thanks for reading and happy coding!
