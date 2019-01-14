---
title: Objects, Classes, and Instances
length: 180
tags: ruby, object-oriented programming
---
# Objects, Classes, and Instances

## Agenda

- Warm Up, Learning Goals - 8 min
- Classes in Ruby (through Partner Practice) - 18 min
- Attributes (through Partner Practice) - 18 min
POM
- Code Share on Person Class - 6 min
- Accessing Attributes (through Partner Practice) - 12 min
- Other Methods (through Partner Practice) - 16 min
POM
- Object Interaction - 10 min
- Solo Practice - 20 min
POM ?
- Share out code from Solo Practice
- Wrap Up questions in pairs

## Instructor Prep

- Run through creating all Fridge examples and Person partner practice so you are ready to live code and provide feedback, respectively.
- Set up board
- Students will need to take over airplay a couple times throughout class today - make sure they know how to do this.

## On Your Desk

- Notebook/Pen
- Computers should be out for Partner Practice throughout; closed during instructor examples, closed to start off.

## Learning Goals

* Describe the difference between a class and an instance of that class
* Define a class
* Store state in instance variables defined in `initialize`
* Provide access to state using `attr_reader`s
* Use methods to provide behaviors to instances of a class
* Create a new instance of a class and call methods on that instance

## Vocabulary

* Class
* Object
* Instance
* State
* Attribute
* Instance Variable
* Behavior
* Method

## Warm Up

In your notebook brainstorm a **type** of object and **specific** instances of that object that are at Turing. Then brainstorm 3 different **attributes** for those objects and 3 different **behaviors** of those objects.

For example:

* Type of object: Refrigerator
* Specific instances:
    * Staff Fridge, Small Fridge in Student Kitchen, Large Fridge in Student Kitchen
* Attributes:
  * Brand, Color, Temperature
* Behaviors:
  * Add Food, Remove Food, Change Temperature

## Classes in Ruby

### Overview

In programming, a **Class** is something that models:

1. State
2. Behavior

State is what something *is*. Behavior is what something *does*. In the previous activity, our *Class* was refrigerator. We modeled the state of a refrigerator by defining the attributes "brand", "color", and "temperature". We modeled the behavior of a refrigerator by defining the methods "add food", "remove food", and "change temperature".

An **Instance** or **Object** is a concrete representation of a Class. In the previous activity, "staff refrigerator" is a specific Instance of the Fridge Class. We can also say that "staff refrigerator" is a Fridge Object. Do not get confused by the terms Instance and Object. They mean the exact same thing (for now).

Think of a **Class** like a blueprint for a house and an **Instance** as an actual house. The blueprint is a just an idea of how the house should be built, and the house is the realization of that blueprint.

### Syntax

The syntax for defining a class is as follows:

```ruby
class NameOfClass
end
```

So, for example, if we wanted to create a Dog class, we could do the following:


```ruby
class Dog
end
```

Notice the use of `UpperCamelCase` for the class name.

Generally we will want to put more information in our classes to make them useful to us, but those two lines (even with no other information) will create a class.

### Example - Class/Instance Syntax

Let's follow a class example with a Fridge class. I will create a directory in the classwork directory called `objects_classes_and_instances`. Within that directory, I'll create a `fridge.rb` file, and put the following information into that file. (You will take these same steps later for a different class😉)

```ruby
class Fridge
end
```

In the same `objects_instances_and_classes` directory, let's create a `runner.rb` file and put the code below into that.

```ruby
require './fridge'

fridge_1 = Fridge.new
puts "Number 1: #{fridge_1}"

fridge_2 = Fridge.new
puts "Number 2: #{fridge_2}"

require 'pry'; binding.pry
```

**EXPLAIN:** "fridge_1 is a new variable we are declaring, and assigning it to an instance of Fridge. We will see this come to life in a moment."

We can run the `runner.rb` file from the command line if we are inside of our `objects_classes_and_instances` directory by typing the following: `ruby runner.rb`.

When we run this file, our terminal should open up a pry session when it reads the line: `binding.pry`. Inside of that pry session, we'll type `fridge_1` and hit return to see what the variable `fridge_1` is holding. Then, we'll type `fridge_2` to see what that variable is holding.

## Turn & Talk

- How are those two things the same?
  * Both are Fridge objects
- How are they different?
  * Different object IDs, meaning they are completely separate objects.

### Partner Practice

We'll have several rounds of Partner Practice today. You should work on ONE computer, the other should be shut. Decide who will drive/navigate, then you should switch at each pom. Make sure you bump your font up big enough, have the brightness turned up, and that you place your laptop so that your partner can see your screen.

With your pair, create an `objects_classes_and_instances` directory, then define a Person class in it and create instances of that class in your runner file.

## Attributes in Ruby Classes

Above we created a Fridge class and then also created specific instances of the fridge class that we held in the variables `fridge_1` and `fridge_2`. Generally the objects we create will come from the same template, but each will be a unique object.

Think about the refrigerators here in the Turing basement.
* M1 BE refrigerator, M1 FE refrigerator, Staff refrigerator

Each one is different in important ways. For example, each one has its own:
* brand, color, temperature

We can model these attributes in code by using *instance variables*. Generally we define these instance variables in a special method called `initialize` that is run every time a new instance of a class is created.

### Initialize

When we run `Fridge.new` in Ruby, what actually happens? We can see from the last example that different Fridge objects (or instances) are created. Other than that, nothing happens. If we want some specific code to run when we first create a new Fridge, we need to tell Ruby what should happen when a new Fridge instance (or object) is created. We do this with the initialize method.

```ruby
class Fridge
  def initialize
    #any code here will run each time a new instance is created
  end
end
...
```

This method is run **once and only once** during an Object's lifetime, when we call `new`. Other than that, initialize is like any other method where we can put Ruby code:

```ruby
class Fridge
  def initialize
    puts "A new Fridge Object has been created"
  end
end

...
```

### Modeling State with Attributes

The instances of the classes we've defined so far are basically useless. Aside from their `object_id`, there is nothing unique about these instances.

Remember, a class models *State* and *Behavior*. Let's give our refrigerator some state.

### Example - Attributes

Let's add some attributes to the `Fridge` class. The `@` symbol before a variable name indicates that it is an *Attribute* or *Instance Variable*. These two terms mean the exact same thing.

```ruby
class Fridge
  def initialize(brand_argument, color_argument, temperature_argument)
    @brand       = brand_argument
    @color       = color_argument
    @temperature = temperature_argument
  end
end
```

Because Attributes are something we want to persist throughout an object's lifetime, we typically define them inside the initialize method because we want them to exist as soon as the object is created.

We have now created a method class that will allow us to create many different instances of Fridge, each one slightly different from the last. How do we do that in practice? Let's update the runner file so that it includes the following:

```ruby
fridge_1  = Fridge.new("Maytag", "white", 36)
puts "Number 1: #{fridge_1}"

fridge_2   = Fridge.new("", "black", 40)
puts "Number 2: #{fridge_2}"

require 'pry'; binding.pry
```

When we include the arguments to `.new`, Ruby will pass those arguments to the initialize method for us. Note that the arguments that we pass to `new` are order dependent. So, in the first example when we pass `"Maytag"` as the first argument, we are saying that the brand of the Fridge we are creating is Maytag. When we pass an empty string (`""`) the second time we call `new` we are saying that the Fridge that we created doesn't have a name brand.

What we have just done is a very common pattern. We gave our initialize method some arguments and we saved those arguments to instance variables. While this is a strong pattern, it is not a rule. For instance, you may want to set a variable in your initialize that has a default value that isn't set using an argument:

```ruby
class Fridge
  def initialize(brand, color, temperature)
    @brand       = brand
    @color       = color
    @temperature = temperature
    @contents    = []
  end
end
```

### Partner Practice

With your pair, give your Person class some attributes that are set using arguments to initialize and some attributes that have default values. Make some instances of your Person class, and run you runner file.

## Accessing Attributes

That's all well and good, but what can we do with all these attributes that we've created? They're no good to us if we can't use them.

Generally, the way that we access information stored in a class is by *sending it messages* or *calling methods* on that class. We do that using `.` syntax.

Let's run our runner file again and check to see what this returns:

```ruby
fridge_1.brand
```

We should get an error that says something about the method `.brand` not existing (a `no method` error). The syntax here is correct, but we haven't told our `Fridge` class how to respond when it receives the message `brand`.

We can do that with methods like the ones we've seen before, but attributes stored as instance variables are special. We can tell our class to provide access to them using attribute readers. Let's do that now.

### Example - Accessing Attributes

Let's update our Fridge class to include the lines below.

```ruby
class Fridge

  def initialize(brand, color, temperature)
    @brand       = brand
    @color       = color
    @temperature = temperature
    @contents    = []
  end

  def brand
    @brand
  end

  def color
    @color
  end

  def temperature
    @temperature
  end

  def contents
    @contents
  end
end
```

Let's run our runner file again and see if you can now call `fridge_1.brand`.

Now, I should be able to call `fridge_1.brand` and get back whatever was stored in the instance variable. But wow, this class is suddenly lengthy, harder to read, and has a lot of similar work happening. A method called `brand` returns `@brand`, `color` returns `@color`, etc. There's a cleaner way to do the same thing:

```ruby
class Fridge
  attr_reader :brand,
              :color,
              :temperature,
              :contents

  def initialize(brand, color, temperature)
    @brand       = brand
    @color       = color
    @temperature = temperature
    @contents    = []
  end
end
```

Let's run our runner file again and see if you can still call `fridge_1.brand` and the other attributes.

An important thing to remember is that although there is a special syntax for creating `attr_reader`s, they are still just methods. Remember the error we got earlier was a **no method error** for `brand`.

### Partner Practice

- With your pair, create `attr_reader`s for the attributes in your `Person` class.
- Practice explaining to your partner what is happening _under the hood_ with the `attr_reader`s

## Other Methods

We can also create other methods that will allow us to send other messages to our Fridge class. For example, let's say we wanted to add eggs to our Fridge. We currently have a way to see what the `contents` of the Fridge are, but we don't have any way to _add_ to it. Let's do that by creating a method called `add_food` that will add a food to the `contents` array.

Define an `add_food` method that allows you to put foods in your fridge. Note that we can access the `@contents` instance variable from anywhere within the class just by using the `@` symbol.

```ruby
class Fridge
# ... attr_readers & initialize method

  def add_food(food)
    @contents << food
  end

end
```

Let's update our runner file so that you:

1. Create a new instance of Fridge.
2. Print the contents of that Fridge.
3. Add some food to the contents of the fridge using the method you just created. You can represent a food as a String.
4. Print the new contents of the Fridge.

### Partner Practice

- With your pair, create a `have_birthday` method for your Person class. This should increase the age of that person by 1.
- Update your runner file in a similar fashion to steps 1-4 for your Person class.

## Object Interaction

When we build more complex programs, we typically have many classes, and the instances of those classes `interact` in some way.

### Example - Object Interaction

Instead of representing food as a String, let's create a Food class to represent a food.

```ruby
class Food
  attr_reader :name,
              :calories

  def initialize(name, calories)
    @name = name
    @calories = calories
  end
end
```

Let's update our runner file to add Food objects to the contents of your fridge.

Now let's add a method for a fridge to total the number of calories in the fridge:

```ruby
class Fridge
# ... attr_readers & other methods

  def total_calories
    calories = 0

    @contents.each do |food|
      calories += food.calories
    end

    calories
  end
end
```

Update the runner file to call this method.

## Solo Practice

### Create a Book Class

Create a book class. Make sure that your book class has at least 3 attributes and 2 methods.

Once you've created your class, create a runner file that creates three separate instances of book and saves them to variables.

**Check in** with your partner that you're in a similar place. Discuss an differences you have in your code.

### Create a Library Class

Create a Library class. Add attributes as you wish, but the be sure to include a `@collection` instance variable that starts as an empty array.

**Check in** with your partner that you're in a similar place. Discuss an differences you have in your code.

If you have time:

* Add a `add_book` method that takes an instance of book and adds it to your collection.
* Add a `titles` method that iterates over your collection of books and returns only their titles.
* Add an `authors` method that iterates over your collection of books and returns the authors for each book. Can you make it so that it does not return any duplicate authors?
* Pretty print: add a method that prints a table of books and authors that the library has. This will require some string manipulation to get a table to print with columns that line up.

Update your runner file to create a new library, add some books to the library, and print information about their collections.

### Check for Understanding

With your partner, answer the questions below.

* Classes, instances, objects
    * What is a Class?
    * What is an Instance?
    * What is an Object?
    * How are these three things alike/different?
    * What code do you have to write to create a Class? What code do you have to write to create an instance?
    * What happens when a new instance is created?
* Attributes & Methods
    * What is an attribute? How can we recognize an attribute?
    * What is a method? How do we write methods?
    * What are parameters? How do we add parameters to methods?
    * What is a return value? How do you know what the return value of a method is? Do all methods have return values?
