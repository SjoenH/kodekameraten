---
title: "About_this_site"
author: "Henry S. Sjøen"
date: 2019-03-21T16:12:40+01:00
draft: true
description: ""
---

Hello, my name is Henry and this is my blog.
I just wanted to share with you how this site is put together.

---
Table of contents:

- [Hugo, a static page generator](#hugo-a-static-page-generator)
- [Getting started with Hugo](#getting-started-with-hugo)
  - [Installing](#installing)

---
# Hugo, a static page generator
This website is powerd by [Hugo](http://gohugo.io/), which is a static page generator.

> Q: What is a static page generator? - You might ask. 
> 
> A: Well It's about having Dynamic vs Static content. *I think...*

A lot of web-services is putting together what you see when you ask for it. This enables a site to display different content according to a state.

But a **static** web-page is just delivering what already is on the server, and not building anything new on the spot. 

> *Of course you can go around this by making the dynamic stuff happen on the client side, like a [pwa](https://developers.google.com/web/progressive-web-apps/) often do... but thats not relevant for this discussion.*

This makes hosting cheap and simple. As you don't need any server spinning up a VM or anything for delivering your webpage. In fact, this site is hosted for free on GitHub and I'm only paying for the domain.

# Getting started with Hugo
## Installing
Install Hugo. If you are using a Mac, it's as easy as writing:
```bash
brew install hugo
```