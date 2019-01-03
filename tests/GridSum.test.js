var assert = require("assert");
var gridModule = require("../Solutions/GridSum");
describe("Tests for GridSums", function() {
  const errorMessage = "Not Valid Input";

  it("Testing for empty array", function() {
    const gridSum = gridModule.caluculateGridSum({ input: [] });
    assert.equal(gridSum, errorMessage);
  });

  it("Testing for 1*1 size array", function() {
    const gridSum = gridModule.caluculateGridSum({ input: [[1]] });
    assert.equal(gridSum, 1);
  });

  it("Testing for input where row and column are of different length", function() {
    const matrix = [
      [131, 673, 234],
      [201, 96, 342],
      [746, 422, 111],
      [537, 699, 497],
      [805, 732, 52]
    ];
    const gridSum = gridModule.caluculateGridSum({ input: matrix });
    assert.equal(gridSum, errorMessage);
  });

  it("Testing GridSum for the input matrix where each element is negative", function() {
    const matrix = [
      [-1, -1, -1, -1, -2],
      [-1, -1, -1, -1, -3],
      [-1, -3, -4, -1, -1],
      [-1, -2, -1, -1, -1],
      [-1, -1, -1, -1, -1]
    ];
    const gridSum = gridModule.caluculateGridSum({ input: matrix });
    assert.equal(gridSum, -14);
  });

  it("Testing GridSum for the valid input matrix of size 5*5", function() {
    const matrix = [
      [131, 673, 234, 103, 18],
      [201, 96, 342, 965, 150],
      [630, 803, 746, 422, 111],
      [537, 699, 497, 121, 956],
      [805, 732, 524, 37, 331]
    ];
    const gridSum = gridModule.caluculateGridSum({ input: matrix });
    assert.equal(gridSum, 2427);
  });

  it("Testing GridSum for 80*80 matrix", function() {
    const gridSum = gridModule.caluculateGridSum({ testFor80by80: true });
    assert.equal(gridSum, 427337);
  });

  it("Testing for nonarray inputs", function() {
    const gridSum = gridModule.caluculateGridSum({ input: -1 });

    assert.equal(gridSum, errorMessage);
  });

  it("Testing for array inputs where each item is not an array ", function() {
    const matrix = [[131, 673], 201];
    const gridSum = gridModule.caluculateGridSum({ input: matrix });

    assert.equal(gridSum, errorMessage);
  });

  it("Testing for array inputs where each item in the array is not a valid number ", function() {
    const matrix = [["131", "673"], ["201", "hello"]];
    const gridSum = gridModule.caluculateGridSum({ input: matrix });

    assert.equal(gridSum, errorMessage);
  });
});
