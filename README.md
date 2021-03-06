[![Build Status](https://secure.travis-ci.org/aleafs/fasttrim.png?branch=master)](http://travis-ci.org/aleafs/fasttrim)

## About

`fasttrim` is a module to trim ascii string, faster than `String.trim`:

* v0.1.0 (move `if` to `for` conditions)

```bash
$ node -v
v0.6.13
$ node benchmark/fasttrim.js
 fasttrim() x 12,969,029 ops/sec ±0.75% (69 runs sampled)
String.trim() x 5,654,115 ops/sec ±0.66% (68 runs sampled)
Fastest is  fasttrim()
```

* v0.0.2 (use substring instead of slice)

```bash
$ node -v
v0.6.13
$ node benchmark/fasttrim.js
 fasttrim() x 12,670,083 ops/sec ±0.47% (69 runs sampled)
String.trim() x 5,770,520 ops/sec ±0.33% (69 runs sampled)
Fastest is  fasttrim()
```

* v0.0.1

```bash
$ node -v
v0.6.13
$ node benchmark/fasttrim.js
 fasttrim() x 11,679,437 ops/sec ±0.30% (69 runs sampled)
String.trim() x 5,747,307 ops/sec ±0.35% (53 runs sampled)
  TJ's trim() x 1,780,430 ops/sec ±2.19% (66 runs sampled)
Fastest is  fasttrim()

```

## Install

```bash
$ npm install fasttrim
```

## Usage

```javascript

var trim = require('fasttrim').trim;

trim(' I am so glad to hear about you. ');

```

## License

(The MIT License)

Copyright (c) 2012 aleafs and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
