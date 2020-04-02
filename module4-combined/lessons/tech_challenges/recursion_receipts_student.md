---
title: Recursion Challenge, Student Prompt
layout: page
---

## JavaScript Starter
```js
/*
I've been to a restaurant to order some food, but I've forgotten what I ordered in the past. I only remember how much money I spent.

From the following menu, and list of receipt values, determine what I could have ordered.
*/

let menuItems = {
  "veggie sandwich": 6.85,
  "extra veggies": 2.20,
  "chicken sandwich": 7.85,
  "extra chicken": 3.20,
  "cheese": 1.25,
  "chips": 1.40,
  "nachos": 3.45,
  "soda": 2.05,
};

//The Receipts:
const receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00];

/*
Constraints:
- you must use 100% of the receipt value, we don't want any money left over
- you can order any quantity of any menu item
- none of the receipt values are "tricks", they all have answers


The Challenge:

Find the first combination of food that adds up to the receipt total, print out only one combination for that receipt, and move on to the next receipt.

The output format is up to you, but here are some examples:

4.85:
3 items, extra veggies, chips, cheese

13.75:
3 items, {'veggie sandwich': 1, 'nachos': 2}


Extension:

Refactor your first algorithm to examine many matching combinations for each receipt to find the combination with the fewest total number of items purchased.

Each receipt, except the $75 receipt, has only one best answer.

Example:
4.85 receipt has three possible combinations:
- best: nachos, chips (2 total items)
- extra veggies, chips, cheese (3 total times)
- chips, chips, soda (3 total items)
*/
```

## Ruby Starter

```ruby
=begin
I've been to a restaurant to order some food, but I've forgotten what I ordered in the past. I only remember how much money I spent.

From the following menu, and list of receipt values, determine what I could have ordered.
=end
menu = {
  'veggie sandwich' => 6.85,
  'extra veggies' => 2.20,
  'chicken sandwich' => 7.85,
  'extra chicken' => 3.20,
  'cheese' => 1.25,
  'chips' => 1.40,
  'nachos' => 3.45,
  'soda' => 2.05,
}

# The Receipts:
receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]

=begin
Constraints:
- you must use 100% of the receipt value, we don't want any money left over
- you can order any quantity of any menu item
- none of the receipt values are "tricks", they all have answers


The Challenge:

Find the first combination of food that adds up to the receipt total, print out only one combination for that receipt, and move on to the next receipt.

The output format is up to you, but here are some examples:

4.85:
3 items, extra veggies, chips, cheese

13.75:
3 items, {'veggie sandwich': 1, 'nachos': 2}


Extension:

Refactor your first algorithm to examine many matching combinations for each receipt to find the combination with the fewest total number of items purchased.

Each receipt, except the $75 receipt, has only one best answer.

Example:
4.85 receipt has three possible combinations:
- best: nachos, chips (2 total items)
- extra veggies, chips, cheese (3 total times)
- chips, chips, soda (3 total items)
=end
```

## Best Answers for Extension
```txt
best answers for part 2:

 4.85: 2 items, ['chips', 'nachos']
11.05: 2 items, ['extra chicken', 'chicken sandwich']
13.75: 3 items, ['nachos', 'nachos', 'veggie sandwich']
17.75: 3 items, ['soda', 'chicken sandwich', 'chicken sandwich']
18.25: 5 items, ['cheese', 'cheese', 'soda', 'veggie sandwich', 'veggie sandwich']
19.40: 4 items, ['cheese', 'nachos', 'veggie sandwich', 'chicken sandwich']
28.25: 5 items, ['cheese', 'nachos', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich']
40.30: 6 items, ['soda', 'veggie sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich']
75.00: 12 items, ['cheese', 'soda', 'soda', 'veggie sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich', 'chicken sandwich']

alternate for $75 receipt, also 12 items:
['soda','nachos','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','veggie sandwich','chicken sandwich']
```


## Hints

### You're dealing with money values.

Doing subtraction and addition on money values CAN lead to "floating point precision" problems. For example, `4.85 - 1.25` might give you `3.599999996`

You'll need to round things to two decimal places to make sure you're finding answers.

#### Ruby
```ruby
value_1 = 4.85
value_2 = 1.25
good_value = (value_1 - value_2).round(2)
```

#### JavaScript
```javascript
let value_1 = 4.85
let value_2 = 1.25
let diff = Math.round(value_1*100 - value_2*100)/100;
```


### Recursive Plan

1. Plan out your base case(s) of how to exit the recursion
2. Each iteration of the recursion should look through the whole menu; this can help to "buy" things more than once
3. If you find a solution while looping through the menu, you can start returning from your recursion
4. You'll also need a base case AFTER looping through the menu to indicate that nothing on the menu worked

```
fn FindMenu(menu, money_left, ...)
  base case to know if we're already done

  for loop over menu
    are there things we can skip doing?

    call ourself recursively
    if that worked, return success/payload
  end

  nothing worked, so return an unsuccessful indicator
end
```
