---
title: Tips on Approaching Tech Challenges
layout: page
---

## Note to instructors:

I found this helpful to write out as a living Google doc that is later shared with students. This could also be done with slides.

---

# Identify The Problem Type

There are only a handful of "types" of technical challenges, and the more you practice them the more patterns and commonality you'll see. This has a huge benefit as you practice because when you identify common patterns in future code challenges, you can recall how you solved that kind of problem in the past and more quickly evaluate whether that same approach would be effective in a new challenge.

Some challenges will only touch on one of these elements; some challenges will utilize several

1. Searching
    1. Look for key words in the problem that say things like "look for" or "find"
    2. Is this actually looking for you to implement a searching algorithm, though, or is this just pattern recognition?
  
2. Sorting
    1. These kinds of problems will have keywords about "organzing" data in some way
    2. Again, are they looking for you to implement/use a sorting algorithm of some kind, or are they just asking you to put data into a new data structure of some kind?

3. Pattern Recognition
    1. Similar to "searching" problems, these may also use a "find" keyword in their description, so you need to discern a little deeper what it is they're asking you to do
    2. These kinds of problems usually come with lots of different kinds of examples, and may utilize some elements of "searching" problems in order to determine if a pattern exists.
    3. These kinds of problems can, but not always, utilize recursion
  
4. Grid problems
    1. The description will clearly indicate something about the problem is in a 2-dimensional space of some sort, commonly a grid of some sort, a maze, a game, or some sort of navigation.
    2. Try to think of this as rows/columns, or x/y coordinates
    3. Most commonly implemented using an array of arrays
    4. Recursion works great for mazes where you might have to backtrack and take a different route

5. Math
    1. Math is commonly found in many tech challenges, and might just be simpler math operations like addition, multiplication and so on
    2. It's more rare that you'll be asked to do anything outside of middle school algebra
    3. If you have a math background (especially a college/university degree), you might get more advanced math problems
  
6. Language API knowledge
    1. These kinds of problems are really here to just test your inner knowledge of a programming language.
    2. Have you used it enough to know of common quirks, or things your language doesn't do particularly well?
  
7. Optimization
    1. Some problems will present code or a working algorithm that you must enhance to work faster, more efficiently, use less memory or some combination of all of these.
  

## Data Structures within Code Challenges

Some code challenges will be very clear about the data structure they want (or expect) you to use. Some problems are purposefully vague about which data structure to use because the interviewer wants to hear your thought process about which data structure you'll choose, how you evaluate the pros/cons of your choice, and how you implement your code based on that choice.

The most common data structures you'll face in technical challenges:

- Array
- Hash
- Linked List
- Stack
- Queues
- Binary Tree
- Graphs

Visit [bigocheatsheet.com](https://bigocheatsheet.com) and scroll down to the list of data structures. Clicking on the name will take you to Wikipedia links describing the background of each.

Try to learn the following three things about each data structure:

1. What is this data structure really good for?
    1. why was this invented in the first place?
    2. what was "missing" in computer science that this was deemed necessary?
    3. what efficiencies can I make in my code by using this data structure?
2. What bad things exist about this data structure?
    1. nothing is perfect, everything has drawbacks
    2. what are some downsides to choosing this data structure?
    3. eg, does it use a lot of RAM, can it only use RAM in a particular way, is it "expensive" in processing time to access data?
3. Where is this data structure most commonly used?
    1. knowing the purpose of a data structure can help you pick "the best tool for the job"
  

## Problem Breakdown

When you hear a problem, you need to break it down into smaller, manageable pieces.

Let's look at [Projecteuler.net, question #19](https://projecteuler.net/problem=19)
`instructor, consider making breakout groups for evaluating the problem`

1. What data is already given?
2. What data is missing?
3. Can we break each sentence of the problem into a high level piece of code?

Next, make the pieces as small as possible to solve.

Next, give yourself simpler data to work with. If the problem says "you have an array with a million ..." -- who is even good at visualizing what a million pieces of data looks like?? Instead, give yourself an array with, say, 5 items in it instead `[4, 7, 13, 100, 82347]` ... can you get the problem to work with a smaller set of data? If so, you can probably get it working with larger data, too.

Try to ask your interviewer, "will there be more data to test?" Some interviewers will have multiple sets of data to test against your algorithm to ensure it's really working. They might present you with an array of `[4, 7, 13, 100, 82347]` which can lead to bad assumptions like:

- the array is always numbers
- the numbers are always greater than 0
- the numgers are always sorted

While these can be perfectly reasonable assumptions, you should ALWAYS ask for clarity about incoming data so you can write your algorithm more effectively.


## Writing Pseudocode

Now that you understand the problem, you should spend some time on mid-level design, and write out some simple steps in a code-like structure. This helps prove out your design before you start coding, and allows the interviewer to intervene if your design is flawed.

The common pitfall here is to actually write "fake code" that can more easily be turned into code, but that can be harder to follow later, so try to keep your pseudocode in English as much as possible.


## Collaboration, communication

The interviewer will discern in less than 5 minutes how well you can code. The rest of the time is them evaluating your communication and thought process.

## Big O breakdown

We'll cover Big O Notation in a future class. You may never get asked about it, but it's one of those topics which will surprise your interviewer if YOU bring it up, because they won't expect you to have learned anything about it. Knowing how to analyze a piece of code quickly can help you spot inefficient code during your design stage.

## Example for Review

Share this piece of code with the class, and make breakout groups to determine which elements are in here, which additional data structure(s) they might need (if any), how they would pseudocode this, and what their initial questions are.
```
# based on a series of stock prices I've saved from yesterday,
# write some code that could tell me the best profit possible
# if I had bought and sold stock during the day.

# for example, given the stock prices below, the function should
# return 6 (buying for $5 and selling for $11, making a $6 profit)

stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
Returns 6
```

Then, send them an updated set of data:
```
stock_prices_yesterday = [15, 13, 9, 7, 6, 4]
Returns -1
```

And see if their other analysis and choices, and algorithmic approach would still work.
