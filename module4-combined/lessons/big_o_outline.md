---
title: Introduction to "Big O" Notation, Analyzing Algorithms and Data Structures
layout: page
---

## Learning Goals

* familiarize students with terminology around Big O Notation
* explore deeper/inner workings of data structures
* practice some technical challenges and analyze the solutions for efficiency


## Vocabulary

* Big O
* Algorithms
* Data Structures
* Optimizations
* Challenge "Types"


## Warmup

* Turn & Talk: (2 minutes)
  * What do you already know about Big O
  * How do Arrays and Hashes actually work?
* call on two or three pairs
  

# Big O Notation

* High-level description: analysis of time vs data work
  * common language: how much effort is needed based on a quantity of data
* the O stands for Omicron, but we can think of it as Operations
* the upper-bound of complexity, aka "worst case scenario"
* usually studied in terms of 'n' units of data
  * eg, 100 items in an array would be n=100

## Draw the Big O graph one part at a time (list is below the image)

![Big O Graph](https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-1-4842-3988-9_1/MediaObjects/465726_1_En_1_Fig1_HTML.jpg)

1. Draw O(n), discuss how most enumerables are O(n) operations because they have to analyze an entire collection of data
  1. `.each`, `.sum`, `.map`, `.find_all`, etc look through an entire collection
  1. turn & talk: would `.find` be an O(n) operation? why or why not?
1. Draw O(n^2) (n-squared), discuss how nesting enumerables multiply the complexity
  1. an enumerable working over 100 items, with another enumerable inside the block working on the same 100 items becomes 10,000 units of work
  1. not necessary a bad thing if we assure the data is small
  1. turn & talk: what if an array was a million items? a billion? what are the implications?
1. Draw O(2^n) and O(n!), state that these are for illustrative purposes only, and that they are almost never a good choice
1. Draw O(n log n) and O(log n) above and below the O(n) line, respectively
  1. Logarithmic notation examines how we can cut our work in half
  1. O(log n):
    1. Draw a perfectly-balanced Binary Tree (below)
    1. Discuss traversing the binary tree (equal/less-than/greater-than) operations
      1. what's the worst-case scenario of how many steps it takes to find any number in the tree?
      1. log(7) is 3 steps
      1. log(1,000,000) is about 14 steps in a perfectly balanced tree
    1. Reflect on how each step cuts our data in half
  1. O(n log n):
    1. Discuss how O(n log n) means that for each piece of data, we also do some kind of binary-tree search
    1. Most common sorting algorithms implemented in their language of choice (merge sort or quick sort) are O(n log n) algorithms
1. Draw O(1)
  1. turn & talk, what kinds of operations can get an answer or find data in a single operation?
    1. math operations
    1. fetching data from an array if you know the index position
    1. fetching data from a hash if you know the key

### Balanced Binary Tree
```
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

# Data Structures and Their Inner-Workings

Big O notation typically talks about "time complexity" of how long something will take, but we also have "space complexity" when we create new data strctures to hold data. Worst case, these other data structures can double our memory foootprint or more.

List the following data structures on the whiteboard:

- array
- stack
- queue
- linked lists
- hash
- binary trees

* put a check mark next to binary trees since we've already talked about that algorithm
* Primary Takeaway: knowing what a data strcture is really good at, what it's really bad at, and where it's most commonly used will get you through many technical challenges.
  * sometimes your choice of data structure can make the difference between an O(n) algorithm and an O(n^2) algorithm


## Array

* Arrays are "contiguous" blocks of memory in RAM
* high-level languages often treat arrays as "dynamically-sized", we can add/remove things at our leisure
  * discuss push/pop, shift/unshift
  * each of these operations may cause a reorganization in memory when max/min thresholds are met
    * Java, for example, will double the internal size of a dynamic array as it fills up which can be a waste of space
    * removing "too many" items could cause a cleanup operation where the language processor frees up memory
  * if an array has to grow larger, the language processor may need to find a new bigger block of memory and copy data, which is an O(n) operation at least

## Stacks and Queues

* typically implemented using arrays
* Stack is like a pringles can, the first thing in is the last thing that come out
  * stacks can be "inspected" without removing data first (transparent pringles can)
  * FILO: First In, Last Out
* Queues are like a straw or hose, the first thing in is also the first thing out
  * queues can also be implemented in a more complex way with "priorities"
  * FIFO: First In, First Out

## Linked Lists

* node-based data structure in a simple "one thing leads to the next" fashion
* starts with a HEAD node, each node points to the next
* if you change a 'next' pointer to nil/null, the remaining portion of the chain can be lost (and also "leak" memory if it's not recovered)
* really handy if you need to insert something new in the middle of the data, arrays can't do that
* can also come in a "double linked list" variety where you have a next and previous pointer so you can traverse in either direction
* since we always start searching from the HEAD node, doing anything with a linked list is an O(n) operation


## Binary Trees

* recap: like a linked list, but each node points to two other nodes, nodes don't point back "up" the tree


## Hashes

* how did they get their name, aka Hash Table, aka Hash Map
* array of linked lists
* array elements are commonly called "buckets"
* discuss hashing algorithms, one-way algorithm, "should be" impossible to ever reverse the digest back to its original data
* hash algorithm produces a "digest", the digest then uses a modulo/modulus operation to determine which bucket
* if a collision happens for an insert, the linked list is PREpended to
* use an example of a weak hashing algorithm that returns the lowercased first letter of the key's string
  * use student names, collision demonstration is best with students whose names start with the same letter
* turn and talk: is a hash insertion or fetch *really* an O(n) operation?
  * no, because collisions can happen, and traversing a linked list is an O(n) operation
  * since a large number of buckets and a good hashing algorithm can reduce the likelihood of collisions we say hashes are an "amortized O(1)" operation, since MOST of the time it'll be an O(1) operation to find something


# Technical Challenges

Work through two or three technical challenges with pair groups. Some examples are below.

Discuss their solutions and analyze the time/space complexity of their algorithms, specifically looking for nested enumerables or additional data structures created to find the solution.

Let students know that, if they know the optimal answer or have heard the problems before, they should let their pair partner drive the conversation.


## Problem 1

You have an array of all of the numbers from 1 to 1 million. The array is shuffled and out of order. One number in the sequence is duplicated. How would you find it?

Part 2: Instead of a number being duplicated, one is missing.


## Problem 2

You have three arrays of a million numbers. All arrays are the same length, and each of them is sorted. Within each array, there are no duplicated numbers. But there may be common numbers found in all three arrays. How would you find the first common entry found in all 3 arrays?



