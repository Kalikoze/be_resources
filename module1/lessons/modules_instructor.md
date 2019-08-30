---
layout: page
title: Modules
---

## Instructor Prep
- Print out [guided notes](https://docs.google.com/document/d/1biTT6CJcYamov1g8vqysJjWkczZG9gxDZdZ34_jZplI/edit?usp=sharing) for students
- Send students [practice repo](https://github.com/turingschool-examples/vehicles_driving) and have them clone it down before class
- Have [repo for class](https://github.com/turingschool-examples/online_orders) and [practice repo](https://github.com/turingschool-examples/vehicles_driving) ready and pulled up in text editor.
- Have [slides](https://docs.google.com/presentation/d/1ju54LoCCh31VQOC-gKCzKfqR7AbxkV4EC-VmAxRbtjs/edit?usp=sharing) ready.


## Learning Goals
* understand the role the Modules play in Ruby
* use a module to create a mixin to make our code DRYer (Don't Repeat Yourself)

## Vocabulary  
* Module
* Mixin
* Instantiate
* State
* Behavior

## Warm Up

Spend the first five minutes writing answers to the following questions:

* What do you know about modules already? If little, what would you guess modules are all about?
* Football players and soccer players both have unique attributes. What behaviors might they share?

## Introduction

Have students skip to the mixin part of their notes and fill in the notes about modules based off of the slide after warmups (slide 3).


### Mixins

### Modules

- Instructor - show students the code for both files (grubhub_order.rb and amazon_order.rb) side by side in your text editor.
- BEFORE you run it, have them use the code snippet at the top of their guided notes to write their predictions for what each line will return. (5 minutes)
- Answer the T&T questions after writing predictions(2 minutes)
- Drop into pry and run the code for the whole class (4 minutes)


Let's make some online orders

`touch grubhub_order.rb`

```ruby
class GrubhubOrder
  def confirmation(item)
    puts "You got #{item}."
  end

  def review
    puts "Please rate your order within 30 days."
  end

  def delivery
    puts "Your food will arrive in 45-60 minutes."
  end
end
```

`touch amazon_order.rb`

```ruby
class AmazonOrder
  def confirmation(item)
    puts "You got #{item}."
  end

  def review
    puts "Please rate your order within 30 days."
  end

  def delivery
    puts "Your order will arrive in 2 business days."
  end
end
```

`pry`

```ruby
require "./amazon_order.rb"
=> true

require "./grubhub_order.rb"
=> true

amazon = AmazonOrder.new
grub   = GrubHubOrder.new

amazon.confirmation('chocolate')
grub.confirmation('chocolate')

amazon.review
grub.review

amazon.delivery
grub.delivery
```

**Turn & Talk:**

- What is similar/different between the two classes (GrubHub v Amazon)?
  * Expected answers - review and confirmation are the same, delivery has a different timeline.
- What design principle(s) are we breaking with these two classes? Explain.
  * DRY

Let's extract the duplication using Modules - online orders

Instructor:
- Walk through the creation of the OnlineOrder module.
- Then you run the code by dropping into pry.

`touch online_order.rb`

```ruby
module OnlineOrder
  def confirmation(item)
    puts "You got #{item}."
  end

  def review
    puts "Please rate your order within 30 days."
  end
end
```

To get access to the methods defined in the module, you will include the module at the beginning of the class. Using include allows you to call the module methods on an instance.

In `amazon_order.rb`

```ruby
require "./online_order"

class Amazon
  include OnlineOrder

  def delivery
    puts "Your order will arrive in 2 business days."
  end
end
```

In `grubhub_order.rb`

```ruby
require "./online_order"

class Grubhub
  include OnlineOrder

  def delivery
    puts "Your food will arrive in 45-60 minutes."
  end
end
```

What will happen when we hop into Pry?

`pry`

```ruby
require "./amazon_order.rb"
=> true
require "./grubhub_order.rb"
=> true

amazon = AmazonOrder.new
grub = GrubhubOrder.new

amazon.confirmation('chocolate')
grub.confirmation('chocolate')

amazon.review
grub.review

amazon.delivery
grub.delivery
```

**Turn & Talk:**

- What just happened there?
- Why did this work?
- Based on this example, how would you explain the way modules work?

### Key Points

- Once a module is included in a class, any object created from that class can call the method in the module (we just treat it as if the `confirmation` and `review` methods were part of our other classes, where you call the methods on an instance of an class.)
- Many classes can include the same module
- Each class can include many modules


## Exercise: Modules

Directions in student-facing resource

## Summary

Instructor - up to you as to how you want to collect data, do this in pairs, journals, PollEv, etc.

* What is a module? How is it different than a class?
* How do you use a module?
