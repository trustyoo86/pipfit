'use strict';

const chai = require('chai');
chai.should();
const { pipe } = require('./pvc');

decribe('[pvc-pipe test]', () => {
  describe('[pvc.js] test', () => {
    const aTest = a => ({ a });
    const bTest = a => ({ b: a * 2 });

    describe('[pipe] Two functions test', () => {
      const multiFn = pipe(aTest, bTest);
      const result = multiFn(2);

      it('Object`s a must be 2', () => {
        result.a.should.equal(2);
      });

      it('Object`s b must be 4', () => {
        result.b.should.equal(4);
      });
    });

    describe('[pipe] Triple functions test', () => {
      const cTest = a => ({ c: a * 3 });
      const tripleFn = pipe(aTest, bTest, cTest);
      const result = tripleFn(3);

      it('Object`s a must be 2', () => {
        result.a.should.equal(3);
      });

      it('Object`s b must be 4', () => {
        result.b.should.equal(6);
      });

      it('Object`s c must be 9', () => {
        result.c.should.equal(9);
      });
    });
  });
});