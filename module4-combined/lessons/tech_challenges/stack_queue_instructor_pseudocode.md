---
title: Stack/Queue Challenge, Instructor Walkthrough in Pseudocode
layout: page
---

Be sure to explain that this is just one possible implementation, that there may be others.

Big O analysis of this algorithm is at the bottom. Encourage students to re-examine their own
Big O analysis and share whether their analysis is correct or not.

The pseudocode below is built iteratively. I've added '*' characters to new lines that are added
within the code.


---

First, we need to consider how we're going to store the pairs of delimiters
in the first case it's an opening and closing parentheses/braces/brackets

If we think about the easiest way to track those, it would be in a hash or JS object,
in a key/value store of some kind

Let's start by putting those into a hash where the "open" (or left side of the
delimiter) is the KEY, and the "close" (or right side of the delimiter) is the VALUE

```text
* pairs = {
*   "{" = "}",
*   "[" = "]",
*   "(" = ")",
* }

```

From here, we needed a method called `validate()` which takes a string as an argument,
and returns a true/false:

```text
pairs = {
  "{" = "}",
  "[" = "]",
  "(" = ")",
}

* fn validate(input_string)
*
*
*   return boolean
```

One quick way we can tell if we have an invalid string, since every delimiter has to have a
PAIR of delimiters, is seeing if the string is an even or odd length:

```text
pairs = {
  "{" = "}",
  "[" = "]",
  "(" = ")",
}

fn validate(input_string)

*   if input_string.length is odd
*     return false

  return boolean
```

Next, we need to implement this as a Stack, so let's use an array as the simplest way
to manage a Stack, and we can use the push/pop array methods/prototypes on that array:


```text
pairs = {
  "{" = "}",
  "[" = "]",
  "(" = ")",
}

fn validate(input_string)

  if input_string.length is odd
    return false

* stack = []


  return boolean
```


Next, we have to look at every character in our input string, and decide how we're going
to track what we find using our stack.

The most common method here, is to follow two comparisons:

- if the character looks like an "open" bracket of some sort, put it on the stack
- if the character looks like a "close" bracket, take something off the stack and see if these characters are "partners"

The "open" brackets are the KEYS in our hash/object, and the "close" brackets are the VALUES in our object


```text
pairs = {
  "{" = "}",
  "[" = "]",
  "(" = ")",
}

fn validate(input_string)

  if input_string.length is odd
    return false

  stack = []

*   for each "char" in input_string
*     if "char" is in pairs.keys
*       add "char" to stack
*     else if "char" is in pairs.values
*       pop char from stack, see if that's the partner for "char", return false if mismatch

  return boolean
```

Let's dive into how we check if that's the "partner" for our char and add more detail
to our pseudocode.

We need to store the character that we "pop" from our stack into a new variable, then
we can use that as a "key" in our "pairs" hash to see if the "value" of that hash key
matches our current "char". If not, we return False right away.

```text
pairs = {
  "{" = "}",
  "[" = "]",
  "(" = ")",
}

fn validate(input_string)

  if input_string.length is odd
    return false

  stack = []

  for each "char" in input_string
    if "char" is in pairs.keys
      add "char" to stack
    else if "char" is in pairs.values
*       old_key = pop char from stack
*       if pairs[old_key] != "char"
*         return false

  return boolean
```

If they DO match, we don't need to return anything, but we do need to examine the rest of our string


---

## Ian's Big O analysis of this pseudocode:

Our iteration over each character is an `O(n)` operation, as are most enumerables/iterables.

Nested within this loop, we're checking if our current "char" value is found in pairs.keys or pairs.values.
Each of these .keys and .values calls are also an `O(n)` operation, so we would multiply this inner `O(n)`
operation with the outer `O(n)` operation, and say that this is an `O(n^2)` (n-squared) complexity.

Big O "purists" would note that our inner `O(n)` operation is on a different data structure, which we might
call `O(m)` (M instead of N), and say our final operational complexity is `O(n * m)`. This can be a significant
difference if our input string is a million characters and our delimiter set is only a few sets of brackets.

There is a way to do this in `O(n)` time, and I would encourage the students to go seek out alternate ways
to solve this problem as it's a VERY common interview challenge.
