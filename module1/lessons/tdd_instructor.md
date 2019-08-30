---
layout: page
title: TDD
---

# Test Driven Development

## Instructor Prep
- Print out one copy per pair of this gist for the Warm Up: https://gist.github.com/ameseee/611d2055b6cfeaf552218f47d123ed00

## Learning Goals

* Understand that TDD is about asking questions and making decisions
* Understand the role of TDD in streamlining the problem-solving and design process
* Be able to name and explain the differences between unit and integration tests

## Vocabulary

* Unit Tests
* Integration Tests
* Feature Tests
* Acceptance Tests

## Warm Up

Have students follow directions in student resource with printout of HouseTest. The purpose is to illustrate that one can pull so much information about code by JUST looking at the tests!

### Overview

Teacher Talk Time

It can be especially difficult to get started on a new project or even a new iteration of a project. The essence of testing is asking questions and coming up with difficult answers.

* Testing compels you to make hard decisions early, and up front.
* This is scary because you are making decisions in a context you don't understand.
* Testing (especially in the context of TDD) is a discipline tool -- forces you to a) be **specific** about what you are trying to do and b) stay **focused** on that objective
--> Connect this last point to the warm up - because the HouseTest was so specific, it was easy for us outsiders to read.

### Why do we write tests?

Teacher Talk Time

### Okay, sure, but why do we write tests first?

Teacher Talk Time

- compels you to make hard decisions early
- scary because you are making decisions in a context you don’t understand
- a discipline tool – forces you to a) be specific, and b) stay focused 

But why test?

- refactor with confidence
- build new features and have regression testing
- provides a roadmap for others to follow

But why FIRST?

- breaks down the problem early
- don't have to back-fill testing where we might miss details
- what we want is all we need -- don't build more than you need

REALLY reinforce that it's OK that it feels hard to think about writing tests first. A lot of students say "my brain just doesn't work that way" - well, most don't, we have to train ourselves to do it that way. Once it's a habit, they will see their brain does work that way and it will benefit them greatly.

### Types of Tests
Quick overview - focus on unit/integration.

Programmer-centric:

- Unit Test - tests one component in isolation.
- Integration Test - tests multiple interdependencies or coordinating components.

Customer-centric:

- Feature Test - a single feature as experienced by a user.
- Acceptance Test - a collection of user functionalities that delivers business value.


In Module 1, on the other hand, we will rely much more heavily on **Unit** and **Integration** tests -- and it's very
important to have a good mix of both!

### Hierarchy of Tests

## Implementation

### Partner Practice

Students should implement exists and attribute tests for a car as outlined in the lesson. Make sure to restate that they should not be writing any code to pass these tests, yet.

Review tests as a class, then have students write the code to pass the tests.

## Command vs. Query Methods

Teacher-led: reinforce that this is a common misconception we see with testing so added this is the lesson.

Methods either do one of two things for us:
- Give us information about an object
- Change something about an object

When testing, it's really important to keep in mind what a method should be doing, to ensure we test it well. Stepping out of TDD just for a minute so we can illustrate this, let's look at this example:

(code for car.rb)

Discussion questions in student resource:

- What are all the methods we have on an instance of this class?
- Which methods give us information about a car object?
- Which methods change something about a car object?
- How would you go about testing that the start method does what it is supposed to?

Instructor should live-code this for the class.

### Partner Practice

Given the following interaction pattern, build on your test file for this (not yet existent) class, Car.

Have students examine the second block of code about a car interaction pattern, and work in their pairs to start writing tests.

Once we've established that students are writing tests, they can write the code to pass tests.

### With a Partner

You will not always have interaction patterns to guide your testing. In these cases, you'll need to decide for yourself what you'll name the methods and how you'll decide to implement its functionality.

You are planning to create a `Mechanic` class. The mechanic has a name and a shop they work at. The primary responsibility of a mechanic is to take a list of cars and determine which of those cars is due for an oil change (greater than 3,000 miles).

Write a series of tests and THEN create a Mechanic class.

Share out with the class!

### Wrap Up

Have students journal their answers to these questions, or DM to instructor.

* Why is a thorough test suite important to have?
* How does letting tests drive your development lead you to stronger code?
* What tradeoffs do you face when working with unit vs integration tests?
