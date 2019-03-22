---
title: "React"
author: "Henry S. Sjøen"
date: 2019-03-22T10:33:11+01:00
draft: true
description: ""
tags: ["React","Learning","notes","Getting Ready 4 OT"]
---

This is a part of the series "Henry is getting ready for Olavstoppen". You can find the other posts by following the tag "[Getting Ready 4 OT](/tags/getting-ready-4-ot/)".

React is, according to reactjs.org, *"A JavaScript library for building user interfaces."*

<!-- View is the same, you just change what's shown. -->

- [Creating our first Component](#creating-our-first-component)
- [Writing HTML with JSX](#writing-html-with-jsx)
- [Linking up your CSS-file](#linking-up-your-css-file)
- [Passing dynamic data with Props](#passing-dynamic-data-with-props)
- [Routing with React Router](#routing-with-react-router)


# Creating our first Component
Everything is a component.

```jsx
// src/index.js
import React from 'react';

class SomeComponent extends React.Component{
    render(){
        return <p>Hello!</p>
    }
}

```

Every component needs a ``render()`` method.

If we want this to actully render, we need to add some more code
```jsx
// src/index.js
import React from 'react';
import { render } from 'react-dom'; //Since we are building a web-app

class SomeComponent extends React.Component{
    render(){
        return <p>Hello!</p>
    }
}

render(<SomeComponent />,document.querySelector('#main'));
```

It's a good practice to put all components in seperate files. So...
Let's move our *component* into a folder called *components*. And name it as ``SomeComponent.js``.

```jsx
// src/components/SomeComponent.js
import React from 'react';

class SomeComponent extends React.Component{
    render(){
        return <p>Hello!</p>
    }

    export default SomeComponent;
}
```

Note: We need to import React in this file as well. Worry not; This wont make your application larger when buildt.
We also need to export our *component* so that other *components* can use it.

And we need to import it in our ``index.js`` file.
```jsx
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import SomeComponent from './components/SomeComponent'; // <- Remember to import it

render(<SomeComponent />,document.querySelector('#main'));
```

# Writing HTML with JSX
When returning html, you can only return one element. So you have to wrap siblings into a ``<React.Fragment>`` or a ``<div>``.
Comments need to look like this: ``{/* Comment */}``.
And the comment cannot be first (as a sibling)  in a return statement... Because then you would return just the comment. Even the comments need to be wrapped.


```jsx
// src/components/SomeComponent.js
import React from 'react';

class SomeComponent extends React.Component{
    render(){
        return (
            <React.Fragment>
                {/* Comment */}
                <p>Hello!</p>
            </React.Fragment>
        );
    }
    export default SomeComponent;
}
```
> **Disclaimer**: I hope this code works. Haven't checked it since this is mostly for my own learning.

# Linking up your CSS-file
To link your CSS file you just need to import it.

```jsx
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import SomeComponent from './components/SomeComponent'; 
import "./css/style.css"; // <- It's as simple as that!

render(<SomeComponent />,document.querySelector('#main'));
```

# Passing dynamic data with Props

Props is the way we get data into a component.

How do we access the data when passing it as an prop?
There are no preset props, so you can just make up your own. Like ``myRandomProp``.

```jsx
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import SomeComponent from './components/SomeComponent'; 
import "./css/style.css";

render(
    <SomeComponent myRandomProp="HELLO WORLD!"/>,
    document.querySelector('#main')
);
```

Props are kind of an object of data that is sent into a component.
You can also send other types of props, like *bools*:
``myBoolProp = {true}`` or *ints*:``myIntProp = {100}``.

# Routing with React Router

The routing is not baked into react, we have to use an external component. 
The two most popular ones are React Router and Next.js.

Let's use React Router for now.
So we make another component and call it ``Router.js`` in our components directory.

```jsx
// src/components/Router.js
import React from "react";
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={SomeComponent} />
            <Route exact path = "/store/:storeID" component={SomeOtherComponent} />
            <Route component={NotFoundComponent} />
        </Switch>
    </BrowserRouter>
)
export default Router;
```

```jsx
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import Router from "./components/Router"; // <- Import the router 
// import SomeComponent from './components/SomeComponent'; <- Remove this
import "./css/style.css";

render(
    <Router />,
    document.querySelector('#main')
);
```