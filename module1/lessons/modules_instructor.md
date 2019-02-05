## Learning Goals

* understand that modules fill various roles in Ruby.
* use a module to create a mixin to be DRY (Don't Repeat Yourself)

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


### Mixins

### Modules 

- Instructor - show students the code for both files side by side. 
- BEFORE you run it, have them write on their Take 1 Worksheet - what will return for each line?
- Run the code. 
- Then move into T&T (below code snippet) 

Let's make some online orders - **Take 1**.

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
  
Let's extract the duplication using Modules - online orders **Take 2**.

Instructor: 
- Show code for all three files this time. 
- Students will write on worksheet what their predictions are 
- Then you run the code.

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
_ Based on this example, how would you explain the way modules work?

### Key Points
Instructor - stamp these key points, make sure students understand - these are the things that are true!!!

- Once a module is included in a class, any object created from that class can call the method in the module (we just treat it as if the `confirmation` and `review` methods were part of our other classes, where you call the methods on an instance of an class.)
- Many classes can include the same module
- Each class can include many modules


## Exercise: Modules

Directions in student-facing resource

## Summary

Instructor - up to you as to how you want to collect data, do this in pairs, journals, PollEv, etc.

* What is a module? How is it different than a class? 
* How do you use a module? 
