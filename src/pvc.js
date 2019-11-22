'use strict';

/**
 * Pipe function with same args object
 * @param {Function} prevFn function for pre
 * @param {Function} nextFn function for next
 * @return {Object} assemble objects
 */
const pipeFn = (prevFn, nextFn) => (...args) => Object.assign(prevFn(...args), nextFn(...args));

/**
 * assemble object with function and same parameters
 * @param {...Function} fns function list
 * @return {Object} Objects data after excute function
 */
exports.pipe = const pipe = (...fns) => fns.reduce(pipeFn);