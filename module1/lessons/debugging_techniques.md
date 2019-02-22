---
title: Debugging Techniques
length: 60
tags: pry, debugging
layout: page
---

## Learning Goals

* Understand how to read a stack trace
* Understand common error messages
* Understand how to use pry to create breakpoints in code to help verify assumptions
* Develop a debugging process

## Tools & Repositories

* [pry](https://github.com/pry/pry) - `gem install pry`
* Everyone clone [Erroneous Creatures](https://github.com/turingschool-examples/erroneous_creatures)

# Part 1: Stack Trace (25 mins)

## Warmup (10 mins)

* What do you do when you don't know what's going wrong with your application?
* What do you know about `pry`?
* What questions do you still have about `pry`?

## Debugging Process (5 mins)

There are two ways that programming can go wrong:

1. Your program doesn't run. You get an **Error**.
1. Your program runs, but it doesn't work the way you expect. You get a **Failure**.

* You will always write bugs
* Having a debugging process when things go wrong is crucial to being an effective developer.

WRITE THIS DOWN:

1. Read your error (the WHOLE error)
1. Read your stack trace (find the error).
1. Verify your assumptions.
1. Try things.

You might add `research` to that list, but generally research is something that you do so that you can try things.

## Stack Trace (10 mins)

* A Stack Trace shows what line of code an error occurred on
* Shows all the method calls that led to that error
* Like a treasure map of exactly where to find the cause of the error.

### Reading a Stack Trace

* Run `hobbit_test.rb`
* Emphasize distinction between the error and the stack trace
* Top line of stack trace is where the error occurred
* Going down the list, all the method calls that led to the error

**Turn and Talk**: Walk through and explain the `hobbit_test` stack trace to your partner.

* Review as a class
* Ignore references to code that you didn't write
  * Run `unicorn_test`
  * Show the part of the stack trace referencing `kernel_require.rb:55`

# POM (5 mins)

# Part 2: Errors, Verifying Assumptions, Trying Things (25 mins)

## Errors (15 mins)

* Don't skip reading errors
* Tempting to skip them because the language is unfamiliar
* Lean in to discomfort of reading errors you don't understand

**Turn and Talk**: With a partner, brainstorm a list of errors you have seen:

* Review errors as a class:
  * `NameError: uninitialized constant SomeClass::SomeConstant`
    * `SomeConstant` is what is uninitialized.
    * `SomeClass` is *where* it is uninitialized
    * Read the whole error!
  * `undefined local variable or method 'x' for SomeObject (NameError)`
  * `wrong number of arguments (given x, expected y) (ArgumentError)`
    * Often happens for initialize
    * Remember arguments to `.new` are passed to `initialize`
  * `undefined method 'some_method' for SomeObject:SomeClass (NoMethodError)`
    * Remember to look at the whole error. The last part shows you what you called the method on.
    * Often happens when you try to call a method on `nil`
    * If you wrote `SomeClass`, you didn't define the method or you mispelled it
    * If you didn't write `SomeClass`, you called a method that doesn't exist i.e. `"hello world".first`.
  * `syntax error, unexpected end-of-input, expecting keyword_end`
  * `syntax error, unexpected keyword_end, expecting end-of-input`
    * Indent your code properly to hunt down missing/extra `ends`
  * `require': cannot load such file -- file_name (LoadError)`
    * Make sure `file_name` is spelled correctly
    * Make sure the path is written correctly i.e. `./lib/file_name`
    * Run from the root directory

## Verifying Your Assumptions (5 mins)

* Not verifying your assumptions can be one of the costliest mistakes you make as a dev
* It's possible to be *absolutely convinced* that you know exactly what's causing an error
* You might spend hours fixing a problem that doesn't exist
* Pry is very important for this step
  * Put a `pry` just before the error
  * Check all your variables/methods that are being used
  * If everything meets expectations, work backwards
* In `hobbit.rb`
  * Find the line where error ocurred
  * Put a `pry` before the error
  * Check the instance variable
  * Notice it is misspelled

## Trying Things (5 mins)

* Only change one thing at a time
* Rerun tests to see what affect it had
* In `hobbit`, fix the misspelling
* Run the tests

# POM (5 mins)

## Part Three: Exercise - Erroneous Creatures (25 mins)

* Work through the rest of the erroneous creatures
* Use the order in the README
* Very first error is in `unicorn_test`
  * Assume all other test files are written correctly
  * Should only be fixing code in the class files

# Wrap Up (5 mins)

* Everyone writes bugs
* Very important to have a process when things go wrong
* Important part of being an effective developer
