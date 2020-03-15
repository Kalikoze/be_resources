---
title: Arrays, Stacks, and Queues
layout: page
---


## Learning Goals

* Students will have practiced the basic principles of Arrays, Stacks, and Queues, as common data structures
* Students will have tried an example problem where knowledge of a specific data structure makes the work much easier

## Arrays (5 minutes or less)

### Background

- simple to teach, built into our high level languages
- sometimes called "lists"
- some languages dictate that only one data type can be in the array (ie integers only)

### Memory Usage

- discuss about how arrays are stored in consecutive blocks of memory

### Implementation and Usage

- don't need to build anything for arrays in JS/Ruby
- lots of iterables/enumerables and prototype methods for us to use
- high level languages pre-allocate a block of memory (size is uncontrolled by us)
- Ruby/JavaScript will allocate more memory when we start to fill that buffered size
- Java doubles its buffer size each time, 1k to to 4k, 8k, 16k etc!
- if we `pop` a lot of data out of a really large array, our language might free up that memory for other use
- buffer only exists at the end of the array, not at the front, have students discuss implications
  - allocate a new block of memory for the array
  - add the item you're adding with `unshift`
  - copy the rest of the array into the new array

### Pros/Cons

Pros:
- iterating over an array is very fast since everything is stored sequentially in memory
- if you know the index position of your data, you can access it in a single operation
- Ruby and JavaScript have lots of built-in methods to iterate/enumerate
- adding or removing items to the front or back of an array is very easy to do

Cons:
- if we have to search for something, we have to iterate over the entire array; the more data we have, the longer this takes
- we cannot add things to the middle of an array
- adding/removing items to an array over and over could cause our language to reallocate more/less memory over and over, which slows things down a little
- adding an item to the front of the array will trigger a memory copy of the old array
- we can't really control or set a hard limit on our array size


## Stacks (8 minutes)

### Background

- pringles can, first thing in is last thing out
- Last-In-First-Out (LIFO) is more common acronym, but First-In-Last-Out (FILO) is acceptable too

### Memory Usage

- easy to implement using arrays
- could use linked list as well, since we generally only track "head" node

- there's a more complex version of a stack that we use with our "call stack"
- each function that gets called tracks other data (where we left off, params, return data)
  - this is called a "stack frame"

### Implementation and Usage

- `push` on the end, `pop` off the end
- generally won't ever have to implement the "stack frame" version
  - this more complex stack has a fixed size
  - have students discuss what happens if we run out of room in our call stack (stack overlfow error)

- it's common to `peek` into a stack to see what's stored in a stack
- editing/removing data in the stack is against convention

- common to build methods like `empty`, `count`, `peek`

### Pros/Cons

Pros:
- easy to implement with arrays, but also have flexibility of using a linked list
- only need to use `push`/`pop` with arrays, or the 'head' node of a linked list
- we're allowed to "look" deeper into the stack, but this is uncommon

Cons:
- adding too many things to a stack at one time, or removing a large quantity of items at one time, could trigger a memory reallocation/copy


## Queues (8 minutes)

### Background

- tunnel analogy, first-in-first-out (FIFO)

![first in, first out](/module4-combined/lessons/Dog-chased-in-play-tunnel.gif)

- queues can also store a "priority" level in the payload
- airport check-in analogy, long line for economy check-in, short line for business class who get preferred attention

### Memory Usage

- easy to implement with arrays or linked lists
- arrays are more common

### Implementation and Usage

- typically implemented in FIFO mechanism
- `unshift` on front of array, `pop` from end of array
- have students discuss pros/cons of using a single array
  - `unshift` has to rebuild the array every time
  - hard to implement "priority" in a single array
    - could fake it by `push`ing data to the end (against convention)
      - this could still have competing priority problems
      - everything has priority 1, I push a 100 to the end, but then get a priority 50, how do we inject that after the 1's, but before the 100?
- typical implementation is multiple arrays, one per priority level
  - have to build custom code to go through each of those in some priority fashion

### Pros/Cons

Pros:
- easy to implement with arrays, but also have flexibility of using a linked list

Cons:
- constant use of `unshift` to put things at the front end of a queue causes a memory copy operation to allocate a new array
- hard to implement priority levels of queue data with a single data structure

---

## Workshop Time

Building a Stack

- [complete this assignment of a "Basic Stack"](https://github.com/turingschool/challenges/blob/master/basic_stack.markdown)
