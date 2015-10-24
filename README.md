# package-header

> Generate a header/banner doc comment from your package.json

## Installation

```sh
npm install package-header
```

## Usage

This module exposes two functions: `build` and `min`, which simply pass package.json config
to an ES6 template string.

```js
require('package-header').build(require('./path-to/package.json')); // =>
/*!
 * package-header
 * version 1.0.0 (built: 2015-10-24)
 *
 *   Generate a header/header doc comment from package.json
 *
 * git: https://github.com/lokua/package-header.git
 * Copyright © 2015, Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net)
 * License: MIT
 */

require('package-header').min(require('./path-to/package.json')); // =>
/*! package-header v1.0.0 | © 2015 Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net) | MIT */
```

That's it for now!

### License
[MIT](http://lokua.net/license-mit.html)
