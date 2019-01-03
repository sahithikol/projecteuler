var assert = require("assert");

var primeModule = require("../Solutions/NthPrime");
describe("Tests for NthPrime", function() {
  const error = "Not Valid Input";
  it("Testing for 5th Prime number", function() {
    const nthPrime = primeModule.getNthPrimeNumber(5);
    assert.equal(nthPrime, 11);
  });

  it("Testing for 10001 Prime umber", function() {
    const nthPrime = primeModule.getNthPrimeNumber(10001);
    assert.equal(nthPrime, 104743);
  });

  it("Testing for negative input numbers", function() {
    const nthPrime = primeModule.getNthPrimeNumber(-1);
    assert.equal(nthPrime, error);
  });

  it("Testing if input is string", function() {
    const nthPrime = primeModule.getNthPrimeNumber("abc");
    assert.equal(nthPrime, error);
  });

  it("Testing for empty input", function() {
    const nthPrime = primeModule.getNthPrimeNumber();
    assert.equal(nthPrime, error);
  });

  it("Testing for array input", function() {
    const nthPrime = primeModule.getNthPrimeNumber([]);
    assert.equal(nthPrime, error);
  });

  it("Testing for decimal input", function() {
    const nthPrime = primeModule.getNthPrimeNumber(0.9);
    assert.equal(nthPrime, error);
  });
});
