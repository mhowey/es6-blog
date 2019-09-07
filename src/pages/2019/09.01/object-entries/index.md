---
title: Quick Tip - Object Entries
date: '2019-09-01T22:40:32.169Z'
---

Here's our first "Quick Tip" where we'll look at one specific thing quickly so it's something that we can read and digest in less than 10 minutes.

## Object.entries

In plain-english, Object.entries(object) takes in an Object as an argument and returns a series of nested Arrays that describe that object.

## Start Basic

Let's start with a really basic object...

```javascript
const obj = {
  someKey: 'Some Value',
}
```

Okay, it really doesn't get simpler than that! What happens if we run our "obj" through the Object.entries prototype method...

```javascript
const obj = {
  someKey: 'Some Value',
}
const newObj = Object.entries(obj)
```

What do you think we now have in the newObj object?

We end up with...

```javascript
;[['someKey', 'Some Value']]
```

So this example isn't so useful as we are dealing with one key and one value. Turning our original object into the nested array isn't really useful. Let's add some more values to our object and see what we end up with...

Making the following tiny change to the object will probably help you to understand the transformation that happens when we run our object through Object.entries().

```javascript
const obj = {
  someArrayKey: ['Some Value'],
}
```

Yields...

```javascript
;[['someKey', ['Some Value']]]
```

Take a good look at the above two examples and you should have a pretty good understanding of how the Object.entries function can transform your object for you to something iterable with standard array methods like forEach or map.

Out "in the wild" where might this come in useful? Let's look at an object we might get from some random API...

```javascript
const obj = {
  users: [
    { firstName: 'Tom', lastName: 'Jones', eyeColor: 'Hazel' },
    { firstName: 'Bill', lastName: 'Clinton', eyeColor: 'Blue' },
    { firstName: 'Ozzy', lastName: 'Osbourne', eyeColor: 'Green' },
  ],
  cars: [
    { car: 'Ferrari', color: 'red', hp: 505 },
    { car: 'Porche', color: 'gold', hp: 410 },
    { car: 'Maserati', color: 'silver', hp: 375 },
    { car: 'Corvette', color: 'blue', hp: 390 },
  ],
}
```

Run it through Object.entries and we have...

```javascript
const newObj = [
  [
    'users',
    [
      { firstName: 'George', lastName: 'Jetson', eyeColor: 'Hazel' },
      { firstName: 'Bill', lastName: 'Clinton', eyeColor: 'Blue' },
      { firstName: 'Ronald', lastName: 'Reagan', eyeColor: 'Green' },
      { firstName: 'Jimmy', lastName: 'Carter', eyeColor: 'Brown' },
      { firstName: 'Richard', lastName: 'Nixon', eyeColor: 'Brown' },
    ],
  ],
  [
    'cars',
    [
      { car: 'Ferrari', color: 'red', hp: 505 },
      { car: 'Porche', color: 'gold', hp: 410 },
      { car: 'Maserati', color: 'silver', hp: 375 },
      { car: 'Corvette', color: 'blue', hp: 390 },
    ],
  ],
]
```

What is convenient about the above structure is that we now have an array of arrays where
the first index of each array is the key value. So with the above we could do...

```javascript
// map over the part of the object that contains users...
const output = newObj[0].map(item => {
  return (
    <p>
      There are ${item[1].length} ${item[0]}.
    </p>
  )
})
```

Great! So we can now map over the array of sub-objects while also having direct access to the
key for that section `item[0]`. So of course, the above would output...

```
There are 5 users.
```

I'm sure you can already see much better use cases than the simple example above. Now you
are aware of what Object.entries does and I hope you find it useful at some point.

Thanks for reading!
