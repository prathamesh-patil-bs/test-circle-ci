const { expect } = require('chai');
const { square } = require('../index');


describe('SQUARE FUNCTION', () => {
  context('Testing square function', () => {
    it('should match the square of given value', (done) => {
      let val = square(5);
      expect(val).to.be.a('number');
      expect(val).equal(25);
      done();
    });
  });
});