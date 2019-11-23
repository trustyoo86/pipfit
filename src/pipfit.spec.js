'use strict';

const chai = require('chai');
chai.should();
const pipe = require('./index');

describe('[pipfit] test', () => {
  const aTest = a => ({ a });
  const bTest = a => ({ b: a * 2 });
  const pipeFn = pipe('object');
  const pipes = pipeFn(aTest, bTest);
  describe('[pipfit] object test', () => {
    const result = pipes(2);
    it('Object`s a must be 2', () => {
      result.a.should.equal(2);
    });

    it('Object`s b must be 4', () => {
      result.b.should.equal(4);
    });
  });
});