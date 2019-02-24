---
title: Class Methods - Instructor Facing
layout: page
---

# Class Methods

## Agenda


## Instructor Prep
- Have enough sticky notes so that each students has 2 to write on (could have on tables before class)
- Print worksheets from this gist: https://gist.github.com/ameseee/a000c62f3656a3e2f197bb9e565213c8
- On the BACK of that, print the "Digging In" Questions: https://gist.github.com/ameseee/d148fbda594876a33b4509d187fdef31
- Have slack message ready to send out code for the Hedgehog class

## Learning Goals
- Explain the difference between class and instance methods.
- Use a class method to create instances of that class.
- Distinguish between class and instance methods with the same name.

## Vocabulary
- Instance Method
- Class Method

## Intro 
- Up until now, we’ve been using classes as factories for instances of that class. We define methods in our class, we store some state in our instance variables, we call .new, and then we can use them. In Ruby, classes are also objects themselves.
- We are going to talk about something called Class Methods - this is something you won’t use a ton of in Mod 1, but I want you to be familiar with as it will be used heavily in Rails with ActiveRecord. This is another case where you don’t need to be a complete expert, but knowing some terminology and having some context will help you read documentation and other people’s code later, and again, this will circle back in Mod 2. 
- It’s not wildly different from anything you’ve seen, so I’m going to push you into an exploration activity right away. With your partner…
  * Look at the class Hedgehog, then complete the table on your paper. This is just based on your educated guesses. If totally unsure, that’s ok!
  * Once you agree on predictions, take the code snippet (in Slack) and create a runner to see what you get… 
  * The answer the “Digging In” questions

## Explore
- With partner and no computer, work to complete the table on your worksheet. 
- THEN, hop on a computer and check your predictions. (Recommend you also slack out the code so students don't have to type out that whole class)

## Digging Into Class Methods
- Have students write answers to the digging in questions
- Have a class discussion to ensure everyone has come to the same/correct conclusion. 

## Demo/Practice
- Demo writing code for the User, then have students practice with the House.
- While/after completing that, students should answer the `Exploration` questions in the student facing resource.

## Post It CFU 
- Teach should create a 2x2 grid on board with markers. It might look like:

| CFU          | Instance Methods   | Class Methods  |
| -------------   |:-------------:     | -----:|
| Syntax          | _stickies go here_ | _stickies go here_ |
| Important Facts | _stickies go here_ | _stickies go here_ |


- Split the class into two groups and give each student 2 sticky notes (may be helpful to give each group their own color). Students will be given two questions to answer, each on a sticky note. They should do this independently. Both should be framed around the idea of: "Pretend a classmate missed this class and asked you to teach them about..."
- Group 1 should answer:
  * syntax for Instance Methods
  * Important facts about Instance Methods
- Group 2 should answer:
  * syntax for Class Methods
  * Important facts about Class Methods
- As each student completes their sticky notes, they should walk up to the board and place it in the appropriate spot.

