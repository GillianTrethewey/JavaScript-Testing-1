var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('the expected outcome of 5! is 120', () => {
      const expectedResult = 120;
      const inputNumber = 5;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });
    it('the expected outcome of 3! is 6', () => {
      const expectedResult = 6;
      const inputNumber = 3;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });
    it('the expected outcome of 0! is 1', () => {
      const expectedResult = 1;
      const inputNumber = 0;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });
  });
});