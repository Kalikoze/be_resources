---
layout: page
title: Intermediate Enumerables
length: 90
tags: enumerables, max, min, max_by, min_by, sort_by, all?, any?, one?, none?
---

## Learning Goals

* Understand Block Return Values
* Be able to use `max`, `max_by,` their opposites, and `sort_by` appropriately.

## Slides

Available [here](../slides/intermediate_enumerables)

## Vocabulary
* Enumerable
* Iterate/Iteration
* Return Value
* Block

# Part One: Digging into map, find, find_all (25 mins)

## Warm Up (10 mins)

Given the array `kardashians = ["Khloe", "Kim", "Kris", "Kourtney"]`, use `find`, `find_all`, or `map` to:

1. Find all the Kardashians with 3 or more letters
1. Find `"Kris"`
1. Create a new array with all the names upcased

## Exploration: Block Return Values (15 mins)

* Explore how the enumerables we know so far work under the hood
* Work through this section with a partner
* Before you run each code snippet, try to predict the output
* 5 mins to work through examples
* 5 mins CFU
* 5 mins review CFU

#### Check for Understanding

Discuss the following questions with a partner and answer in your notebooks:

1. How does `map` know what value to map to?
1. How does `find_all` know which elements will be returned?
1. How do you think `find` knows which element to return?
1. Read the descriptions for `map`, `find`, and `find_all` in the [Ruby Docs Enumerables Page](https://ruby-doc.org/core-2.4.0/Enumerable.html). How are these descriptions similar/different to your answers to the first 3 questions?

## min / max

* What would we do if we wanted to get the largest thing out of an array?
* Let's think about how we would do that with .each.

```ruby
nums = [1,3,9,2,5]
greatest = nums.first
nums.each do |num|
  if num > greatest
    greatest = num
  end
end

puts greatest
```

* We can use max to do that work for us
* Use `min` to get the smallest thing

## Comparing Strings

* Letters have an intrinsic value
  * `"a".ord`
* In pry, demonstrate `"a" > "b"`
  * Does not compare length
    * ex: `"aaa" > "b"`
  * Goes character by character
    * ex: `"aaz" > "aay"`
* We can use this with `max`/`min`
  * `["Brian", "Mike", "Amy"].min`

## min_by / max_by

* We can find the max String:

```ruby
names = ["Khloe", "Kim", "Kris", "Kourtney"]
greatest = names.first
names.each do |name|
  if name > greatest
    greatest = name
  end
end

puts greatest
```

* Like we saw before, `>` will compare alphabetically
* What if we want to compare by length?
  * Change comparison to include `.length`
* We are overriding how we are comparing the elements in the array
* We can do this even easier with `max_by`:

```ruby
names = ["Khloe", "Kim", "Kris", "Kourtney"]
greatest = names.max_by do |name|
  name.length
end
```

* `max_by` takes whatever the last line of code executed in the block is and uses that to find the max element
* Very handy with our own objects:

```ruby
  class Person
    attr_reader :name, :age

    def initialize(name, age)
      @name = name
      @age  = age
    end
  end

  people = []
  people << Person.new("Sofia", 4)
  people << Person.new("Scarlett", 9)
  people << Person.new("Stella", 8)

  people.max_by do |person|
    person.age
  end
```

* If you call `people.max`, Ruby will tell you it doesn't know how to compare two `Person` objects.

## sort

* Just like `max/min`, except it returns an array of all objects sorted

```ruby
[2,4,3,1].sort
=> [1,2,3,4]
```

* For Strings, it will sort alphabetically:

```ruby
["Brian", "Mike", "Amy"].sort
=> ["Amy", "Brian", "Mike"]
```

## sort_by

* Just like with `max` and `min`, we might want to override how ruby will compare our objects
* For instance, if we want to sort Strings based on their length:

```ruby
names = ["Khloe", "Kim", "Kris", "Kourtney"]
sorted = names.sort_by do |name|
  name.length
end
```

## all?

* ending with a `?` usually means boolean return value
* Expects boolean block return value
* Returns true if all iterations return true
* Example:

```ruby
[1,1,1,1].all? do |num|
  num == 1
end
```

```ruby
["dog","cat","pig","hippopotamus"].all? do |word|
  word.length == 3
end
```

* Turn and Talk: make an educated guess about what `any?`, `none?`, and `one?` do/return?

## Practice

* Work through practice examples with a partner

## Wrap Up

* Name all the enumerables you know. What do they each return?

## For Homework:
In the enums-exercises, complete the following:

* find_using_max_by_test.rb
* sort_by_test.rb
* all_pattern_test.rb
* all_test.rb
* any_pattern_test.rb
* any_test.rb
* none_pattern_test.rb
* none_test.rb
* one_pattern_test.rb
* one_test.rb
