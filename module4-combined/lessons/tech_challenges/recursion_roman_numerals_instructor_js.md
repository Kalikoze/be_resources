---
title: Recursion Challenge (roman numerals), Instructor Walkthrough in JS
layout: page
---

```js
/*
Write a recursive function that converts an integer into a string such that the number is represented in Roman Numerals in the most efficient way.
eg, the number 4 could be written as 'IIII' but it's more efficient to use 'IV' since that's a shorter string
Assume no number is greater than 4,000
Here are the Roman Numeral equivalents you'll need to know:
M=1000, CM=900, D=500, CD=400,
C=100, XC=90, L=50, XL=40,
X=10, IX=9, V=5, IV=4, I=1
*/

// We need a way to map the roman numerals to their corresponding integers
// let's use an object to do this
const romanNumerals = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
}

// Next we will define the recursive case
function toRoman(num) {
  // iterate through all of the keys or integers in the object
  // for each integer check to see if the num is larger than or equal to that integer
  //
  // if the num is larger than the integer,
  //   return that corresponding roman numeral
  //   we also want to call the toRoman function again, this time passing in the num minus the integer
  //
  // else if the number is not larger than the integer,
  //   continue iterating through the integers until you get to an integer that is smaller than the num
  //   once you do repeat the if statement above i.e. return that corresponding
  //   roman numeral and call the toRoman function again passing in the num minus the integer
  for (const int of Object.keys(romanNumerals).reverse()) {
    if (num >= int) {
      return result.concat(romanNumerals[int] + toRoman(num - int));
    }
  };
}

// Now that we have a recursive case, we need to define the base case to stop calling our function recursively
// Because the smallest roman numeral is 1 we cannot evaluate any number less than 1
// if the value of num is less than 1 return an empty string
const romanNumerals = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
}

function toRoman(num) {
  if (num < 1) {
    return '';
  }

  for (const int of Object.keys(romanNumerals).reverse()) {
    if (num >= int) {
      return romanNumerals[int] + toRoman(num - int);
    }
  };
}

console.log(toRoman(1))
console.log(toRoman(128))   // should return "CXXVIII"
console.log(toRoman(2000))  // should return "MM"
console.log(toRoman(2017))  // should return "MMXVII"
console.log(toRoman(1999))  //should return "MCMXCIX"
```
