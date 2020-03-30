---
title: Order of the Phoenix
layout: page
---

## Assignment

Clone this repo and follow the set up instructions: https://github.com/turingschool-examples/order-of-the-phoenix

We will be searching the Harry Potter API by Hogwarts house (e.g Griffindor, Hufflepuff, Ravenclaw or Slytherin) in order to retrieve a list of the Order of the Phoenix members that belong to that Hogwarts house.

First, sign up to get an API key: https://www.potterapi.com/login/#signup

The documentation for the api can be found here: https://www.potterapi.com/#documentation

Make sure you take the time to read the documentation carefully. Remember, we want to get a list of characters from a certain house that are members of the Order of the Phoenix.

Complete the following user story. Be sure to TDD all of your work. Commit your work every 15 minutes.

```
As a user,
When I visit "/"
And I Select “Gryffindor” from the select field
(Note: Use the existing select field)
And I click "Search For Members“
Then I should be on page “/search”
Then I should see the total number of the order of the phoenix members that belong to Gryffindor. (i.e. 21)
And I should see a list with the detailed information for the 21 members of the Order of the Phoenix for house Gryffindor.

And for each of the members I should see:
- The name of the member
- The members role (if it exists)
- The house the member belongs to
- The Patronus of the member (if it exists)
```
