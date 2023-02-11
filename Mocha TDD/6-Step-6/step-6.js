// index.js

const Calculate = {
  sum(inputArray) {
    return inputArray.reduce((a, c) => a + c, 0);
  },
};

module.exports = Calculate;

//index_test.js
var assert = require("assert");
var Calculate = require("../index.js");
describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      const expectedResult = 6;
      const inputArray = [1, 2, 3];
      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });

    it("returns the sum of a four item list", () => {
      const expectedResult = 22;
      const inputArray = [4, 5, 6, 7];
      const result = Calculate.sum(inputArray);
      assert.strictEqual(result, expectedResult);
    });
  });
});
