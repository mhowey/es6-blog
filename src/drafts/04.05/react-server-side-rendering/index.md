---
title: React Server Side Rendering with Node and Express
date: '2019-04-05T22:40:32.169Z'
---

## Server Side Rendering a React Application

I have used "server side rendering" techniques previously using SSR-like framworks such as GatsbyJS and Next.js previous. I never really gave a ton of thought as to what was going on inside the "black box" of Gatsby or Next.js. The purpose of this article is to document some of the basics that really helped me understand the techniques that can be used to produce statically rendered server side React applications.

## First, What is SSR or Server Side Rendering?

In the normal flow of a modern web application, the javascript running in the browser does a majority of the work in setting up the user interface before it actually appears and is usable by the user. This usually includes things like assembling components from markup (like JSX for instance), putting together an HTML page to carry the stuff in, and displaying it in the browser. For most applications, this happens so quickly that it seems that it would be somewhat imperceivable to the user. However, nanoseconds _DO_ count toward the user experience!

In comes "server side rendering". Now, instead of sending the framework to the browser, so that it can build the website in the browser's memory and show it to the user, we will pre-process the react application bundle on the server using NodeJS by processing it using Webpack and Babel to generate a static bundle that can be executed by a NodeJS Express server and served to the client. The advantage here is that all of the "heavy lifting" is pretty much done and the browser is receiving an optimized bundle to serve up to the user - hopefully in a faster manner!

## A Very Simple SSR Example

To get started, we're not going to use a create-react-app or anything like that, we're just going to simply...

<ul>
  <li>Configure Webpack to run babel through our code and output to a build directory</li>
  <li>Then spin-up an Express server to serv the generated bundle to the browser</li>
</ul>

I'm keeping it super-simple to start to hopefully help you understand things from the ground-up, with no "magic" involved. We'll see a setup that has some of the pieces of a standard React application, but we'll be adding in the server side rendering aspect of things to demonstrate the basics.

## Enough, Let's Look at Some Code!

The first thing we'll do is setup 
