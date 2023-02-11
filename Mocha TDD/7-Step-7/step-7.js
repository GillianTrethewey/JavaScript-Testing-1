// index.js

const Calculate = {
  sum(inputArray) {
    if (inputArray.length === 0) {
      return 0;
    }
    return inputArray.reduce((sum, value) => {
      return sum + value;
    });
  },
};

module.exports = Calculate;

//index_test.js
const assert = require("assert");
const Calculate = require("../index.js");

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
      const inputArray = [4, 6, 5, 7];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });
    it("returns zero for an empty array", () => {
      const expectedResult = 0;
      const inputArray = [];
      const result = Calculate.sum(inputArray);
      assert.strictEqual(result, expectedResult);
    });
  });
});
