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

SAY:

In movies and shows, many actors have Stunt Doubles. A stunt double is a cross between a body double and a stunt performer. The usually have a role when an actor needs to engage in a dangerous scene such as … (insert examples from people’s favorite movies)

GIVE DIRECTIONS TO STUDENTS:

With your partner, take 3 minutes to google an ‘action’ actor or movie you like, and find a picture of the actor(s) and their stunt double(s). Answer these questions…
- What do they have in common?
- What is different about their jobs?
- Why does the production company hire this double? How does it impact the actors job?
- When you watch a movie, it is usually obvious that a different human is acting a scene out? Does it change your movie-watching experience? Explain.


## Paired Exercise

### Setup

To get access to methods that create mocks and stubs, we'll need to install and require the `mocha` gem. A gem is a package of code that someone else wrote. We bring them in to projects to make our lives easier!

```bash
gem install mocha
```

Once that's set, create a `bob_ross` directory with `lib` and `test` sub-directories. Create a `bob_test.rb` file in your `test` directory with the following code:

```ruby
require 'minitest/autorun'
require 'minitest/pride'
require 'mocha/minitest'
require './lib/bob'

class BobTest < Minitest::Test
  def test_it_exists
    bob = Bob.new
    assert_instance_of Bob, bob
  end

  def test_it_starts_with_no_paints
    bob = Bob.new
    assert_equal [], bob.paints
  end
end
```

Note that we have required `mocha/minitest` at the top of the file.

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
