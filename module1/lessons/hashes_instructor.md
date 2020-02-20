---
title: Introducing Hashes
length: 120
tags: ruby, hashes, data structures, key, value
layout: page
---

## Agenda

- Warm Up - 5 min
- Intro - Working, Creating Hashes - 5 min
- Array vs Hash - 5 min
- Explore Hash Syntax - 8 min
- Accessing Hash/Explore Debrief - 6 min 

POM
- CFU with PollEverywhere - 10 min
- Symbols - 5 min
- Solidify - 10 min

POM
- Debrief Symbols/Solidify - 10 min
- Symbol CFU - 10 min
- Partner Activity - 15 min

POM
- Debrief Partner Activity/Address misconceptions - 15 min
- Exit Ticket - 10 min

## Instructor Prep

- Print exit ticket and Venn Diagram (separate so students can keep Venn Diagram in notebook if they'd like, we collect Exit Tickets) found here: https://docs.google.com/document/d/1zk0tfe4TlyYtpvrctXwG9T031_vs1Mi1799-f2s6LUk/edit
- Assign partners and inform students

## On Your Desk

- Notebook, pen
- 1 laptop/pair during activities

## Learning Goals

*   Explain the difference between arrays and hashes, and determine when to use which
*   Use common hash methods to access and update data in a hash

## Vocabulary

* Hash
* Key
* Value
* Symbol
* Accessing Values
* Assigning Values

## Warm Up

What's problematic about using `fridge_items_1` as a grocery list? How would you prefer to structure a grocery list? Discuss with your partner.

```
fridge_items_1 = ["milk", "eggs", "eggs", "eggs", "eggs", "eggs", "eggs", "avocado", "avocado", "tortilla", "tortilla", "tortilla", "tortilla", "tortilla", "tortilla", "tortilla", "tortilla", "tortilla"]
```


## Intro - Hash Properties

Like an Array, a Hash is a data structure used for representing a _collection_ of things. But whereas an Array generally represents a list of ordered, indexed values, **a Hash represents a collection of *named* values**. These names are called **keys**, and each key has a corresponding **value**. In a Hash, we can insert data by assigning it to a name and later retrieving it using the same name.

Some languages call their Hashes *dictionaries* for this reason -- you look up a word (the label) to retrieve its definition (the data or value with which the label was associated).

## Working with a Hash

Let's say we are making a list of items to pack for a trip. Why is a hash a good choice for storing this information?

**THINK ABOUT IT**: With your partner, brainstorm another collection of data that could be stored in a hash. Be able to justify why a hash is a better option than an array.

**WRITE:** What is **your** definition of a hash?

### Creating a Hash

Quickly talk through syntax.

### Array vs. Hash 

With your partner, complete your Venn Diagram for Arrays and Hashes. 

A Venn Diagram is 2 (or more) circles that represent each topic/concept, overlapping. The purpose is to allow us to compare and contrast. Inside the overlapping portion, we can write in things that arrays and hashes share. Where they don't overlap, we can write the things that make them different from each other. For this exercise, we should also have students list use-cases. 

### Explore

With your partner, explore the following challenges. One partner should be typing (make sure the other can see the screen) and the other should talk. This is a paired programming technique called driver/navigator.

* Start with the hash: suitcase = { "socks" => 4, "jeans" => 1 }
* Add 3 shirts to your suitcase
* Add a key value pair of swimsuit/true to your suitcase
* Take the socks out of your suitcase
* Check for how many jackets you have in your suitcase
* Check how many shirts (and only shirts) are in your suitcase
* Call `.keys` and `.values` on your hash - what is returned? Why might this be useful?


### Accessing the Hash

Debrief what students found (answers in student-facing document for their reference later). Use this opportunity to add some engagement - there may be questions or disputes about return values vs. how the hash was changed. Put that thinking on the students and continue to push them to 'prove' their assumptions.


#### Check for Understanding

Either have students write in their notebook OR use PollEverywhere! login: amy.elizabeth.holt@gmail.com password: complete. Survey is titled Hashes CFU. Make sure to practice how to activate poll.

## Symbols

Talk through content in student-facing document. 

## Working with Hashes and Symbols

Let's recreate our suitcase hash using symbols instead of strings.

```ruby
suitcase = {
  :socks => 4,
  :jeans => 1,
}
```

Ruby gives us a handy shortcut for creating a hash with symbol keys:

```ruby
suitcase = {
  socks: 4,
  jeans: 1,
}
```

These two definitions for our suitcase hash produce the exact same hash, however the second is the preferred syntax. Be careful... The colon must _immediately_ follow the name of the key without any spaces in between.

### Solidify

**NOTE** - this is the same exact exercise as "Explore" above. The point is they already know how to do 'the thing' and are now just implementing with symbols, for muscle memory more than anything.

Switch driver/navigator and complete the following (same as our last pairing exploration) using this hash: `suitcase = { socks: 4, jeans: 1 }`

For each bullet point, pay close attention to the _return value_ as well as the impact on the original hash (ie be ready to share out with the class!)

* Add 3 shirts to your suitcase
* Add a key value pair of swimsuit/true to your suitcase
* Take the socks out of your suitcase
* Check for how many jackets you have in your suitcase
* Check how many shirts (and only shirts) are in your suitcase
* Call `.keys` and `.values` on your hash - what is returned? Why might this be useful?

Debrief - use this as an opportunity to illicit participation from quieter students who haven't maybe been as confident to speak up. They've now had two at-bats with these concepts.

#### Check for Understanding

Have the students write their answers in notebooks.

## Pair Exercise

* Person `A` is in charge of reading the instructions
* Person `B` is in charge of working in pry (in such a way that their partner can see)
* You should be using symbols for the keys in this exercise

### Steps

1. Create a hash called `new_band`.
2. Add a bassist to your `new_band` hash.
3. Find the name of your bassist by accessing the `:bassist` key in the `new_band` hash.
4. Find the value attached to `:vocalist` in your hash.
5. Add a vocalist to your hash.
6. Add a drummer to your hash.
7. Get all the keys in your Hash. What kind of object does that method return?
8. Get all the values in your Hash. What kind of object does that method return?
9. Assign a new value to the `:vocalist` key of your hash.
10. How has `keys` changed after the last step? How has `values` changed?

## Extension Practice

Details in student-facing document for early finishers

## Exit Ticket

- In your own words, define a hash
- Write a hash with 3 key/value pairs (assign to a new variable)
- Access the value of the first key/value pair
- Show how you would add a new key/value pair
- Delete any key/value pair of your choosing
- What is a symbol?
- For all of your examples, did you use symbols? If you did - re-write your original hash without symbols. If you didn't, re-write your original hash with symbols.
