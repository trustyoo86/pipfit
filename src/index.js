'use strict';

/**
 * Pipe function with same args object
 * @param {Function} prevFn function for pre
 * @param {Function} nextFn function for next
 * @return {Object} assemble objects
 */
const objPipe = (prevFn, nextFn) => (...args) => Object.assign(prevFn(...args), nextFn(...args));


cosnt pipe

/**
 * assemble object with function and same parameters
 * @param {...Function} fns function list
 * @return {Object} Objects data after excute function
 */
const pipeFnsObject = (...fns) => fns.reduce(pipeFn);

function pipe(type) {
  return (...fns) => {
    return 
  };
}