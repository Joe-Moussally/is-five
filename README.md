# is-five [![NPM version](https://img.shields.io/npm/v/is-five.svg?style=flat)](https://www.npmjs.com/package/is-five) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-five.svg?style=flat)](https://npmjs.org/package/is-five) [![NPM total downloads](https://img.shields.io/npm/dt/is-five.svg?style=flat)](https://npmjs.org/package/is-five)

> Check if a value is five (5), efficient and fast, minimal and lightweight.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-five
```

## Usage

```js
var isFive = require("is-five");

isFive(5);
//=> true
isFive("5");
//=> true
isFive(4);
//=> false
isFive("4");
//=> false
isFive(0);
//=> false
isFive(null);
//=> false
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**                                   |
| ----------- | ------------------------------------------------- |
| 1           | [Joe-Moussally](https://github.com/Joe-Moussally) |

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Joe Moussally**

- [github/Joe-Moussally](https://github.com/Joe-Moussally)

### License

Copyright © 2025, [Joe Moussally](https://github.com/Joe-Moussally).
Released under the [MIT License](LICENSE).
