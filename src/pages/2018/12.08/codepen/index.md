---
title: React & Bootstrap Grid
date: '2018-12-08T22:40:32.169Z'
---

<iframe height='425' scrolling='no' title='React + Twitter Bootstrap Responsive Grid Example' src='//codepen.io/matthowey/embed/WLeBXX/?height=425&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/matthowey/pen/WLeBXX/'>React + Twitter Bootstrap Responsive Grid Example</a> by Matthew Howey (<a href='https://codepen.io/matthowey'>@matthowey</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<img src='https://i.imgur.com/NfUZCb7.png' />

## Twitter Bootstrap Grid

The codepen shown above is an example of using Twitter Bootstrap in the context of React. If you wish to see the responsive nature of the columns, you can either use your browser's developer tools and click Mobile/Responsive view icon in the upper left corner or by using the key combination of command+shift+m (ie. "mobile view"). This will allow you to easily change the width of the screen - see this screen shot...

<img src='https://imgur.com/OQkYXea.png' />

## The HTML

This part is really boring...

<img src="https://i.imgur.com/ne56LDK.png" />

Yep, that's it - this is a react app, so most of it is JSX, not HTML. If you're not familiar with JSX, it's an XML-like javascript code that closely resembles HTML. This isn't really the topic for this blog entry, so you'll have to go to the React docs to read up on it if you want more information. The above HTML is simply the root element that React shoves all of it's stuff into. So not really a lot to see here. Note that I did put an inline style on the main App div to keep the whole app from squishing down below 300 pixels width.

## The React JavaScript

<iframe height='600' scrolling='no' title='React + Twitter Bootstrap Responsive Grid Example' src='//codepen.io/matthowey/embed/WLeBXX/?height=600&theme-id=dark&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/matthowey/pen/WLeBXX/'>React + Twitter Bootstrap Responsive Grid Example</a> by Matthew Howey (<a href='https://codepen.io/matthowey'>@matthowey</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There we go. The above javascript has several distinct parts that are a lot easier to visualize when the code is in a collapsed state...

<img src='https://i.imgur.com/ZKtW1ed.png' width="630" />

In the above code you'll see <strong>three components</strong>...

- App
- GridComponent
- PageOverview

You'll also notice <strong>two variables with a bunch of text</strong>...

- const infoText
- const hipsumText

### infoText

The first const variable is the text of the first column that explains what is going on in the grid layout. 

### hipsumText

The second variable "hispumText" is some Hiptser-ipsum with a shot of latin from <a href="https://hipsum.co/" target="_blank">hipsum.co</a>, my favorite provider of random lorem ipsum filler text.

The only other piece of the javascript code that I haven't mentioned yet is the call to the <strong>ReactDOM.render method</strong> that takes the React App component and puts it into the DOM. This is referred to as "bootstrapping the application" -- not to be confused with the Bootstrap CSS library that we're using for the styling.

## The Components

### App component

This is the main component that wraps the whole app. This is the "uber parent" that contains all of the other components in this example.

### GridComponent

The GridComponent is a wrapper around the Bootstrap grid markup that renders the columns (or stacked boxes if your width is under 576px - this is what you'll see on a mobile device). The component itself does not handle this part of the rendering - it's a combination of the JSX markup with the CSS styling which contains breakpoint definitions to change specific styles at specific pixel widths. Here's the CSS code that does this...

<iframe height='450' scrolling='no' title='React + Twitter Bootstrap Responsive Grid Example' src='//codepen.io/matthowey/embed/WLeBXX/?height=450&theme-id=dark&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/matthowey/pen/WLeBXX/'>React + Twitter Bootstrap Responsive Grid Example</a> by Matthew Howey (<a href='https://codepen.io/matthowey'>@matthowey</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The comments in the CSS file are pretty self-explanatory. Specifically look for the <strong>@media</strong> directives and their corresponding <strong>min-width</strong> and <strong>max-width</strong> properties.

### to be continued...
