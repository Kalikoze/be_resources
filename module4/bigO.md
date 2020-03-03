---
title: Big O Instructor Notes
layout: page
---

## Overview

Teach students about "big O notation", core fundamentals, how some data structures work.

## Student-facing Notes

None, because we want to engage them in class by stumping them with content they may not have learned yet.

## 30 Minutes: Big O chart

Big O complexity is about "Operational time", and is a measurement how much work is needed (how many operations) over a collection of data, and how that operational time changes (or not) based on the size of the input data.

Draw out the typical "big O" chart from https://en.wikipedia.org/wiki/Time_complexity#/media/File:Comparison_computational_complexity.svg) but perhaps less "extreme", where "time" is the left axis of the chart, and "data" is the bottom axis of the chart.

We always calculate our "time complexity" in "worst case scenario" -- the thing we're looking for is at the end of an array or data structure, or we have to process every other piece of data to finish calculating something, etc.. We can certainly have shortcuts that makes the *practical* time much lower, but we always talk about "worst case" when calculating big O.

Explain the following time complexities in this order:

#### O(n), aka "linear time"

Draw a straight diagonal from the lower left corner of the chart to the opposite upper-right corner, for O(n) "linear time", and talk about how that's your "threshold" for ideal algorithm complexity.

Discuss how the enumerables they use (for loops, `.each`, etc) are all O(n) because they have to look at every single piece of data as part of the operational work to happen. If you have 10 things, it takes 10 operations. If you have 100 things, it takes 100 operations. It's a one-to-one ratio.

#### O(n^2) (n-squared), aka "polyomial time"

Draw the n^2 line as a rapid increase in time. Discuss that n-squared operation time happens when you have an enumerable acting on every item in a data set, like a "nested" operation. Use examples like "for each item in an array, you want to do a search through the same array to see how many times that same number appears in the array".

For very small data sets (perhaps fewer than a few thousand data pieces), n-squared is probably okay, and in some scenarios is the only way to methodically check a 2-dimensional array in a "for every row, and for every column in that row" scenario.

Discuss how if you have "an array with a million things", now you're talking 1 Trillion operations if something is nested, and how this quickly gets out of hand.

#### O(n^m) or O(2^n), aka "quadratic time" or "exponential time", aka "don't do this"

Draw a nearly vertical line along the left edge of the graph.

These can happen when you have to do a very complex search/lookup and lookup of data for each other data point, and should be avoided as much as possible. Very few interview questions they'll face will have this kind of time complexity.

#### O(log n), aka "logarithmic time"

Somewhere "under" the O(n) line, draw a plateauing curved line from the bottom left corner to about the middle of the height of the right side of the graph.

Common logarithmic operations include binary searches where each step through data cuts out half of the remaining work.

Draw a perfectly balanced binary tree of 7 numbers:
```
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

In a binary tree, or in a sorted array, we can search for a number in a smaller number of lookups by cutting out half of the tree at each node.

Common log values to memorize:

- log of 7 items is about 3 operations
- log of 1 million items is about 14 operations

As we add more values, the operation time is drastically reduced.

#### O(n log n), aka "quasilinear time"

Most high level languages will include quick sort or merge sort, and this is an example of an "n log n" algorithm where for each item ("n") you have a "log n" additional work to do.

Therefore, sorting 1 million items in an array would be "1M * log(1M)", we remember from above that log of 1M is about 14, so sorting a list of numbers in an array is going to take about 14 million operations.


#### O(1), aka "constant time"

Constant time means that no matter how much data we have, we can find/operate on a piece of data in one operation.

Examples:
- looking up something in an array if we know the index position
- lookup up a value in a hash if we know the key (there are exceptions we'll discuss later)


## 30 Minutes, Data Structures

It's easier to understand how 
