---
title: "Simple Web Servers"
date: 2020-04-10T17:08:16+02:00
draft: false
---

A quick comparison of some simple web server frameworks and languages.

## Python & Flask
```python
from flask import Flask
app= Flask(__name__)
import random

@app.route('/')
def hello_world():
    return "Hello, World!"

@app.route('/roll_dice')
def roll_dice():
    return str(random.randint(1,6))
```

## Ruby & Sinatra
```ruby
require 'sinatra'
    get '/' do
	"Hello world"
    end

    get '/roll_dice' do
	    rand(1..6).to_s
    end
```

## Javascript & Express
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send('Hello World!'))

app.get('/roll_dice',(req,res)=>res.send(`${Math.floor(Math.random()*6)+1}`))

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))
```


