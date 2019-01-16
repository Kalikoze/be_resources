---
title: Introducing Hashes
length: 120
tags: ruby, hashes, data structures, key, value
---
## Agenda

- Warm Up - 5 min
- Intro - Working, Creating Hashes - 7 min
- Explore - 10 min
- Accessing Hash/Explore Debrief - 8 min 
POM
- CFU - 10 min
- Symbols - 10 min
- Solidify - 10 min
POM
- Debrief Symbols/Solidify - 10 min
- CFU - 10 min
- Partner Activity - 15 min
POM
- Debrief Partner Activity/Address misconceptions - 15 min
- Exit Ticket - 10 min

## Instructor Prep

- Print exit ticket
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

- A hash is enclosed in curly braces { }, key/value pairs are separated by commas, and keys and values are separated by either a rocket or a colon.
- Each key in a hash must be unique
	- If you attempt to have duplicate keys when you first create a hash, you will get a `warning: key :key_name is duplicated and overwritten on line X` error
	- If you try to add a new key/value pair using a key that already exists, that new key/value pair will overwrite the previous one - dangerous.
- Keys and values can be any type of object:
	```
	example = {	"string_value": "this value is a string",
					"array_value": ["this", "value", "is", "an", "array"],
					3: "this values' key is an integer",
					"boolean_value": true
				}
	```
- Values can be accessed with bracket notation:
	- given ``` shih_tzu = { "name"=> "Sodie" } ```
	- ``` shih_tzu["name"]``` _returns_```"Sodie" ```

Let's say we are making a list of items to pack for a trip. Why is a hash a good choice for storing this information?

**THINK ABOUT IT**: With your partner, brainstorm another collection of data that could be stored in a hash. Be able to justify why a hash is a better option than an array.

**WRITE:** What is **your** definition of a hash?

### Creating a Hash

```ruby
new_hash = {}
```

_or_

```ruby
new_hash = Hash.new
```

When using the `Hash.new`, syntax, we're able to pass a default hash value in as a parameter to `new`.

```ruby
new_hash = Hash.new(0)
```

In the above declaration, the default value of any key created for `new_hash` has a default value of 0. Keep this in mind for the future - you may find it helpful down the road🍕.

We can also create a hash with some initial key/value pairs. Let's use this syntax to create our stew hash:

```ruby
suitcase = {
  "socks" => 4,
  "jeans" => 1,
}
```

The `=>` is called a hash rocket.

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

Have the students write their answers in notebooks:

* What is a Hash?
* What type of Objects can Hashes hold?
* How can you create a Hash?
* How can you add/change/remove a key/value pair?

## Symbols

In Ruby, symbols are basically Strings that can't change. You can recognize a symbol because it starts with a colon `:`. All of the following are symbols:

```ruby
:name   
:symbols_can_have_underscores
:"symbols can be in quotes"
```

Symbols are more efficient than strings because Ruby creates only one Object for each unique symbol. Two strings with the same value are still two separate Objects. This is illustrated in the following pry session:

`code snippet in student-facing document`

Symbols are also faster than strings because Ruby can determine if two symbols are equal by checking their object_id. Strings have to be compared character by character.

So if symbols are faster and more efficient than strings, why would we use strings? Because a string's value can change, making them useful as variables. Strings are *mutable*, whereas symbols are *immutable*.

Don't worry if this doesn't quite make sense yet. The important thing to understand is that strings are useful as variables. Symbols are useful as names. **This makes symbols perfect for keys in hashes.**

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

Have the students write their answers in notebooks:

* What is a symbol? How is it different than a String?
* What is the advantage of using a String? What is the advantage of using a Symbol? Which is better for Hashes?
* What is different about using symbols in Hashes?
* Describe some useful Hash methods. Where can you look to find more Hash methods?

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
- Venn Diagram of arrays and hashes
- Write a hash with 3 key/value pairs (assign to a new variable)
- Access the value of the first key/value pair
- Show how you would add a new key/value pair
- Delete any key/value pair of your choosing
- What is a symbol?
- For all of your examples, did you use symbols? If you did - re-write your original hash without symbols. If you didn't, re-write your original hash with symbols.
