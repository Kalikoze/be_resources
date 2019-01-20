---
layout: page
title: How Testing Works
length: 60
tags: ruby, testing, tdd
---

## Learning Goals

* Define and demonstrate a testing cycle
* Use error messages to drive development
* Implement new assertion methods
* Identify best testing practices

## Vocabulary

* Testing
* Assertion
* TDD

## Warm Up

Assume that you have a `Person` and a `Dog` class.
Assume all dogs have owners.

* How might you represent the idea of a dog having an owner in code?
* Write an `initialize` method for `Dog`
* What do you need to put in a runner file to access both classes?
* Up to now, how have you identified if your programs were working correctly? What are the downsides to this approach?

# Part 1: How Testing Works (25 mins)

## File Structure (5 mins)

- Test files live in their own `test` directory
- Implementation code files live in a sibling `lib` directory
- Test files should reflect the class they're testing with `_test` appended to the file name, e.g. `test/name_of_class_test.rb`
- In your test, you'll now `require "./lib/name_of_class.rb"`
- Run your test files from the root of the project directory, e.g. `ruby test/name_of_class_test.rb`; running the test will invoke your program

```
.
├── lib
|   └── name_of_class.rb
└── test
    └── name_of_class_test.rb
```

## Minitest (5 mins)

* Minitest is a framework for automated testing
* If you haven't already, you may need to install it:

```
gem install minitest
```

* Require `minitest/autorun` - the easy and explicit way to run all your tests
* Require `minitest/pride` - vivid color explosion

## Minitest Test Suite (5 mins)

* The "Test Suite" is actually a class itself
* Convention is `class NameOfClassTest`
* Test class inherits from `Minitest::Test`, e.g. `class NameOfClassTest < Minitest::Test`

## Minitest Tests (5 mins)

* A Single "Test" is a method
*  `def test_something`
* **MUST start with `test_`**
* It's good practice to reference your method in the test name `test_method_name_does_what_I_want_it_to`

## Minitest Assertions (5 mins)

* A test should have at least one assertion (can have more)
* Assertion - verifies expected behavior against actual behavior
* expected first, then actual
* example: If we want to verify the `upcase` method works:

```ruby
assert_equal "HELLO WORLD", "hello world".upcase
```

## POM (5 mins)

# Part 2: Testing Demonstration (25 mins)

**Note to Students about Laptops**:

* Students should not be coding along
* Students should be taking notes
* All code written will be available for students to review

## Setup

* Make a new project directory
* Make `lib` and `test` folders

## StudentTest

* We want to test a `Student` class that doesn't exist yet.
* Make a `test/student_test.rb` file:

```ruby
require 'minitest/autorun'
require 'minitest/pride'

class StudentTest < Minitest::Test
end
```

## Test it Exists

```ruby
  def test_it_exists
    student = Student.new
    assert_instance_of Student, student
  end
```

* `assert_instance_of` - verifying that something is the type of object you expect
* First argument is a class, second is an instance of that class
* Run tests
* Thoroughly read errors & failures
* Write implementation code

```ruby
class Student

end
```

## Test is has a Name

```ruby
  def test_student_has_a_name
    student = Student.new("Penelope")
    assert_equal "Penelope", student.name
  end
```

```ruby
class Student
  attr_reader :name

  def initialize(name)
    @name = name
  end
end
```

* Will have to update `test_it_exists` to take an argument

## Turn & Talk

What do you think the following assertion methods do?

- `assert_instance_of`
- `assert_equal`
- `assert`
- `assert_nil`
- `refute`
- `refute_equal`

## Additional Test Intricacies

* Tests will overwrite previous tests with the same name; **give each test a new name**
* Each test is independent of the next; **don't depend on tests to run in order** of how they're written
  * Good practice to order tests by complexity
  * Good practice to group tests by related functionality
* Tests will generally return an `E` for error, `F` for failure & `.` for passing
* You can create a setup method

```ruby
class StudentTest < Minitest::Test
  attr_reader :student

  def setup
    @student = Student.new
  end
  ...
end
```

### Ensuring Dynamic Functionality

We should make sure that all of our methods can handle different cases, ensuring that our implementation code is dynamic, e.g.:

```ruby
# student_test.rb
require 'minitest'
require 'minitest/autorun'
require 'minitest/pride'

class StudentTest < Minitest::Test
  def test_it_exists
    student = Student.new
    assert_instance_of Student, student
  end

  def test_student_has_a_name
    student = Student.new("Penelope")
    assert_equal "Penelope", student.name
  end

  def test_student_can_have_a_different_name
    student = Student.new("Hermione")
    assert_equal "Hermione", student.name
  end
  # test it has a laptop
  # test it has cookies
end
```

### Testing Edge Cases

* Ensure that your implementation code can handle things we might not expect, e.g.:

```ruby
# student_test.rb
require 'minitest'
require 'minitest/autorun'
require 'minitest/pride'

class StudentTest < Minitest::Test
  def test_it_exists
    student = Student.new
    assert_instance_of Student, student
  end

  def test_student_has_a_name
    student = Student.new("Penelope")
    assert_equal "Penelope", student.name
  end

  def test_student_can_have_a_different_name
    student = Student.new("Hermione")
    assert_equal "Hermione", student.name
  end

  def test_student_cant_be_created_with_integer_name
    student = Student.new(13)
    assert_equal "Name not Provided", student.name
  end
  # test it has a laptop
  # test it has cookies
end
```


### Practice

Let's explore how our code breaks when we don't follow the Test Etiquette rules from above.


## Exercise: TDD Calculator

- Build a calculator class from scratch using TDD
- Start with whiteboarding and pseudocode
- Write pseudocode in the test file first for a few methods
- Your calculator should be able to handle the following methods:
  - .new
  - #total
  - #add
  - #clear
  - #subtract

## Checks for Understanding

* What 2 directories should we have within our project directory?
* `minitest` setup
  * What do you have to require in a test file?
  * What does your test class inherit from?
  * What is the syntax for a minitest test? What's the best name for a test?
  * Do tests need unique names? Should they be written in a particular order? Do they necessarily run in that order?
* Name 3 assertion methods you learned about today & describe their syntax.

## Resources
* Explore the minitest gem! [https://github.com/seattlerb/minitest](https://github.com/seattlerb/minitest)
* One solution to the [calculator challenge](https://github.com/JoshCheek/how-to-test) using tests
