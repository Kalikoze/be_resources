---
layout: page
title: Grouping and Aggregating
---

## Instructor Prep

1. Print out 1 activity per group. Groups should be about 3 - 4 students.
  * [Activity 1](/module2/lessons/grouping_and_aggregating/activity_1.html)
  * [Activity 2](/module2/lessons/grouping_and_aggregating/activity_2.html)
  * [Activity 3](/module2/lessons/grouping_and_aggregating/activity_3.html)
  * [Activity 4](/module2/lessons/grouping_and_aggregating/activity_4.html)
  * [Activity 5](/module2/lessons/grouping_and_aggregating/activity_5.html)
  * [Activity 6](/module2/lessons/grouping_and_aggregating/activity_6.html)
1. Print out 1 copy of the [Activity Materials](/module2/lessons/grouping_and_aggregating/activity_materials.html) per group.
1. Print out 1 copy of the [Demo Materials](https://docs.google.com/spreadsheets/d/1irUyd672gSWClJZ_vpPcs7ueafdsEQOYOeAvELIBIpM/edit?usp=sharing)
  * Use `cmd + p` to open up print dialogue, then under "print" select "entire workbook". Cells should be formatted to print as large as possible.
1. Cut cells of Activity and Demo materials into individual pieces of paper.
1. Attach demo materials to white board using magnets.


## Part 1: Lesson

**Warm Up**: Research the sql "group by" statement and sql "aggregate functions".

**Aggregate Functions**

* calculate a single result from a set of input values
* "Input Values" are columns
* You've seen this before in AR
  * `Song.average(:play_count)`
* We can imagine this as **condensing** rows
* ex: `select avg(play_count) from songs;`
* ex: `select max(length) as longest_song from songs;`

**GROUP BY**

* Create groups based on a common attribute
* This becomes the "set of input values" for your aggregate functions
* Can't group without an aggregate function
* ex: `select avg(play_count) from songs group by artist_id;`
* ex: `select artist_id, max(length) as longest_song from songs group by artist_id;`

**Turn and Talk**: If you had a sql statement with each of the following clauses, what order do you imagine they execute? What makes sense?

* select
* avg
* group by
* from
* joins
* where
* order

**Order of operations for SQL statements:**

Note: this may not technically be the correct order, but it is a good mental model to have for thinking through sql statements.

1. Compile the data you need:
  * FROM (including JOINs) - which table(s) of data are you working with?
  * WHERE - which rows from that table are you working with?
  * SELECT - which columns from that table are you working with?

2. Perform calculations:
  * GROUP BY - group rows together
  * aggregate function - compute something for each of those groups

3. Format the Output
  * ORDER BY, LIMIT, DISTINCT

## Part 2: Demonstration

Use the [materials](/module2/lessons/grouping_and_aggregating/demo_materials.html) to attach pieces of paper to the whiteboard with magnets. Each piece of paper represents data. Put the data together to create a visual representation of a sql table. See [this recording](https://drive.google.com/file/d/1BFRJrP1w91Lyjf2T3ZUr3I0XtF2_86Fa/view) for an example.

Demo the following sql statements.

1. `select title from songs where play_count > 20;`
1. `select avg(length) from songs;`
1. `select artist_id, length from songs group by artist_id;`
  * Open up a `rails dbconsole` and show the error that is generated.
  * This statement will not work, because there is no aggregate function. When the groups are created, there is no way to condense the rows.
  * This demonstrates that you can't group without an aggregate.
1. `select artist_id, avg(length) from songs group by artist_id;`

## Part 3: Activity

* Group students by comfort with doing the activity on their own. Groups should be about 3 - 4 students.
* Each group will get a copy of the [activity materials](/module2/lessons/grouping_and_aggregating/activity_materials.html)
* Each group will get a copy of [Activity 1](/module2/lessons/grouping_and_aggregating/activity_1.html)
* When students are finished with an activity, they should raise their hand and have an instructor check their work. The instructor should then give them the next activity
