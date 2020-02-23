---
title: TypeScript 101
date: '2020-02-21T22:40:32.169Z'
---

## TypeScript??

### But this is a blog about JavaScript...

I'm relatively sure if you're reading this article, you're probably already aware of TypeScript. But for those who may have not heard about it yet, here's a quick explanation: JavaScript is valid TypeScript. Now it makes even less sense, amiright?

## It's a "Superset" of JavaScript.

If A is contained in B, B is a superset of A. So because JavaScript is contained in TypeScript, TypeScript is a superset of JavaScript. What makes it a superset is that, as I mentioned above, JavaScript is valid TypeScript, but TypeScript contains numerous features not found directly in JavaScript.

## So What Can Run TypeScript?

The TypeScript Compiler knows what to do with TypeScript. In fact, when TypeScript has been run through the TSC (TypeScript Compiler), it spits out a vanilla JavaScript file that has been stripped of all the extra "stuff" that was added with TypeScript.

Open up your terminal and install the TypeScript Compiler:

```bash
npm install -g typescript
```

This will give you the command line utility "tsc", which of course, stands for TypeScript Compiler. Now, let's create a directory and put some code in it...go to your terminal in a working directory and type:

```bash
mkdir typescript-starter && cd typescript-starter
```

This command will create the directory and change your directory to the newly created one. One last little piece of setup before we start writing some code - we need to initialize the directory with a package.json file so that we can install and save dependencies. To do this we need to run...

```bash
npm init -y
```

The `-y` flag just lets the initialization run without asking us any questions. If you want to see what the questions are, just omit the `-y` flag. Using the flag is essentially the equivalent of just hitting enter to accept the default values that are asked during initialization. Defaults are fine for this example.

## Okay! Let's code...

We're all setup now and your directory should have something like the following when you run the `ls -la` command...

```bash
-rw-r--r--  1 username  staff   200B Feb 14 17:01 package.json
```

Great! Now we can go ahead and install a dependency. We're going to make an API call with a package called axios, a wrapper function to make http requests from the browser or node. It's promise-based, so it's "thenable" - I'll explain what this means in just a minute.

So to install axios as a project dependency, we'll run the following in our terminal...

```bash
npm install axios
```

Axios is a pretty small package, so it should install pretty quickly.

When that is done, take a look at what is now in the directory by running `ls -la` in your terminal again. It should look sorta like this...

```bash
drwxr-xr-x   5 username  staff   160 Feb 14 17:28 .
drwxr-xr-x  23 username  staff   736 Feb 14 17:27 ..
drwxr-xr-x   6 username  staff   192 Feb 14 17:28 node_modules
-rw-r--r--   1 username  staff  1197 Feb 14 17:28 package-lock.json
-rw-r--r--   1 username  staff   266 Feb 14 17:28 package.json
```

Aha! There are some new files in there now. These are pretty standard with `node_modules` being where packages are actually installed when we run the `npm install` commands, package-lock.json and package.json are essentially the same thing, the main difference is that package-lock.json stores an exact, versioned dependency tree rather than using starred versioning like package.json. This allows us to guarantee dependencies for other developers and production releases.

Ok, now let's create our first TypeScript file by creating a new file in the directory caleld `index.ts` -- TAKE NOTE OF THE .ts extension instead of .js. Inside this file type out the following code:

```javascript
import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/posts/1/'

axios.get(url).then(response => {
  console.log(response.data)
})
```

Notice: <strong>there is absolutely NOTHING that is TypeScript-specific</strong> in the above code. We'll add some of that in a minute. In fact, you could copy that code into a JavaScript file and run it as is, other than chaning the import to use the require syntax (if you're running in node) `var axios = require('axios');`. To see the compilation step in action, let's transform (i.e. compile or transpile) the `index.ts` file into `index.js` so we can run it with node.

Back over in the terminal let's type:

```bash
tsc index.ts
```

Now if you do a directory listing, you'll see a new JavaScript file there named `index.js`. This was generated when we ran `tsc index.ts`. Open it and look at it and you can see that it's really just JavaScript. It may look slightly different than the JavaScript that we wrote in the ts file, but trust me, it's the same code.

We can now execute this newly compiled JavaScript file to see the log output by running it with node...

```bash
node index.js
```

The output should look something like the following...

```bash
{ userId: 1,
  id: 1,
  title:
   'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
   'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' }
```

This is pretty much the raw data that is coming from our web service.

## No Optimization...

This is probably a good time to point out that TypeScript compilation does not add any performance optimizations, unlike many typed and compiled programming languages. The real advantage to using typescript is realtime bug detection while coding!

## Realtime Bug Detection

We're going to add a little bit to the code that we already wrote and compiled to show how bug detection might work when working with TypeScript.

To demonstrate how TypeScript can help us, let's break out the console log into it's own function and pass in the paramters it needs to display our message...

```javascript
import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/posts/1/'

axios.get(url).then(response => {
  const post = response.data
  // we'll call the new function (below) here...
  writePost = (post.title, post.body, post.id)
})

const writePost = (id, title, body) => {
  console.log(`
    id: ${id}
    title: ${title}
    body: ${body}
  `)
}
```

If you didn't notice, I intentionally made the mistake of passing in the paramters to the new writePost function in the incorrect order, not matching the function's signature.

To make running our code a little easier, and only one step, we are going to install a package called "ts-node"...

```bash
sudo npm install ts-node -g
```

On windows you probably won't want "sudo" before the command, but likely on Mac you will need it. So now, instead of the two steps we were using before of `tsc index.ts` then followed by `node index.js`, with `ts-node` these two commands are combined and all we have to do to compile and run our TypeScript file is:

```bash
ts-node index.ts
```

...with the code as it currently is, we'll get the output of:

```bash
id: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    title: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto
    body: 1
```

We can tell right away that this incorrect as we are getting a body of '1', which clearly is not the body text we were looking for. In addition, the id is now a bunch of text and the title looks like it might be the body of the post.

Since we know we were making this mistake on purpose, this is actually the expected behavior. But let's imagine we just somehow managed to feed the wrong parameters into the "writePost" function.

Now I realize, you'd most likely catch this error when you tested out the code you just wrote, but wouldn't it be really nice to know about this error before having to execute the code?

## Let's Use Some Types

An interface is a handy TypeScript tool that allows us to more discreetly define the expected inputs for a function.

We'll modify our "writePost" function definition to specify what types of data we're expecting it to receive as parameters...

```javascript
const writePost = (id: number, title: string, body: string) => {
  console.log(`
    id: ${id}
    title: ${title}
    body: ${body}
  `)
}
```

However, doing this will not help much, because the TypeScript compiler doesn't know about the Post type. This is what an interface is for, it helps to describe the shape and types in an object such as Post. Next we'll add an interface to our code so TypeScript knows a lot more about what we're actually trying to do here...

## Add and Interface Definition

Above the axios call, add the code you see below staring with `interface`. This describes exactly what parameters and types the Post type is expecting, a number and two strings.

```typescript
import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/posts/1/'

interface Post {
  id: number
  title: string
  body: string
}

axios.get(url).then(response => {
  // this is destructuring the body, title and id from the response
  // you'll also notice at the end of the line is `as Post`
  const { body, title, id } = response.data as Post

  writePost(title, body, id)
})

const writePost = (id: number, title: string, body: string) => {
  console.log(`
    id: ${id}
    title: ${title}
    body: ${body}
  `)
}
```

Now when you look at your code, you should see a red underline under the the title being passed to writePost in the "then" of the axios call. If you hover your mouse over the red underline, a message such as...

```bash
const title: string

Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
```

Awesome!! Now our code is telling us right here that the argument being passed into the `id` parameter is indeed not a number and instead is a string. Because we added the interface definition, the code has enough introspection to determine that there is already a bug, and we haven't even compiled our code yet!

Of course, if for some reason you didn't see the underline and tried to compile this code anyway, you'd receive a message like this during compile time:

```bash
ts-node index.ts

/usr/local/lib/node_modules/ts-node/src/index.ts:421
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
index.ts:14:13 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

14   writePost(title, body, id);
```

...and of course, it tells us what mistake we made as well.

## Summary

This just starts to scratch the surface of the helpful features that TypeScript brings to the table, but I really think this introduction shows why TypeScript can help you write better code. Sure, there is a bit more sugar that you need to spread around in your code (as opposed to just using ES6+ JavaScript...), but it seems like TypeScript could help reduce the number of realtime coding errors that you experience as a dev.

Just as unit and integration testing can provide a level of confidence in making changes to code and provide a piece of mind when deploying the code, TypeScript can provide some of these benefits as well!

Thanks for reading! Hope you learned something.
