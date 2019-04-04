---
title: Using Leaflet with GatsbyJS
date: '2018-12-19T22:40:32.169Z'
---

## GatsbyJS and Leaflet

What the heck is Gatsby and why would I ever want to use it with Leaflet. If you don't know what GatsbyJS is yet, you should probably start at <a href="https://www.gatsbyjs.org/" target="_blank">build apps and websites with React<i class="external alternate icon"></i></a>, to find out more about GatsbyJS.

##Gatsby TL;DR Overview

Gatsby is a "semi-static" website generator build on top of React and Webpack, among other technologies. To put it short, it produces "blazingly fast websites and apps" by delivering the code using as many static assets as possible, while using a variety of performance optimization techniques out of the box. GatsbyJS is capable of delivering an application with a virtually "perfect" Lighthouse score, which to the user means -- GREAT performance!

So that's why you might choose GatsbyJS to build an app. Now go to your command line and type:
<strong> 

```
gatsby new gatsby-leaflet
```
</strong>

Of course, the above command is only going to work if you have the <a href="https://www.npmjs.com/package/gatsby-cli" target="_blank">Gatsby CLI installed on your system<i class="external alternate icon"></i></a>. If you don't already have it, you're definitely going to want it in the near future, so save yourself the headaches later, and just install it now.

## What is Leaflet?

Leaflet is an open-source JavaScript library for mobile-friendly interactive maps. It's relatively lightweight coming in under 40k, that will help you make brilliant map integrations...

<div class='todo'>[img here of Leaflet map]</div>

## Using the 'gatsby-plugin-react-leaflet'

Yes, there is a React library for Leaflet called <a href="https://react-leaflet.js.org/" target="_blank">react-leaflet<i class="external alternate icon"></i></a>, and in a standard "create-react-app" this is probably where we would start. To streamline integration with Gatsby, we'll use the already available <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-leaflet/" target="_blank">gatsby-plugin-react-leaflet<i class="external alternate icon"></i></a>. We can install the packages we need inside our project folder that we created (if you were following along above, it was 'gatsby-leaflet').

## Install Some Packages We'll Need...
We're going to be using, and thus need to install...
<ul>
  <li><a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-leaflet/" target="_blank">gatsby-plugin-react-leaflet<i class="external alternate icon"></i></a></li>
  <li><a href="https://react-leaflet.js.org/" target="_blank">react-leaflet<i class="external alternate icon"></i></a></li>
  <li><a href="https://leafletjs.com/" target="_blank">leaflet.js<i class="external alternate icon"></i></a></li>
</ul>

<strong>Luckily</strong> ... unlike the old days of going to each of the above links independently, and downloading some zip file into our project, we can quickly install exactly what we need in our project folder using <a href="https://www.npmjs.com/" target="_blank">Node Package Manager<i class="external alternate icon"></i></a> (aka "npm"), by typing the following in our terminal...
<strong>

```text
npm i --save gatsby-plugin-react-leaflet react-leaflet leaflet
```
</strong>

Once those packages finish installing, we need just a little more configuration to set things up, then we can get on with the fun part...<span class="is-danger">making some sweet looking maps!</span>

## Add Plugins to Gatsby

To configure Gatsby correctly, you'll want to open up  <code class="language-text">gatsby-config.js</code> in your editor and 