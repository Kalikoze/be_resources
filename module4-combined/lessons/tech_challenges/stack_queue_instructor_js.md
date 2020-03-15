---
title: Stack/Queue Challenge, Instructor Walkthrough in JS
layout: page
---

For the coding walkthrough, read the comments out loud while you write out the actual code.

Be sure to explain that this is just one possible implementation, that there may be others.

```js
let global_pairs = { '{': '}', '[': ']', '(': ')' };

function validate(string, new_pairs) {
  // immediately return false if we have an add number of characters, which
  // indicates something isn't matched properly
  if (string.length %2 != 0) {
    return false;
  }

  // set our pairs to our global set
  pairs = global_pairs;
  // but override the pairs if we pass in a set to match
  if (new_pairs != undefined) {
    pairs = new_pairs
  }

  // build our stack using an array
  stack = []

  // for each of the characters in our input string:
  // we're using straight for loops here because we want to 'return' from our whole
  // function early if we spot a problem
  for (var i in string.split('')) {
    char = string[i];

    // just a flag to track whether we've found some sort of match or not
    match = false;

    // walk through our pairs hash
    // again, a regular for loop since we need to 'return' from our function in here
    for (var key in pairs) {
      let value = pairs[key];

      // if our current character matches a key, add that to our stack
      if (key === char) {
        stack.push(char);
        // set our flag that we've matched something in our pairs
        match = true;
        // stop this for loop and move on to the next character in our string
        break;
      // otherwise, if our current character matches the value
      } else if (value === char) {
        // pop the last thing off the stack and see if that matches the matching key for
        // the bracket which is our current character
        // if there's a mismatch, return false immediately
        last_stack_item = stack.pop()
        if (last_stack_item != key) {
          // console.log("mismatch");
          return false;
        }
        // otherwise, set our flag that we DID match something in our pairs
        match = true;
        // stop this for loop and move on to the next character in our string
        break;
      }
    }

    // immediately return false if we didn't match a key or value in our pairs hash,
    // which indicates we had an invalid character
    if (!match) {
      return false;
    }
  }

  // if we got this far, we've matched as much as we could
  return true;
}


if (!validate("()")) console.log("case 1 failed");
if (!validate("([{}[]])")) console.log("case 2 failed");
if (validate("()[")) console.log("case 3 failed");
if (validate("([)]")) console.log("case 4 failed");
console.log("all done!");

// extensions
if (!validate("(()[])", {"(": ")", "[": "]"})) console.log("extension case 1 failed");
if (validate("()[]", {"(": ")"})) console.log("extension case 2 failed");
if (!validate("!12@", {"1": "2", "!": "@"})) console.log("extension case 3 failed");
console.log("all extensions done!");
```
