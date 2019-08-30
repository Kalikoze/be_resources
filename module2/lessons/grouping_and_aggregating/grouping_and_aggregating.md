---
layout: page
title: Grouping and Aggregating
---

## Part 1: Lesson

(Write all of these on the board to anchor the content for the lesson)

**Order of operations for SQL statements:**

1. Compile the data you need:
  * FROM (including JOINs) - which table of data are you working with?
  * WHERE - which rows from that table are you working with?
  * SELECT - which columns from that table are you working with?

2. Perform calculations:
  * GROUP BY - group rows together
  * aggregate function - compute something for each of those groups
  * ORDER BY, LIMIT, DISTINCT - format the output

**Aggregate Functions**
* calculate a single result from a set of input values
* You've seen this before in AR
* We can imagine this as **condensing** rows


**GROUP BY**
* Create groups based on a common attribute
* This becomes the "set of input values" for your aggregate functions
* Can't group without an aggregate function


## Part 2: Activity

#### Demonstration

* [Print these out](./grouping_and_aggregating_materials.md). You will need one for each group.
* Cut each cell into individual pieces of paper
* Stick each cell to the whiteboard using magnets
* Demonstrate aggregating/grouping using the paper cells:
  * ex: `select avg(play_count) from songs;`
  * ex: `select max(length) as longest_song from songs;`
  * ex: `select avg(play_count) from songs group by artist_id;`
  * ex: `select artist_id, max(length) as longest_song from songs group by artist_id;`

#### Activity 1

* Given a sql grouping and aggregating query
* Give them step by step instructions to work it out with paper

Extension:
* Work out a join query on paper

#### Activity 2

* Given them a sql grouping and aggregating query
* Let them work it out on paper
* Check result with an answer

Extension:
* Work out a join query on paper

#### Activity 3

Solve a problem using the concepts we've learned

* First, solve on paper
 * What data do you need?
 * What sql clauses do you need?
 * How do those clauses come together syntactically
* Then, test query in sql and ActiveRecord
* One group of students works on Grouping and aggregating
* The other: Joining, grouping, and aggregating
