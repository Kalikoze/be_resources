## Learning Goals
* Understand Block Return Values
* Be able to use `max`, `max_by,` their opposites, `sort_by`, and `all?` appropriately.

## Vocabulary
* Enumerable
* Iterate/Iteration
* Return Value
* Block

## Prep
- Use Week 2 CFU to determine who will be your 4-5 "table leaders". These people should have used best-use enums on the first two questions (.find_all and .min_by). Before the lesson (1-ish day) let these students know/ask if they are ok with it, and let them know which enum they will facillitate so they can spend some time preparing (no more than 20 minutes).
- Classroom setup - have a designated table (or study room/vault if nearby) for each station.
- Print out notes sheet for stations.

## Warm Up: Block Return Values

How do the enumerables we know so far work under the hood? Work through this section with a partner to explore this question. Before you run each code snippet, try to predict the output.

Students will complete this work with the provided worksheet - https://docs.google.com/document/d/1cYYAhiAep0Ry_4fPZxnqCVr8i5nCKYIJw0BU59vOcNg/edit

## Stations 

Station Setup: 4-5 stations should be set up for: 
  1. min/max
  2. max_by
  3. /min_by
  4. sort and sort_by
  5. (optional) all? and any?
  
Groups should be created:
  - Table leaders (4-5)
  - Groups of 4-5 to equally fill stations (might want to group all struggling students together, then instructor should closely follow that group for additional support).
  
Assign each group a starting station and determine a direction for rotation. Each group will have 10 minutes at each station. 

The station should start with the table leader explaining the purpose of this enum, and showing some examples of how it can be used. They should talk about the return value. Then, students should practice using that enum with the provided exercises. Make sure to provide the table leader with a key. 
  
## min / max
& Comparing Strings



## min_by / max_by



## sort & sort_by



## all? & any?



#### Now you try:

```ruby
class Person
  attr_reader :name,
              :age

  def initialize(name, age)
    @name = name
    @age  = age
  end
end

kardashians = []

kardashians << Person.new("Kourtney", 39)
kardashians << Person.new("kim", 37)
kardashians << Person.new("Kris", 62)
kardashians << Person.new("Khloe", 33)
```

Write code to:

1. Get the youngest member
2. Get the person with the longest name
3. Sort them by age
4. Check if all their names start with a `k` (case insensitive)
5. Check if any of them are younger than 18
6. Sort them by the last letter of their name, descending (Should be "Kourtney", "Kris", "Kim", "Khloe")
7. Check if exactly one Person is neither "Kris" nor younger than 38 (Should be true)

## Wrap Up

* Name all the enumerables you know. What do they each return?

### For Homework:
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
