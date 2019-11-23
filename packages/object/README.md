# `@pipfit/object`

Pipeline function utilities for object

## Usage

- npm install

```bash
npm i @pipfit/object
```

```javascript
const pipe = require('@pipfit/object');

function a() {
  return {
    a: 1,
  };
}

function b() {
  return {
    b: 2,
  };
}

function c() {
  return {
    c: 3,
  };
}

const objPipe = pipe(a, b, c);
const obj = objPipe();
/**
 * {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 * }
 */
```
