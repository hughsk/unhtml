# unhtml #

Turn HTML-escaped characters and tags back into plain text.

## Installation ##

``` bash
npm install unhtml
```

## Usage ##

`require('unhtml')(string)`

``` javascript
var unhtml = require('unhtml')

unhtml('<p>Hello &amp; World &#169;</p>') === "Hello & World ©"
```
