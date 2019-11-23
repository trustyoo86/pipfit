# pipfit

Utilities for functional programming in pipeline. It is pipeline for function with same parameters.
Many plugins what support functional programming has logic that next function have to use parameter prev function's return data.
It is functional programming logic commonly, but Sometimes, We need to use pipeline function with same paramters.
So, pipfit is not logic that use prev function's return data, and use same paramters all functions.

## Install

* use npm

```bash
npm i pipfit
```

## Usage

* [object](./packages/object)

```javascript
// insert paramter 'object' string (it is default value)
const pipe = require('pipfit')('object');
const fnA = (a) => ({ a });
const fnB = (a, b) => ({ b });
const fns = pipe(fnA, fnB);
const data = fns(1, 2);

console.log(data);
// { a: 1, b: 2 }
```

## Contribute

If you contribute for this plugin, fork this [repo](https://github.com/trustyoo86/pipfit), and Pull request.
Feel free for csontribute pipfit plugin, and development packages in pipfit.

## Contacts

* email: <a href="mailto:trustyoo86@gmail.com">trustyoo86@gmail.com</a>