---
title: Organizing Styled Components
date: '2019-04-06T22:40:32.169Z'
---

## My Assumptions

If you are reading this article, I'm assuming you have some experience with styled-components in a ReactJS context. In this post I'll present to you a way to organize your style-components into relevant reusable libraries.

## Styled Component Organization?

I recently worked on a project where the styled-components were just pasted at the top of every javascript component file. It made the files really long and difficult to fully parse at first glance. By the time you found the actual component that the file was originally intended for, you had already scrolled through what feels like pages and pages of a Sass file. But it wasn't it was just styled-components accumulating at the top of the file. This feels wrong to me in that the purpose of almost every styled component is to simply add some styling properties to a particular block of application content.

## So First, Let's Examine the Problem...

In any React-based environment, component files usually look about the same. Import React and other dependencies at the top followed by a functional component or a class-based component that is exported by default. React component files can get pretty big and messy in situations where components haven't been decomposed enough. But on top of that, if decomposition includes moving the styling load over to styled components, I argue that they shouldn't remain in the main component file.

In fact, I think they should be moved to a separate file and built as a re-useable library that can be easily imported to various parts of your React application.

The most simple react components look something like this...

```javascript
import React from 'react'

const MyComponent = () => {
  return <div>This is MyComponent</div>
}

export default MyComponent
```

Of course in the above example, the markup is so simple that the separate return statement is unnecessary, but that's a discussion for a different entry. So now, let's imagine we want to add styled-components to the project and start using that for our styling...

```javascript
npm install styled-components --save
```

With that command, we've added styled-components to our project and saved it as a dependency in our Package.json file.

```javascript
import React from 'react'
import styled from 'styled-components'

const MyComponentWrap = styled.div`
  max-width: 800px;
  padding: 20px;
  border: 2px solid lightgray;
`

const MyComponent = () => {
  return <MyComponentWrap>This is MyComponent</MyComponentWrap>
}

export default MyComponent
```

Ok, that's not too bad. We created a new constant above the component that is actually a full-fledged component. In fact, it's just a div like we had there before, with the addition of some styling. So you're probably thinking that I'm going to suggest that you externalize each of these components into their own files and import them individually as I need them. Sure, that would work, but we could really generate a lot of files that contain just a couple pieces of styling, so that's not the approach I'm going to take here. I'm going to attempt to turn this concept into re-usable styled-component libraries.

## Reusable Styled-Component Library

So, if you look at what we did above in a browser, it's basically just putting a "section" or "card" around some text. As I proposed earlier, let's externalize the styled component to a file more appropriately named. So now things will start looking more like this...

```javascript
import React from 'react'
import { Section } from '../components/styled/Lib'

const MyComponent = () => {
  return <Section>This is a section</Section>
}

export default MyComponent
```

Wait, what's that 2nd import now? It's not styled-components anymore, it's now part of a more re-usable library as you can see when we examine the contents of the new '../components/styled/Lib' import. We are only importing the part of the **Lib.js** library that we are creating.

Let's look at **Lib.js...**

```javascript
import styled from 'styled-components';

export const Section = styled.div `
    max-width: 800px;
    padding: 20px;
    border: 2px solid lightgray;
  `,
};
```

By exporting each constant from this module separately, we can import them independently as well. Each exported constant from this module is another styled-component that can be imported independently...

So now, when importing from this file, we could do something like the following...

```javascript
import { Section } from '../components/styled/Lib'
```

So for sake of demonstration, let's imagine that we have created some sort of custom layout library for a specific client using this method, and we've extended the library to include specific other UI components which are meant to just be re-usable pieces of code for the UI's consistency in look and feel.

Using the above scheme, we can now do the following...

```javascript
import { Section, Card, Photo, Content } from '../components/styled/Lib'
```

So you can see we are now pulling in the **Section, Card, Photo and Content** styled-components out of the **Lib.js file**.

So to see exactly what I mean, let's add the **Card, Content, Section,** and **Photo** styled-components to the **Lib.js file**...

```javascript
import styled from 'styled-components'

export const Card = styled.div`
  padding: 10px;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`

export const Content = styled.div`
  padding: 10px;
  font-family: arial, sans-serif;
  line-height: 30px;
`

export const Photo = styled.div`
  opacity: 0.5;
  align-self: flex-start;
  margin: 25px;
  min-width: 150px;
  max-width: 300px;
  height: 150px;
  padding: 20px;
  border: 2px solid purple;
  background-color: lightblue;
  font-family: courier, serif;
  border-radius: 10px;
  text-align: center;
`

export const Section = styled.div`
  max-width: 800px;
  padding: 20px;
`

export const Title = styled.h1`
  color: purple;
  font-size: 1.5rem;
`
```

We should discuss the above code a little to make sure we're on the same page. The main idea is that Lib.js is now a file that exports 5 styled-components. Right now, since it is just the beginnings of our library, we'll just keep it all in this one "Lib.js" file as it is right now.

Later on, we may decide to split the styled components into some categorization system by file, allowing you to make entire files have a default export that can export all methods from a library all together without separating out all of the individual pieces by using named imports. Food for future thought.

## What Does the Output Look Like?

So you understand what is going to end up in your final page code that is loaded by the browser, let's examine the results of doing what we've done so far...

Here are the out div containers for the same styled-component iterated over 4 times...you should initially take notice that they all have the same class names, which are very unique to those four elements.

Take a look **"Lib\_\_Section-sc-1r785co-3 fpUEKh"**...

<img src="https://imgur.com/6lsPPAk.png" />

And in case you were wondering, all of the sub-classes are named the same over
the four instances of the component as you can see in the illustration below...

<img src="https://imgur.com/hubVtdF.png" />

So that gives us the knowledge that these components are using very specific class names that are not going to be influenced by other parts of the application. In fact, the prefix "Lib" is actually the filename. So this is fantastic - knowing this, we now have a way to namespace our components just by organizing them into intentionally named files.

Awesome. So styled-components gives us encapsulated styles that are unique. This helps us write css without needing to worry as much about CSS "Leakage" and overriding. Another great feature of styled-components is the ability to modify features based on a passed in property. Let's explore this by creating a **small library of buttons** with slightly different styles.

## Using Props in Styled-Components

Imagine I have the following JSX in a file...

```jsx
<Button submit>Submit Form</Button>
<Button cancel>Cancel</Button>
```

Without seeing the CSS, what would you expect the output of these buttons to be? Maybe a red button and a green button, or something like that? This is how we can theme our components by just extending the definition using properties like in the above example.

## How To Utilize Props in Styled Components?

So let's think about our base button. It's usually a boring gray box with rounded corners - so as to not stray too far from community conventions we'll go with that...

```js
/components/styled/Buttons.js
```

is going to be a new file with the following contents (for now)...

**Buttons.js...**

```javascript
import styled from 'styled-components';

export const Button = styled.button`
  background: lightgray;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: white;
    background: darkgray;
  }
```

So knowing what we know know, how would we go about creating the following three buttons?

<img src="https://imgur.com/KBePaVD.png" />

I hope **you weren't thinking...**

```javascript
ButtonCancel, ButtonSubmit, etc....??? // Not this right?
```

Why not? Because we already have a button, and those three buttons are just like that Button in everyway but a couple of colors. So there must be a better way to modify the base button for re-use in multiple use cases, and well, there is...

## What if I Show You this JSX?

```jsx
<Card>
  <Button>Base Button</Button>
  <Button submit>Submit Button</Button>
  <Button cancel>Cancel Button</Button>
</Card>
```

## OH! I see now...

Right, two of the Button instances above have a prop passed in. This prop is a boolean, a true/false flag. So where does the logic for this true/false switch live?

In our **Buttons.js styled-components** file we **add a code block** with logic **for each of the props** that we are expecting...

```javascript
// Note: this is put below the base Button styles...

  // logic for the submit prop
  ${props =>
    props.submit &&
    css`
      background-color: lightgreen;
      color: darkgreen;
      :hover {
        color: lightgreen;
        background: darkgreen;
      }
    `}

  // logic for the cancel prop
  ${props =>
    props.cancel &&
    css`
      background-color: pink;
      color: red;
      :hover {
        background-color: red;
        color: pink;
      }
    `}
` // <-- Don't forget the closing tick for the styled call!
```

The above code blocks will override the base styles defined above in the main Button styled component. So if we were to write in our JSX...

```jsx
<Button cancel>Cancel Button</Button>
```

We would end up with a red cancel button because css for "props.cancel" would be applied to the Button based on the logic in the code block you saw previously.

Here's another example to help you understand what happens here. Let's assume we wrote some JSX that looks like this...

```jsx
<Button cancel submit>
  Cancel Button
</Button>
```

That makes no sense, and I hope you just wouldn't do that, but what's interesting here, is that based on the above logic, we end up with a cancel button (Red themed). It's not because it's the first prop, it's because the logic for both of these props ends up returning true, so both blocks of code append their styles to the styled component.

So remember, we had...

```javascript
  ${props =>
      props.submit &&
      css`
    ...

  ${props =>
    props.cancel &&
    css`
    ...
```

So as you can see, the above statements are executed in order, so the final output will override the previous. Sometimes this is intentional, but in this somewhat unrealistic use-case, it was not.

## Using Two Props at the Same Time

But what if we want to be able to have these buttons without rounded corners also? How might we go about doing this using the above method? What's great about styled-components is that it's javascript, so we can use the props to populate just the value of a specific css property.

Let's see how this super-power might look in our code. Remember the top of our **Button.js** file? It looks like this...

```javascript
import styled from 'styled-components'

export const Button = styled.button`
  background: lightgray;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: white;
    background: darkgray;
  }
`
```

Notice the property `border-radius:5px;` ?? This is what makes our buttons rounded or not. So let's use props to indicate when we want a 'square' button...

```javascript
border-radius: ${(props) => (
  props.square && css ? `0` : `7px`
)};
```

I only made that a multi-line expression to make it slightly easier to see what's going on. If you look at what's going on there, you'll see that it's simply the border-radius: property name from our styled-component, just as it was written when it had the hard-coded value of '5px'. All we really did here was replace the value of this property with the output of our ternary expression that is setting the border radius to either 0 or 7px.

What if we want to be able to control the "roundedness" of the button corners and not necessarily just have them 'on' or 'off'? Well, let's refactor things in our **Buttons.js** file...

```javascript
import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: #d3d3d3;
  font-size: 1.1rem;
  margin: 10px;
  padding: 0.5rem;
  border-radius: ${(props) => props.rounded}px;
  outline: none;
  :hover {
    cursor: pointer;
    color: white;
    background: #778899;
  }

  ${(props) => ....
```

You see, we simply take the passed-in prop value and return it to the value while appending the measurement of 'px' to the value. So if we pass in like so...

```javascript
<Button rounded={15}>My Button</Button>
```

...that's going to show up in the props of that styled component. What if it's not there? What happens with our existing code as it is?? Luckily, nothing horrible, but literally just nothing. So let's say we now pass in a prop of rounded, but don't make it equal to any value. How it is right now, that prop will come through as a 'true' boolean because it is present. There will be no value attached to it. So if we refactor things a little bit more...

**From this...** Where we are 'assuming' the value will be there...

```javascript
border-radius: ${(props) => props.rounded}px;
```

**To this...** Where we set a default value or the value that was passed in...

```javascript
border-radius: ${(props) =>
  typeof props.rounded === 'number' ? props.rounded.toString() + 'px' : '5px'};
```

Ok, now we've put some more smarts into the design. I would make the bold assumption that if the person coding put the word 'rounded' in as a prop, but did not feed it a numeric value, that they probably just want a rounded button that uses whatever the "default" roundness is. This is how I would hope it would work if I was trying it for the first time as well!

Of course in the above case, the '5px' as the default value is hard-coded into things. To decouple the component logic, let's figure out how we might utilize a "theme" configuration of some sort. Let's start relatively simple by getting the default value for rounded and the colors for the 'submit' button extracted out.

Our new theme configuration file `styled.theme.js` can live right in the `components/styled/` folder as that is where our styled component libraries are going to exist as well. You can call it anything you want to call it, but just remember that when you go to import it to use.

**styled.theme.js**...looks like this:

```javascript
const styleConfig = {
  buttons: {
    roundedDefault: 10,
    submitDarkColor: 'darkgreen',
    submitLightColor: 'lightgreen',
    cancelDarkColor: 'red',
    cancelLightColor: 'pink',
  },
}

This will let us also modify
]
export default styleConfig
```

...and now look through the contents of **Buttons.js**...

```javascript
import styled, { css } from 'styled-components'
import styledConfig from './styled.theme'

// destructure the values we need from styledConfig.buttons object
let {
  submitDarkColor,
  submitLightColor,
  cancelDarkColor,
  cancelLightColor,
  roundedDefault,
} = styledConfig.buttons

export const Button = styled.button`
  background: #d3d3d3;
  font-size: 1.1rem;
  margin: 10px;
  padding: 0.5rem;
  border-radius: ${props =>
    typeof props.rounded == 'number'
      ? props.rounded + 'px'
      : roundedDefault + 'px'};
  outline: none;
  :hover {
    cursor: pointer;
    color: white;
    background: #778899;
  }

  ${props =>
    props.submit &&
    css`
      background-color: ${submitLightColor};
      color: ${submitDarkColor};
      :hover {
        color: ${submitLightColor};
        background: ${submitDarkColor};
      }
    `}

  ${props =>
    props.cancel &&
    css`
      background-color: ${cancelLightColor};
      color: ${cancelDarkColor};
      :hover {
        background-color: ${cancelDarkColor};
        color: ${cancelLightColor};
      }
    `}
`
```

Notice how pretty much everything except the default case for Button now have values that are defined in our styled.theme.js file? Pretty cool, right? Now everything in the param modified instances of the Button component are being defined in the styled.theme.js file. Do you see the power here? We aren't just setting up a reusable library, but we'll be able to theme it anyway we wish by simply creating a new styled.theme.js file with different values.

## Let's Recap What We Did Here

So let's recap what we coverd in this article because frankly, it feels like a long one.

<ul>
<li>We have seen that styled-components need to be organized so they can easily be shared, searched and generally reused</li>
<li>We created a Lib.js file to contain a selection of styled-components</li>
<li>We saw how you can pull out just the styled components you need for any given file by using the curly-brace destructuring syntax</li>
<li>We looked at what the markup generated by styled-components looks like to have some familiarity as to what's going on 'under the covers'</li>
<li>We looked at the most basic example of how props can be used in a styled-component</li>
<li>We then explored further by creating a theme configuration file and paramaterizing all of the style values to implement the theme.</li>
</ul>

## Congratulations!

Congratulations, by following the above steps you have already created a better way to reuse and theme your React styled-components. You should have the knowledge you need now to go implement something similar inside your React application using styled-components! I'm glad you took the time to read this article and I truly hope it helped you get a better handle on some of the ways you can integrate styled-components into your application. Best of luck!
