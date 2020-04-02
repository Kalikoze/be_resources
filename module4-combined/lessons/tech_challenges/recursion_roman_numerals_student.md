---
title: Simplified Recursion Challenge, Student Prompt
layout: page
---

## javascript starter
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

function toRoman(num) {
  // your code goes here
}

console.log(toRoman(128));  // should return "CXXVIII"
console.log(toRoman(2000)); // should return "MM"
console.log(toRoman(2017)); // should return "MMXVII"
console.log(toRoman(1999)); // should return "MCMXCIX"
```

## ruby starter
```ruby
=begin
Write a recursive function that converts an integer into a string such that the number is represented in Roman Numerals in the most efficient way.
eg, the number 4 could be written as 'IIII' but it's more efficient to use 'IV' since that's a shorter string
Assume no number is greater than 4,000
Here are the Roman Numeral equivalents you'll need to know:
M=1000, CM=900, D=500, CD=400,
C=100, XC=90, L=50, XL=40,
X=10, IX=9, V=5, IV=4, I=1
=end

def to_roman(num)
  # your code goes here
end

puts to_roman(128)   # should return "CXXVIII"
puts to_roman(2000)  # should return "MM"
puts to_roman(2017)  # should return "MMXVII"
puts to_roman(1999)  # should return "MCMXCIX"
```
