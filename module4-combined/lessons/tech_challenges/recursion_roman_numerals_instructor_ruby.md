---
title: Recursion Challenge (roman numerals), Instructor Walkthrough in Ruby
layout: page
---


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

# We need a way to map the roman numerals to their corresponding integers
# let's use a hash to do this
ROMAN_NUMERALS = {
  "M" => 1000,
  "CM" => 900,
  "D" => 500,
  "CD" => 400,
  "C" => 100,
  "XC" => 90,
  "L" => 50,
  "XL" => 40,
  "X" => 10,
  "IX" => 9,
  "V" => 5,
  "IV" => 4,
  "I" => 1
}
# Next we will define the recursive case
def to_roman(num)
  # iterate through all of the values or integers in the hash
  # for each integer check to see if the num is larger than or equal to that integer

  # if the num is larger than the integer,
    # return that corresponding roman numeral
    # we also want to call the to_roman function again, this time passing in the num minus the integer

  # else if the number is not larger than the integer,
    # continue iterating through the integers until you get to an integer that is smaller than the num
    # once you do repeat the if statement above i.e. return that corresponding
    # roman numeral and call the to_roman function again passing in the num minus the integer
    ROMAN_NUMERALS.values.each do |int|
      if num >= int
        return ROMAN_NUMERALS.key(int) + to_roman(num - int)
      end
    end
  end
end

# Now that we have a recursive case, we need to define the base case to stop calling our function recursively
# Because the smallest roman numeral is 1 we cannot evaluate any number less than 1
# if the value of num is less than 1 return an empty string
def to_roman(num)
  if num < 1
    return ''
  else
    ROMAN_NUMERALS.values.map do |int|
      if num >= int
        return ROMAN_NUMERALS.key(int) + to_roman(num - int)
      end
    end
  end
end

puts to_roman(128)   # should return "CXXVIII"
puts to_roman(2000)  # should return "MM"
puts to_roman(2017)  # should return "MMXVII"
puts to_roman(1999)  # should return "MCMXCIX"
```
