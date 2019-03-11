---
layout: page
title: Methods and Return Values
length: 90
tags: ruby, methods, return, argument
---

## Before Lesson

* Pair Students
* Print worksheet - https://docs.google.com/document/d/1F4JM1rau4e6UcnYG0Q5irbUCAZo4uwVvRNuR4tPa6pc/edit?usp=sharing

## Learning Goals

* Define the terms Method, Argument, and Return Value
* Explain why we use methods
* Define methods in Ruby
* Explain where Ruby looks for methods
* Understand how abstraction helps us program

## Vocabulary

* Method
* Return
* Argument (Parameter)
* Parse
* Execute
* Abstraction

## Warmup

With your partner define the following terms in your own words:

* Method
* Argument
* Return Value
* Object

Then, for each of the terms above, identify examples in this pry snippets below:

```ruby
pry(main)> "Hello World".upcase
=> "HELLO WORLD"
```

``` ruby
pry(main)> "Hello World".include?("Hello")
=> true
```

# Part 1: Defining Methods, Arguments, and Return Values (25 mins)

## Methods (5 mins)

* Method - a group of related instructions that achieves some purpose.
* In this pry example, `upcase` is the method.

```ruby
pry(main)> "Hello World".upcase
=> "HELLO WORLD"
```

**Turn and Talk**: Imagine the `upcase` method didn't exist. How might you recreate this method in Ruby?

* Methods allow us to reuse code
* We don't want to rewrite the `upcase` method
* **KEY POINT**: methods run on objects
* methods are like messages. The object they are called on is the receiver.

## Return Values (5 mins)

* Return Value - the output of a Method
* Every Method has exactly one Return Value.
* A **Return Value** can be any type
* In the following pry session, "HELLO WORLD" is the return value

```ruby
pry(main)> "Hello World".upcase
=> "HELLO WORLD"
```

* Pry uses the `=>` to represent a return value. You will see this a lot.

## Arguments (5 mins)

* Arguments are the input to a method
* Also known as Parameters
* In the following pry session, "Hello" is the argument

```ruby
pry(main)> "Hello World".include? "Hello"
=> true
```
* Parenthesis are optional when passing parameters (Redo example with parenthesis)
* Some methods take multiple **Arguments**. For example:

```ruby
pry(main)> "Hello World".gsub("World", "Turing")
=> "Hello Turing"
```

* Parenthesis can be also be omitted from previous example

## Turn and Talk (5 mins)

Using following pry snippet:

1. Identify the methods being called
1. For each of those methods, identify the object they are being called on
1. For each of those methods, identify the return value
1. For each of those methods, identify any arguments

```ruby
pry(main)> pi = 3.14159265359.round(2).to_s    
#=> "3.14"
pry(main)> puts pi    
3.14
#=> nil
```

## Review Turn and Talk (5 mins):

* Popsicle sticks. Ask a student to identify:
  * a method
  * the object it is called on
  * the arguments
  * the return value

## POM (5 mins)

# Part 2: Defining our own Methods (25 mins)

* `.upcase`, `.include?`, and `.gsub` are all **Methods** built in to the string
* We will now define our own methods

**Note to Students on Laptops**:

* Students should not be coding along
* Students should be taking notes
* Students will have an opportunity to practice

## Converter Class (5 mins)

* Make a new file called `converter.rb`:

```ruby
class Converter
  def print_welcome
    puts "Welcome to Converter!"
  end
end
```

**Turn and Talk**: What will happen when this code runs?

* the `class` and `def` keywords *define* the class and method
* They do not *call* the method.
* **Methods run on Objects**
* We need to create an object before we can call the method.

```ruby
converter = Converter.new
converter.print_welcome
```

## Defining methods that take Arguments (10 mins)

* We want a method that can convert a Fahrenheit temperature to Celsius.

```ruby
  def convert_to_celsius

  end
```

* We need to give this method the Fahrenheit temperature as an input.

```ruby
  def convert_to_celsius(fahrenheit)

  end
```

* Call this method at the bottom of the file:

```ruby
converter = Converter.new
converter.convert_to_celsius
```

**Turn and Talk**: What will happen when we run this code?

* The error we get is `ArgumentError: wrong number of arguments (given 0, expected 1)`
* We defined our method to take 1 argument
* When we called it we didn't provide an argument
* This is what it means by "given 0, expected 1".

Let's pass our method an argument:

```ruby
converter.convert_to_celsius(32)
```

* We can reference it inside the method using the argument name
* For now, let's print it:

```ruby
  def convert_to_celsius(fahrenheit)
    puts fahrenheit
  end
```

* You can think of an argument as a variable that is created right at the start of the method.

## Defining Return Values (10 mins)

* We want this method to output the Celsius temperature
* We need to define a return value
* A return value is either:

  1. defined *explicitly* using the `return` keyword OR
  1. is the last line of code run, if no `return` keyword was used.

* Let's create an **Explicit Return** like so:

```ruby
  def convert_to_celsius(fahrenheit)
    celsius = ((fahrenheit - 32) * 5.0 / 9.0).round(2)
    return celsius
  end
```

* We could write the same method using an **Implicit Return**:

```ruby
  def convert_to_celsius(fahrenheit)
    ((fahrenheit - 32) * 5.0 / 9.0).round(2)
  end
```

* Run this code and you won't see anything printed
* We did return it, we just didn't print it
* **THIS IS VERY IMPORTANT:** returning and printing are NOT the same!
* we can save the return value to a variable and then print it:

```ruby
celsius = converter.convert_to_celsius(32)
puts celsius
```

* Or we can skip saving to a variable and print the return value directly

```ruby
puts converter.convert_to_celsius(32)
```

## POM (5 mins)

# Part 3: Paired Student Activity (25 mins)

* Instructor should drop link to this gist in the cohort channel: https://gist.github.com/ameseee/c311860e9f6bc023036351f298907ccb
* Students should work on the two activities provided
* Get as far as you can! Emphasis is on exploring/building understanding rather than plowing though examples.  
* 15 minutes to work, then we'll review

## Introduce Activity 1

* Instructor should emphasize the importance of reading errors as a skill
* Instructor should emphasize doing the bare minimum to make tests pass
* Demonstrate what this looks like for the first error
* Hint that this is what TDD will look like

## During Activity (15 mins)

* Instructor walk the room
* Identify students to share for first activity

## Review Activity (10 mins)

* Ask a student to share code on screen
* Ask a student to walk through code as if they were ruby
* Mention the vocab words **parse** and **execute** (non-essential)
* Volunteers for activity 2 questions:
  * What is the difference in the behavior of these four versions?
  * How does Ruby know what to return from a method?
  * What happens when ruby sees the return keyword?
* **Key Takeaway**: The return keyword ends a method. The rest of the code isn't executed.

## POM (5 mins)

# Part 4: Method Lookup, Calling Methods in Methods, Abstraction (25 mins)

## Method Lookup (10 mins)

* Imagine you open a classmate's project and you stumble upon this code:

```ruby
thing = Thing.new
thing.some_random_method
```

**Turn and Talk**: Where would you go to find out what the `some_random_method` method does?

* **METHODS RUN ON OBJECTS**
* first ask yourself what type of object it is being called on
* Look in the class file for that object's class type
* there's actually a long list of places that Ruby can look for a method
* What you need to know: the first thing Ruby will do is look in the class of the object the method is being called on.

**Turn and Talk**: Where would you look to figure out how the slice method works?

```ruby
nums = [1, 2, 3, 4]
nums.slice(1, 1)
```

* Sometimes you don't have direct access to the code
* Use Ruby Docs

## Calling Methods from Other Methods (5 mins)

* We can also call methods from within other methods that are in the same class.
* Let's add a method to print a more robust message:

```ruby
class Converter
  def print_welcome
    puts "Welcome to Converter!"
  end

  def convert_to_celsius(fahrenheit)
    ((fahrenheit - 32) * 5.0 / 9.0).round(2)
  end

  def print_celsius_converted(temperature)
    converted = convert_to_celsius(temperature)
    puts "#{temperature} degrees Fahrenheit is equal to #{converted} degrees Celsius"
  end
end

converter = Converter.new
converter.print_welcome
converter.print_celsius_converted(32)
converter.print_celsius_converted(35)
converter.print_celsius_converted(100)
```

* **Key Takeaway**:
  * You can call methods from other methods within the same class
  * Just use the method name
* **Nice to Know**:
  * We said methods run on objects, so what is the object in this example?
  * Implied receiver of `self`
  * `self` means "the current object"
  * Method call above could also be written as

```ruby
converted = self.convert_to_celsius(temperature)
```

## Layers of Abstraction (10 mins)

* We can build methods that operate at different levels of abstraction
* Abstraction - Less complex interface is exposed and more complex implementation details are hidden
* Interface - The part that someone uses
  * Doesn't necessarily refer to Users, often refers to other developers
* Like a pyramid where higher level methods rely on lower level methods to take care of the details.
* Think about how you drive a car.
  * You don't need to know how a combustion engine works (low level details)
  * All you need to know is that when you put your foot down on the gas pedal, the car moves (the interface)
  * The details of how the engine work are *abstracted* away from you

![](https://camo.githubusercontent.com/07f5ef4748c194ee893c18089a2b6513d473ac37/687474703a2f2f6d696e6573662e636f6d2f7265736f75726365732f6363612f77702d636f6e74656e742f75706c6f6164732f323031302f30312f61627374726163742d6f2d6d65746572312e6a7067)

* In `converter.rb`, what we really want to do is take three numbers, print a welcome, and then print a message for each of those numbers

```ruby
class Converter
  def print_welcome
    puts "Welcome to Converter!"
  end

  def convert_to_celsius(fahrenheit)
    ((fahrenheit - 32) * 5.0 / 9.0).round(2)
  end

  def print_celsius_converted(temperature)
    converted = convert_to_celsius(temperature)
    puts "#{temperature} degrees Fahrenheit is equal to #{converted} degrees Celsius"
  end

  def convert(first, second, third)
    print_welcome
    print_celsius_converted(first)
    print_celsius_converted(second)
    print_celsius_converted(third)
  end
end

converter = Converter.new
converter.convert(32, 35, 100)
converter.convert(12, 45, 65)
```
* A note on order:
  * The order of your _methods_ in a class does not matter  
  * Ruby will **parse** each method in the class
  * When a method is **called** Ruby will **execute** the parsed methods accordingly.
* We've bundled the more detailed methods into more abstract methods
* This will help us write more complex programs
* We often refer to the high level, abstract methods as "CEO" methods.
  * CEOs delegate to their managers, managers delegate to team leads, etc.
* All of Computer Science is an abstraction
  1. The Operating System is an abstraction of the lower level details of the Hardware
  2. Ruby is an abstraction of the lower level details of the Operating System
  3. A Ruby Program is an abstraction of the lower level details of the Ruby Programming Language
* Abstractions can go both directions. The previous example shows that something could be considered an abstraction in one context and a low level detail in another context.

## Checks for Understanding (5 mins)

* Answer the following questions in notebooks.
* Then, popsicle sticks

**Questions**:

* What is a method? An argument? A return value?
* What keywords do we use to create methods?
* How does Ruby know what to return from a method?
* How do you call one method from within another method?
* Why do we use methods?
* What is abstraction?
