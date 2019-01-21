---
title: each - Instructor Facing
layout: page
---

# Each

## Agenda
- Warm Up - 5 min 
- Scalability (thru T&T) - 5 min
- Intro Each - 4 min 
- Annotation - 10 min

POM
- When to use each - 3 min
- Transform (thru T&T) - 12 min
- STAMP Return Value - 3 min
- Get a SubSet (thru TIP-CC) - 12 min 

POM 
- with_index - 5 min
- Practice - 15 min
- Share Out - 10 min 

## Instructor Prep
- Print out 1 paper per person for annotation activity
- Set up board

## On Your Desk
- Notebook/Pen
- Computers should only be out for practice at end of class

## Learning Goals
* Understand how to use #each to iterate over an array
* Recognize and implement the "map" and "inject" patterns used in iteration

## Vocabulary
* Collection
* Iteration
* Block
* Block Variable

# Scalability
Instructor talks through content in student resource.

### Turn & Talk
What are some of the problems inherent to this approach?

### Debrief Turn & Talk
It wasn't too terrible to do with just three students in this array, but what if we had ten students? A hundred? A thousand? A million?

When we have a solution that works for a small number of items, but it doesn't work for a large number of items, we say that _it doesn't scale_. We want to design solution that are dynamic, meaning they can work for various inputs.

# \#each
Instructor talks through content in student resource.

### Annotation Activity
- Students will work with partner to follow annotation directions (https://docs.google.com/document/d/1P7bUcnpRtCcXYiDc6TgiasUY1ajA17moU6ZmqcJxN8Q/edit)
- Instructor should circulate - recommend to have a checklist prepared with all 4 prompts and take note of the number of misconceptions and accurate responses for each.
- Debrief activity by using the next section as a guide; it's recommended to have students share when you know you will get good answers, but it's important that instructors are very explicit on areas where misconceptions were overheard.
- Give students 1 minute to update notes if necessary/re-write an annotation to reinforce.

### Annotation Debrief
Let's break this down. `students` is our collection. It is an Array of three strings. `.each` is a method that we call on `students`.

Everything between the `do` and `end` is the **Block**. The **Block** is what runs for each element in the Array. Since we have three elements, this block will run a total of three times.

`student_name` is the **Block Variable**. For each iteration, this variable will contain the current element we are iterating over. So for the first iteration, `student_name` holds the value `Katie Bell`, the second time it holds the value `Neville Longbottom`, and the third time it holds the value `Luna Lovegood`.

In general, the format for using `.each` looks like this.

```ruby
collection.each do |block_variable|
  # Code here runs for each element
  # the current element's value is stored in the block_variable variable
end
```

# When to use \#each
Instructor talks through content in student resource.

## Transform Every Element
Instructor talks through content in student resource.

### Turn & Talk
- What will print to the console for `names`?
- Why do you think that?

### Turn & Talk Follow Up
- Instructor - run the code then have students discuss:
	- Is this what you expected?
- Most students would expect to see `['Megan', 'Brian', 'Sal']`, so why is that not the case? **Return Value**

The most important thing to learn about using \#each is it's _return value_ which is **the original array**.  \#each will always return **the original array**. So, how do we use \#each to really accomplish what we are trying to do? Take a look at the updated example below:

Have this in a file:

```ruby
names = ['megan', 'brian', 'sal']

capitalized_names = []

names.each do |name|
  capitalized_names << name
end

puts capitalized_names
```

### STAMP Return Value
Since we know that **each returns the original array** we need to create some placeholder container to store our _new_ collection. In Mod 1, you may hear this placeholder called the accumulator or the aggregator. The thing to remember is that when you are using \#each, you will almost always use some sort of placeholder to preserve the result that you want - in this case, the names capitalized.  Without the placeholder, you will not be able to access the information that you want!

## Get a Subset of a Collection
Instructor talks through content in student resource.

### Think, Ink, Cold Call
What do you think will be printed to the terminal when you this file is executed?

In this example, we can see how the addition of a simple boolean statement can help us use \#each to accomplish a more complex task - grabbing only _some_ of the elements in the array.

## Create Something New
What if we want to use a collection to build something new? Say we have a collection of integers and we want to know the sum of all of those integers? Let's take a look:

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

total = 0

numbers.each do |number|
  total += number
end

puts total
```

Unlike our previous examples, here we can see how \#each can be used to create something other than another collection.  In this case, we are using \#each to collect a running total (or sum) of each of the elements within the original collection, `numbers`.

### Wrap up this section - POM?
The examples we have outlined are by no means a complete list of the ways that \#each can be used; they are only illustrations of the types of things you can accomplish with \#each.  As you grow your skills as a programmer, you will find more and more complex uses for \#each and iteration in general.

## with_index
Instructor talks through content in student resource.


# Practice
Now it's your turn to practice.

With your new best friend sitting next to you, with this following array use
`.each` to:

`singers = ["justin", "selena", "demi", "carly"]`

1. Can you print out their names capitalized?
2. Can you print out their names in all caps?
3. Can you print out their names but reversed? (`["carly", "demi", "selena", "justin"]`)
4. Can you create a new array with only the names that are longer than four letters in length?
5. Can you create a new array with the lengths of their names?
6. Can you create a new array with only the names that are at even indexes?

Now, with this array can you do the following using `.each`?

`array = [1,2,3,4,5]`

1. Can you create a new array with only the odd numbers?
2. Can you create a new array with only the even numbers?
3. Can you print out each number doubled?
4. Can you print out if the number is divisible by 2 or not?
5. Can you find the the sum of the numbers?

### Additional Resources

* [Video](https://vimeo.com/160173522)
