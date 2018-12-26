/*
Problem  - 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
var primeModule = (function nthPrime() {
  //in a range of numbers checking if a number is prime
  // if so pushig to the array and returning the index of the
  // 10001st prime number
  function getNthPrimeNumber(index) {
    // checking for negative cases and undefined index cases
    if (!index) {
      return -1;
    } else if (index === 0) {
      return 0;
    }

    const primeNumbersArr = [];

    let number = 2;

    while (1) {
      if (isPrime(number)) {
        primeNumbersArr.push(number);
      }
      if (primeNumbersArr.length < index) {
        number++;
      } else {
        break;
      }
    }

    return primeNumbersArr[index - 1];
  }

  // private and utility method to check if it is prime
  function isPrime(number) {
    if (!number || isNaN(number)) {
      return false;
    }
    // using sieves of eratosthenes
    // for checking if a number is prime
    // checking till the square root of a number
    const sqrtNum = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= sqrtNum; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return {
    getNthPrimeNumber
  };
})();
