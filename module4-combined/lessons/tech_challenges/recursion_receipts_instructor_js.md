---
title: Recursion Challenge (receipts), Instructor Walkthrough in JS
layout: page
---

```javascript
// we were given all of the possible solutions for the 4.85 receipt in the
// problem prompt, let's copy those here

// 4.85 receipt has three possible combinations:
// - best: nachos, chips (2 total items)
// - extra veggies, chips, cheese (3 total times)
// - chips, chips, soda (3 total items)

// in order to solve our backtracking, we have to think about when we're going
// to stop our recursion (base case)
// we could start a running total at 0 and work up to the receipt value, or
// we could start at the receipt value and work down to 0
// if start start at 0, we have to pass the original receipt value to the
// recursive function so it knows when to stop
// if we start at the receipt value and work down to 0, we can hard-code the 0
// to know when to stop, so let's take that approach


// we're going to start with the hash and the array that we were given:

let menu = {
  'veggie sandwich': 6.85,
  'extra veggies': 2.20,
  'chicken sandwich': 7.85,
  'extra chicken': 3.20,
  'cheese': 1.25,
  'chips': 1.40,
  'nachos': 3.45,
  'soda': 2.05,
}

// since we know all 3 possible answers for the 4.85 receipt, let's reduce our
// array to only that receipt for now
let receipts = [4.85] //, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]

// from here we need to loop over our receipts to find an answer:

receipts.forEach(receipt => {
  // we were told that all receipts had answers, so let's just print whatever
  // gets returned from our recursion

  // we'll also pass in the full lunch menu, and the receipt value
  // we'll print out the result plus the receipt value
  console.log(receipt, find_lunch(menu, receipt));
}

// now ABOVE that receipt loop:
// we'll write out the skeleton of our recursive function
// let's call our incoming receipt value "money_left" since that's the approach
// we decided to start with
const find_lunch = (menu, money_left) => {
}

// ---

// next, we'll need to determine our base case of when to stop
// since it might be as easy as a yes/no success, let's start with a simple boolean
const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return true
  }

  // then we know we're going to loop over the menu, so let's write in a placeholder
  // here for that
  loop over the menu

  // and finally we have a base case where we have to return an "unsuccessful" status
  // if we get through the menu and there was no matching item to buy
  return false
end

// ---

// now let's fill in some detail on our recursion and what it needs to do
// we know we need to loop over our menu, which is a hash, and we can extract
// the name of the item, and the price of the item

const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return true
  }

  // we CAN'T use a forEach loop here though, because
  // we want to actually return from our whole function
  // if we succeed

  // let's use friendly names for our key and value, calling them item_name and item_price
  for (const item_name in menu) {
    let item_price = menu[item_name];
  }

  return false
end

// ---

// for each menu item we examine, we want to try to call ourself recursively with a reduced
// amount of money, and we can subtract the price of our current item

const find_lunch = (menu, money_left) => {
  return true if money_left == 0

  // let's use friendly names for our key and value, calling them item_name and item_price
  for (const item_name in menu) {
    let item_price = menu[item_name];

    // we were given a hint in the prompt that because we're dealing with money values
    // that we should round our subtraction to two decimal points
    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)

    // this isn't enough though because we're not really collecting any menu items
  end

  return false
end

// ---

// the dilemma we have here is how we're going to return a list of items:
// if we are returning true/false then we should always return the same
// data type, we shouldn't mix our return types, so we're going to need
// a place to collect the item_names that we're trying to use
// --OR--
// we need to NOT use booleans after all, and think of a way to return
// a payload of data instead

// if we switch to using an array of items then do we get a clear indicator that we
// succeeded or not?

const find_lunch = (menu, money_left) => {
  // if we make this an empty array here ...
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
  end

  // and an empty array here
  return []
end

// BUT then we haven't really determined whether something succeeded or not, because our
// recursion returning doesn't indicate if something worked
// we always send back an empty array no matter what

// ---

const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
  end

  // if instead we make this a NULL value, then we have a better indicator of success
  // while still being a valid data type match, in kind of a weird way
  return null
end


// ---

// so how do we modify the inside of our menu loop to know if we successfully got to 0?
const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
    // we can say "if our result isn't NULL, then we can add this menu item, and keep returning it"
    if (result !== null) {
      // our result is already an array of items, so let's push our current item
      result.push(item_name)
      // and return that
      return result
    end
  end

  return null
end

// ---

// this isn't enough though, we still get a stack overflow, because we're always going through
// our menu when we haven't gotten to exactly 0 -- we're not checking if we have OVERSPENT our
// money, so we should add another base case to return an 'unsuccess' (nil) if we overspend
// --OR--
// we could check if the item_price even fits in the amount of money we have left, and skip the
// item if it's too big, which means we never overspend in the first place.
// let's do the latter step, so we don't have to call ourself recursively with a negative amount
// of money

const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];

    // we'll skip this menu item if its price exceeds our money_left value
    if (item_price > money_left) {
      continue;
    }

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
    if (result !== null) {
      result.push(item_name)
      return result
    end
  end

  return null
end
```

## Final Code you should end with:

```javascript
let menu = {
  'veggie sandwich': 6.85,
  'extra veggies': 2.20,
  'chicken sandwich': 7.85,
  'extra chicken': 3.20,
  'cheese': 1.25,
  'chips': 1.40,
  'nachos': 3.45,
  'soda': 2.05,
}

let receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]

const find_lunch = (menu, money_left) => {
  if (money_left === 0) {
    return []
  }

  for (const item_name in menu) {
    let item_price = menu[item_name];
    if (item_price > money_left) {
      continue;
    }

    let diff = Math.round(money_left * 100 - item_price * 100) / 100;
    let result = find_lunch(menu, diff)
    if (result !== null) {
      result.push(item_name)
      return result
    }
  }

  return null
}

receipts.forEach(receipt => {
  console.log(receipt, find_lunch(menu, receipt));
});

```
