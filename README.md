# package-banner

> generate header/banner doc comment from package.json

## Installation

```sh
npm install package-banner
```

## Usage

This module exposes two functions: `build` and `min`, which simply pass package.json config
to a template string.

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
 * License: CC-BY-NC-ND-4.0
 */

require('package-banner').min(require('./path-to/package.json')); // =>
/*! package-banner v0.0.1 | © 2015 Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net) | CC-BY-NC-ND-4.0 */
```

This module is so simple I don't see any point in adding more features. If you want to
customize you're better off just copying or forking.
