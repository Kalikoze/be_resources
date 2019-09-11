---
layout: page
title: Hash Functions
---

# Prep

1. Gather candy/snacks. Recommend have 3-5 different types of candy/snacks and 3-5 pieces for each type depending on how large the class is.
1. Place all candy/snacks in a large bowl.
1. For each candy/snack, decide what the length of its name is. For example you may decide a "GinGin" is 6 characters, or that it is "Gin Gin" and 7 characters. It doesn't actually matter what the length is, but it is important that everyone is using the same length for each candy. Write this down on the white board.
1. Using the `hash_me_1` and `hash_me_2` algorithms from the lesson plan, compute hash of each snack. For each different output, print out/write down that number on a piece of paper. Distribute these papers around the room.

# Lesson

## Part 1: Intro to Hash Functions

Cover the material from the first part of the lesson plan. Try to cover this material quickly as students will likely not understand it and want to ask questions. That's okay.

Make sure that the 5 characteristics of hash functions are written on the board. This content should be used as anchor content for the next two activities.

**Emphasize that you never want to store raw passwords in a database**

## Part 2: Hashing Exploration

Have students follow the directions in the lesson plan. It is very important that they do not eat their snack until they are told to do so.

If students are struggling to compute their hashes, ask them to pair up with someone who has the same snack to check their work.

After each round of group discussion about the characteristics of hash functions, instructor should bring the whole group back together and discuss as a class.

## Part 3: Hashing in Action

Have students work through `Activity 1` from the lesson plan. Encourage students that finish early to work on extensions. No need to debrief questions as a group.

Have students work through `Activity 2`. When finished, have a student walk you through their implementation to crack the password.

Answer the question `Would the user’s password have been “more secure” if they used eight letters rather than eight numbers? Explain your thinking.` as a group. Main takeaway: brute force hacking like we did in this activity becomes less feasible the larger your possible input set. Because we just needed four digits, we could iterate over all possibilities. When making passwords, you want to include a large possible input set, including:

* Special characters
* Numbers
* Letters, both upper and lower case
* A minimum length
