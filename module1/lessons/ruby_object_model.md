---
title: Ruby Object Model
length: 120
tags: ruby, class, ancestor, binding, superclass
layout: page
---

## Agenda


## Instructor Prep

- bring chart paper and markers
- Assign pairs to students and send out pairs before class starts


## Learning Goals

* learn about Inheritance a little deeper
* explain how Ruby objects inherit from other objects
* learn how to use debugging tools to see where behaviors come from


## Vocabulary  

* Inheritance
* Superclass
* Module
* Object Model
* Look Up Chain


## Warm-Up

* What's the difference between a class and an instance from Ruby's perspective?
* How are modules used as "mix-ins"?
* How do you know what variables, methods and classes you have available at any given time?


## Investigation methods as tools

* `.ancestors`: lists all classes along the inheritance chain, and any modules included by those classes
* `.included_modules`: returns a list of all modules included by any class along the inheritance chain
* `.superclass`: returns the superclass (parent class) of the class


## Show Dog/Animal/Object/BasicObject work

```ruby
# dog.rb
require './animal'

class Dog < Animal
end

dog = Dog.new
require 'pry'; binding.pry
```

```ruby
# animal.rb
require './animal_behavior'

class Animal
  include AnimalBehavior
end
```

```ruby
# animal_behavior.rb
module AnimalBehavior
end
```

#### Interaction Pattern

```ruby
dog
# we see the Dog object

dog.class
# we see the Dog class

Dog.ancestors
# we see Dog, Animal, AnimalBehavior, Object, PP::ObjectMixin, Kernel, BasicObject

Dog.superclass
# we see Animal

Animal.superclass
# we see Object

Object.superclass
# we see BasicObject

BasicObject.superclass
# we see `nil`
```

#### Diagram for Students

![Dog Inheritance](https://i.imgur.com/6IwoHvk.png)

* we have two Dog objects at the bottom because we can make many instances of a Dog class
* we can only call `.superclass` on the Class itself, not on instances; pick a student to see what happens if they try `dog.superclass` and share the error

Every class we make eventually inherits from `Object` and `BasicObject`. This is where we get behaviors like the `new` method.

Visit https://ruby-doc.org/core-2.4.1/BasicObject.html to show them that this is where we get `new`, `==` and more

Have students visit https://ruby-doc.org/core-2.4.1/Object.html to call out some common methods they might have used so far

* notable responses would be things like `.to_s`, `.nil?`
* show them that `kind_of?` could be how we test `assert_instance_of`

## Modules

Ask students where Modules fit into the diagram.

Have students run `.included_modules` on the `Dog` class (not the instance)

```ruby
 Dog.included_modules
#=> [AnimalBehavior, PP::ObjectMixin, Kernel]
```

Remark how we included the mixin in the Animal class, not the Dog class -- mixing in modules will share those module methods in descendants

#### Where does that module method come from then?

We can start to use `included_modules` on all of our superclasses to see where we actually mixed in a module.

## Updated Diagram

![Imgur](https://i.imgur.com/f4pszOG.png)


## Chart Paper Exercise

In pairs:

- use `.class`, `.ancestors`, `.included_modules`, and `.superclass` to diagram the Object Model of these several commonly-used Ruby classes:
  - Hash
  - Array
  - String
  - Integer
  - Float
  
## So why does this matter?
  
When we know the Object Model, we can start to understand the idea of precedent or the "order of operations" when it comes to defining methods, and where we should put methods if we WANT to override a method.

What is the exact order? Which method will Ruby call first if there's a conflict?

## Lookup Chain Exercise

Have students clone [https://github.com/turingschool-examples/lookup_chain_exercise](https://github.com/turingschool-examples/lookup_chain_exercise)

Map the Object Model for a `Chair` instance, then alter the code to explore the Lookup Chain

## Journal Reflection

Have students write out the order of the Lookup Chain as concisely as possible in their journals, and ask for volunteers to share their understanding.

## Lookup Chain Review

- Start by looking for a local variable
- Check its class for a method
- Look to that class's included_modules
- Until it finds the method, go to the superclass, repeat previous two steps
- Once you find it, create a `scope` for that object

## Binding

When a `scope` is created, it's called a `Binding`

A Binding is a Ruby class that captures the "context" in which the current code is executed

A Binding retains that context for future use, including:
- relevant variables
- methods
- the value of `self`
- other contextual details

## Classes vs Instances vs Modules

* Classes
  * store instance and class methods, have a superclass pointer
  * are also instances (of Class)
  * can only inherit from one other class (its 'superclass')
  * can `include` multiple Modules
* Instances
  * store instance variables, have a class pointer
* Modules
  * can be mixed-in to multiple classes (mixins)


## Wrap-Up

* How does Ruby's look up chain work? What is the order it checks things?
* What are three methods you can use to learn about where a built in Ruby method gets its components?
* Draw a diagram of where Ruby would look for the method `::new`
* What is a Binding?
