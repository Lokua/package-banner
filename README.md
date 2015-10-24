# package-banner

> Generate a header/banner doc comment from your package.json

## Installation

```sh
npm install package-banner
```

## Usage

This module exposes two functions: `build` and `min`, which simply pass package.json config
to an ES6 template string.

```js
require('package-banner').build(require('./path-to/package.json')); // =>
/*!
 * package-banner
 * version 0.0.1 (built: 2015-10-24)
 *
 *   Generate a header/banner doc comment from package.json
 *
 * git: https://github.com/lokua/package-banner.git
 * Copyright © 2015, Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net)
 * License: MIT
 */

require('package-banner').min(require('./path-to/package.json')); // =>
/*! package-banner v0.0.1 | © 2015 Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net) | MIT */
```

That's it for now!

### License
[MIT](http://lokua.net/license-mit.html)
