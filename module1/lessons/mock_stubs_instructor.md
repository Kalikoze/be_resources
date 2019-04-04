---
layout: page
title: Mocks and Stubs
---

## Agenda
- Warm Up - 8 min
- Intro/Rationale - 4 min
- Paired Exercise - Intro 8 min, Mocks 8 min

POM
- Paired Exercise - Stubs 12 min
- Interview question - 4 min

## Instructor Prep

- Work through code samples

## Learning Goals

* Understand what mocking and stubbing is and why we would use it.

## Vocabulary

* Mock
* Stub

## Warmup

Have students discuss the two questions in pairs. 
Choose a student (possibly at random) to answer the first question.
Ask for volunteers for the second question. 

While students say what they already know about mocks/stubs, write some of those things on the board, and then use that brainstorming to give a definition of mocks and stubs at a very high level. 


## Paired Exercise

### Setup

Have students clone the [bob_ross](https://github.com/turingschool/bob_ross) repo. 

Show students the tests, and note that there are two that are not skipped. Have students run their test and use the errors to get a passing test for those first two tests. 

As a group, walk students through the basics of mocking with the third test. In order to mock, we must install the mocha gem:


```bash
gem install mocha
```

and then require 'mocha/minitest' at the top of our test file: 

```ruby
require 'minitest/autorun'
require 'minitest/pride'
require 'mocha/minitest'
require './lib/bob'
```

Since this third test is just testing that objects get shoveled into the hash, we only need mock these paint objects (instead of stubbing). 

**Pair Work:**

Work with your partner to make the first tests pass. **You should not create a Paint class at any point during this lesson**.

### Mocks

Let's imagine we wanted to test `Bob`'s `paints` method to see that it returns a collection of `Paint` instances. We might write a test like the following.

```ruby
def test_it_can_have_paint
  bob = Bob.new
  paint_1 = Paint.new("Alizarin Crimson")
  paint_2 = Paint.new("Van Dyke Brown")

  bob.add_paint(paint_1)
  bob.add_paint(paint_2)

  assert_equal [paint_1, paint_2], bob.paints
end
```

**Turn and Talk:**

What would we have to do to make this test pass?
_ANSWER: Write a Paint class_


**Pair Work:**

Update this test so that it uses Mocks instead of Paints. Make the test pass.

SOLUTION:

```ruby
def test_it_can_have_paint
  bob = Bob.new
  paint_1 = mock("Crimson")
  paint_2 = mock("Brown")

  bob.add_paint(paint_1)
  bob.add_paint(paint_2)

  assert_equal [paint_1, paint_2], bob.paints
end
```

### Stubs

Let's add another test:

```ruby
def test_it_can_return_colors
  bob = Bob.new
  paint_1 = mock("paint 1")
  paint_2 = mock("paint 2")
  bob.add_paint(paint_1)
  bob.add_paint(paint_2)

  assert_equal ["Alizarin Crimson", "Van Dyke Brown"], bob.paint_colors
end
```

**Pair Work:**

Update this test so that it stubs out the color method for the Mock objects. Make the test pass.

SOLUTION:
```ruby
def test_it_can_return_colors
  bob = Bob.new
  paint_1 = mock
  paint_1.stubs(:color).returns("Van Dyke Brown")
  paint_2 = mock
  paint_2.stubs(:color).returns("Alizarin Crimson")

  bob.add_paint(paint_1)
  bob.add_paint(paint_2)

  assert_equal ["Alizarin Crimson", "Van Dyke Brown"], bob.paint_colors
end
```

### Mock Expectations

Replace your existing `paint_colors` method with the following:

```ruby
def paint_colors
  ["Alizarin Crimson", "Van Dyke Brown"]
end
```

Run your test. What happens?
_ANSWER: Still passes!_

Change your `paint_colors` method to pass the test.

SOLUTION:
```ruby
def paint_colors
  @paints.map do |paint|
    paint.color
  end
end
```

**Pair Work:**

Add the following test. Update it to use mocks and stubs so that you can make it pass without creating the Paint class. Then make the test pass:

```ruby
  def test_it_can_total_paint_amount
    bob = Bob.new
    paint_1 = Paint.new("Alizarin Crimson", 42)
    paint_2 = Paint.new("Van Dyke Brown", 25)

    bob.add_paint(paint_1)
    bob.add_paint(paint_2)

    assert_equal 67, bob.total_paint_amount
  end
```

SOLUTION:
```ruby
def test_it_can_total_paint_amount
  bob = Bob.new
  paint_1 = mock
  paint_1.stubs(:color).returns("Crimson")
  paint_1.stubs(:amount).returns(42)

  paint_2 = mock
  paint_2.stubs(:color).returns("Brown")
  paint_2.stubs(:amount).returns(25)


  bob.add_paint(paint_1)
  bob.add_paint(paint_2)

  assert_equal 67, bob.total_paint_amount
end
```

### Interview Question

What are mocks and stubs? When have you used them?
