var assert = require("assert");

var letterModule = require("../Solutions/LetterCounts");

describe("Tests for LetterCountsTest", function() {
  const errorMessage = "Not Valid Input";
  const rangeError = "Input range is greater than 1000";
  it("Testing for Valid Range input 1000", function() {
    const letterCount = letterModule.generateLetterCounts(1000);
    assert.equal(letterCount, 21124);
  });

  it("Testing for Valid Range input greater than 1000", function() {
    const letterCount = letterModule.generateLetterCounts(100000);

    assert.equal(letterCount, rangeError);
  });

  it("Testing for negative input numbers", function() {
    const letterCount = letterModule.generateLetterCounts(-1);

    assert.equal(letterCount, errorMessage);
  });

  it("Testing if input is string", function() {
    const letterCount = letterModule.generateLetterCounts("abc");
    assert.equal(letterCount, errorMessage);
  });

  it("Testing for empty input", function() {
    const letterCount = letterModule.generateLetterCounts();
    assert.equal(letterCount, errorMessage);
  });

  it("Testing for array input", function() {
    const letterCount = letterModule.generateLetterCounts("['av']");
    assert.equal(letterCount, errorMessage);
  });
});
