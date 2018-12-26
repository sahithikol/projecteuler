/*
   https://projecteuler.net/problem=17
*/
var letterModule = (function() {
  // hashmap for the letters
  var numberMap = new Map();
  numberMap.set(1, "one");
  numberMap.set(2, "two");
  numberMap.set(3, "three");
  numberMap.set(4, "four");
  numberMap.set(5, "five");
  numberMap.set(6, "six");
  numberMap.set(7, "seven");
  numberMap.set(8, "eight");
  numberMap.set(9, "nine");
  numberMap.set(10, "ten");
  numberMap.set(11, "eleven");
  numberMap.set(12, "twelve");
  numberMap.set(13, "thirteen");
  numberMap.set(14, "fourteen");
  numberMap.set(15, "fifteen");
  numberMap.set(16, "sixteen");
  numberMap.set(17, "seventeen");
  numberMap.set(18, "eighteen");
  numberMap.set(19, "nineteen");
  numberMap.set(20, "twenty");
  numberMap.set(30, "thirty");
  numberMap.set(40, "forty");
  numberMap.set(50, "fifty");
  numberMap.set(60, "sixty");
  numberMap.set(70, "seventy");
  numberMap.set(80, "eighty");
  numberMap.set(90, "ninety");

  // helper utility for getting
  // lettercount below 20
  function getCountBelow20(index) {
    return numberMap.get(index).length;
  }

  // helper utility for determing
  // lettercount below 100
  function getCountBelow100(index) {
    var tens = Math.floor(index / 10);
    var remainder = index % 10;
    var tensUnit = tens > 0 ? tens * 10 : 0;
    if (remainder === 0) {
      return numberMap.get(tensUnit).length;
    }
    return numberMap.get(tensUnit).length + numberMap.get(remainder).length;
  }

  // helper utility for determining
  // letterCounts
  function getLetterCountForIndex(index) {
    if (index <= 20) {
      return getCountBelow20(index);
    } else if (index < 100) {
      return getCountBelow100(index);
    } else if (index < 1000) {
      var hundreds = Math.floor(index / 100);
      var remainder = index % 100;
      var hundredsUnitLen = "hundred".length;
      var andLen = "and".length;

      if (hundreds < 999) {
        var baseLength = getCountBelow20(hundreds) + hundredsUnitLen;
        if (remainder === 0) {
          return baseLength;
        } else {
          var remCount =
            remainder <= 20
              ? getCountBelow20(remainder)
              : getCountBelow100(remainder);
          return baseLength + andLen + remCount;
        }
      }
    } else {
      var thousands = Math.floor(index / 1000);
      return getCountBelow20(thousands) + "thousand".length;
    }
  }

  // computing sum of lettercounts in a range
  // looping over numbers to generate letter counts
  // using internal/utility methods internally
  function generateLetterCounts(range) {
    if (!range || range < 0 || isNaN(range)) {
      return 0;
    }

    let sum = 0;
    for (var index = 1; index <= range; index++) {
      sum += getLetterCountForIndex(index);
    }

    return sum;
  }
  return {
    generateLetterCounts
  };
})();
