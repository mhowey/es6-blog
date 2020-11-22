---
title: Accessibility - been a while!
date: '2020-11-17T22:40:32.169Z'
tags: 'accessibility, assistive technology, screen reader, semantic html, role'
---

## It has been a while!

2020 turned into a real shit-show, didn't it? The content production here on ES6.today has been less than extraordinary, I mean, my last post was in the end of February. I have since changed jobs and gotten used to this remote working full-time thing that a lot of us have experienced for the better part of 2020!

Thanks for stopping by after all this time, I hope I have written something useful to you! Read on...

## Web Accessibility

Yep - I'm going full-on web developer here - let's talk about accessibility and why it **IS** important to the applications we build and use.

"BORING! Everybody knows that handicapped people need special things to use the web. I'm glad that other web developer does it so they have something to use..."

WHOA! Not so fast buck-o!

## Your Morning

You wake up, bleary eyed as usual...slight headache. Your brain makes out the fuzzy numbers showing by the illuminated clock on your nightstand, 7:30 am, I think. Man that's blurry. Rub your eyes to clear the "sleepies" and you start to wonder if your eye is covered by a film that is making everything blurry. Unfortunately, no, your vision has been affected by an occlusion in the blood supply during the previous evening and night, your vision is damaged. You can't see like you did yesterday!

## Rude Awakening

Luckily, a scenario like that described above is unusual and infrequent, but they do happen. If something like this were to happen to you, you'd be really glad that you built a software product that YOU can now use with assistive technology!

The moral of the story here is that the work you do to make an application accessible is not just for some side-minority that should be an afterthought, but it should be a primary part of your development effort.

After all, web content is intended, by default, to be universally accessible to everyone!

## Legally Speaking

Of course, the aforementioned "human side" of things, is only one part of the story here. Not having an application that is accessible can also open you up to lawsuits. The American's With Disabilities Act (ADA) - see: <a href="https://www.ada.gov/pcatoolkit/ch5_toolkit.pdf" target="_blank">Website Accessibility Under Title II of the ADA</a>. So if just doing the right thing isn't good enough reason, maybe Johnny Law can convince you? I'm no lawyer, but it's definitely something to pay attention to!!

## The Quick Wins

As a web application developer there are some basic things we can do to dramatically improve the accessibility of our web applications - like making sure we use semantic HTML tags correctly and hierarchically (that's a tongue twister!) correct. So in other words, just paying attention to using things like h1, h2, and h3 tags in the correct order, with the h1 being the first header on the page an subsequently less important headers to use the h2/h3...tags.

Using other semantic tags like `<header>`, `<main>`, `<article>` or `<figure>` - for a few examples. Not only are these descriptive for assistive-technology such as screen-readers, but they are also less obtuse for the developer as an extra bonus. Instead of a `<div>` with some styles applied via maybe an ID of something like `<div id="appHeader">`. It's much cleaner to see a `<header>` - as it leaves less for interpretation as a `<header>` element has some specific defined expectations as to it's usual purpose and position in the application. When left to the individual developer you might end up with `<div id="head">` or maybe `<div id="appHead">`, or perhaps `<div id="header">` -- you get the idea here...things can get a bit, eh, inconsistent.

## What's Your Role

Learning how to properly use the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles" target="_blank">ARIA role attribute</a> is one specific step to writing a more accessible application.

For instance, imagine you're using a table for a card layout (ahhh! just like the old days...table-based layouts...).

**_If we want two columns, with a photo on the left and text on the right, it might look something like this..._**

```javascript
<table role="presentation">
  <thead></thead>
  <tbody>
    <tr>
      <td>
        <img src="https://via.placeholder.com/150" alt="Bob Newhart" />
      </td>
      <td>
        <h1>Bob Newhart</h1>
        <p>Bob is a lorem ipsum dolor sit amet...</p>
      </td>
    </tr>
  </tbody>
</table>
```

<i>Notice in the above code that the role of the table is set to "presentation" to indicate that this table is being used for layout and not to display "tabular data".</i>

## What is a &lt;table&gt;?

The table is semantically something used to **_display tabular data_**. Maybe it's a table of users and their statistics. Maybe it's a table of stocks and their price data. These are examples of **_"tabular data"_**.

## &lt;table&gt; for Layout?

_*PREFACE: If you just got here via Google or something, no, you should not use tables for layout...now with that being said...*_

In the early days of web development, we utilized tables not just to display data, but to layout out an HTML document. The primary reason was because other layout methods didn't really exist, or were unreliable across browsers.

So a three column table became a:

- left navigation box (row 1, column 1 cell)
- a main content area box (row 1, column 2 cell)
- right information bar box (row 1, column 3 cell)

...which was used layout skeleton to setup your web application inside...

**_Example of a table being used for layout..._**

<img src="https://imgur.com/dDJRKf5.png" alt="sample table based layout" />

So in this case, we don't want the assistive-technology to mistake this table for "tabular data", we want the assistive-technology to know that this table is purely presentational by assigning the role of "presentation" to it (as shown in the code snippet above).

## Modern Layout Techniques

**Some considerations when using some CSS layout directives...**

Of course, these days, it's pretty much **NEVER** necessary to use HTML tables for layout because we have great new CSS tools like **_FlexBox and Grid_** for layout. **_FlexBox and Grid_** containers are specifically intended for **_layout purposes_**, and are more typically how a web application is laid out today.

Because these new layout tools are so flexible, they allow the developer to actually move them visually into a position that is not indicated by the HTML markup that assistive-technology uses.

For example, let's say we have an unordered list like this...

```html
<ol>
  <li>Get Groceries</li>
  <li>Pickup Dry Cleaning</li>
  <li>Clean Garage</li>
</ol>
```

However, we want those elements in reverse order on our TODO list, so we simply apply some CSS to this to make it appear in the correct order on the screen...

```css
ol {
  display: flex;
  flex-direction: row-reverse;
}
```

The problem here becomes that the assistive-technology (i.e. screen-reader) sees an "ordered list" in the order of

<i>What the assistive-technology (i.e. screen-reader) will see...</i>

```javascript

1. Get Groceries
2. Pickup Dry Cleaning
3. Clean Garage

```

<i>What a user with a screen will see...</i>

```javascript
1. Clean Garage
2. Pickup Dry Cleaning
3. Get Groceries

```

So you can see, things are not "as intended" for the assistive-technology. It doesn't care much about the CSS that was applied to that element so it actually will provide the incorrect information to the user.

The use of "flex-direction" is only one of the potential accessibility downfalls you might run into with modern layout. As long as the developer is aware of these potential pitfalls, they are relatively easy to avoid and address. For example, CSS Grid has a property `order` that will have the same effect on content ordering between screen and assistive-technologies.

## Summary

There is so much more to learn and consider when making web applications accessible! I recommend you spend the time to become, at least partially educated, in accessible development best-practices. Here's a great place to start:

**_A great place to start looking for more information:_** <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">**Link to MDN web docs on Accessibility**</a> [<i>opens in new window</i>]

You can find some easy wins, such as those mentioned in this article that will improve the accessibility of your software substantially over just ignoring it, which is very likely what you are doing right now. (we hope not!)

The accessibility efforts we put into our applications are intended to make software that is universally usable, regardless of the assistive-technologies being applied to it!

Thanks for reading!
