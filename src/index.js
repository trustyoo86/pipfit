'use strict';

const object = require('@pipfit/object');

const pipes = {
  object: (...fns) => {
    return object(...fns);
  },
};

function pipfit(type = 'object') {
  const pipeFn = pipes[type];

  if (!pipeFn || typeof pipeFn !== 'function') {
    throw new Error('[pipfit Error]: Type is not valid for pipfit.');
  }

  return (...fns) => {
    return pipeFn(...fns);
  };
}

module.exports = pipfit;