---
layout: page
title: Grouping and Aggregating Materials
---

| id | title  | length  | play_count  | artist_id |
|---|---|---|---|---|
| 1 | This Must Be the Place | 345 | 23 | 1 |
| 2 | Heaven | 432 | 12 | 1 |
| 3 | Don't Stop Believin' | 367 | 45 | 2 |
| 4 | Chicken Fried | 183 | 49 | 3 |


| id | name |
| -- | ---- |
| 1 | Talking Heads |
| 2 | Journey |
| 3 | Zac Brown Band |

## Activity 1

In this activity, you will work through the following SQL query using the given materials.

```sql
select artist_id, avg(length) from songs group by artist_id;
```

**Process**

1. Perform the FROM statement. Simulate this by by laying out the `songs` table in front of you like so:

    | id | title  | length  | play_count  | artist_id |
    |---|---|---|---|---|
    | 1 | This Must Be the Place | 345 | 23 | 1 |
    | 2 | Heaven | 432 | 12 | 1 |
    | 3 | Don't Stop Believin' | 367 | 45 | 2 |
    | 4 | Chicken Fried | 183 | 49 | 3 |

1. Perform the `select` statement. Simulate this by taking the `artist_id` and the `length` columns from songs (we are ignoring the `avg` for the moment):

    | artist_id | length |
    | 1 | 345 |
    | 1 | 432 |
    | 2 | 367 |
    | 3 | 183 |

1. Perform the `group by` statement. Simulate this by separating the rows into groups based on the `artist_id`:

    | 1 | 345 |
    | 1 | 432 |

    <br>

    | 2 | 367 |

    <br>

    | 3 | 183 |

1. Perform the aggregate function `avg(length)`. Simulate this by **condensing** the lengths from each group into a single pile.

    | 1 | (pile of 2 lengths) |

    <br>

    | 2 | (pile of 1 length) |

    <br>

    | 3 | (pile of 1 length) |

1. Put the groups back together (note: you will not have an `avg` label):

    | artist_id | avg |
    | 1 | (pile of 2 lengths) |
    | 2 | (pile of 1 length) |
    | 3 | (pile of 1 length) |

1. Perform the calculation for each pile. You should end up with:

    | artist_id | avg |
    | 1 | 388.5 |
    | 2 | 367.0 |
    | 3 | 183.0 |

Repeat this process for each member of the group.


## Activity 2

We'll now do a similar activity, except this time we won't include the results from each step, only the final answer to check your work.

Given this table:

**songs table**

| id | title  | length  | play_count  | artist_id |
|---|---|---|---|---|
| 1 | This Must Be the Place | 345 | 23 | 1 |
| 2 | Heaven | 432 | 12 | 1 |
| 3 | Don't Stop Believin' | 367 | 45 | 2 |
| 4 | Chicken Fried | 183 | 49 | 3 |

Work out the following query on paper using the following process.

```sql
select artist_id, sum(play_count) from songs group by artist_id;
```

**Process**

1. Perform the FROM statement. Simulate this by by laying out the appropriate table in front of you.
1. Perform the `select` statement. Simulate this by taking the appropriate columns from the table.
1. Perform the `group by` statement. Simulate this by separating the rows into groups based on the given criteria.
1. Perform the aggregate function. Simulate this by **condensing** the appropriate rows from each group into a single pile.
1. Put the groups back together.
1. Perform the calculation for each pile. You should end up with:

    | artist_id | sum |
    | 1 | 35 |
    | 2 | 45 |
    | 3 | 3 |


## Activity 3

Now you'll solve a problem on your own using the concepts we've covered so far. The question is:

```
What is the length of each artist's longest song?
```

Use the same **songs** table from the previous exercises. Work the problem out on paper before writing the sql query. Once you have the sql query, check your answer with another group or instructor.

## Activity 4

We'll do a similar visual example of a join query using these tables:

**artists table**

| id | name |
| -- | ---- |
| 1 | Talking Heads |
| 2 | Journey |
| 3 | Zac Brown Band |

**songs table**

| id | title  | length  | play_count  | artist_id |
|---|---|---|---|---|
| 1 | This Must Be the Place | 345 | 23 | 1 |
| 2 | Heaven | 432 | 12 | 1 |
| 3 | Don't Stop Believin' | 367 | 45 | 2 |
| 4 | Chicken Fried | 183 | 49 | 3 |

```sql
select * from songs inner join artists on songs.artist_id = artists.id where play_count > 20;
```

1. Perform the `from` statement. Simulate this by laying out the `songs` and `artists` tables:

    | id | title  | length  | play_count  | artist_id |
    |---|---|---|---|---|
    | 1 | This Must Be the Place | 345 | 23 | 1 |
    | 2 | Heaven | 432 | 12 | 1 |
    | 3 | Don't Stop Believin' | 367 | 45 | 2 |
    | 4 | Chicken Fried | 183 | 49 | 3 |

    <br>

    | id | name |
    | -- | ---- |
    | 1 | Talking Heads |
    | 2 | Journey |
    | 3 | Zac Brown Band |

2. Perform the `inner join` statement. Simulate this by matching rows from both tables (note: duplicate rows have been included in the materials):

    | id | title  | length  | play_count  | artist_id | id | name |
    |---|---|---|---|---|
    | 1 | This Must Be the Place | 345 | 23 | 1 | 1 | Talking Heads |
    | 2 | Heaven | 432 | 12 | 1 | 1 | Talking Heads |
    | 3 | Don't Stop Believin' | 367 | 45 | 2 | 2 | Journey |
    | 4 | Chicken Fried | 183 | 49 | 3 | 3 | Zac Brown Band |

3. Perform the `where` statement. Simulate this by removing rows that don't meet the criteria:

    | id | title  | length  | play_count  | artist_id | id | name |
    |---|---|---|---|---|
    | 1 | This Must Be the Place | 345 | 23 | 1 | 1 | Talking Heads |
    | 3 | Don't Stop Believin' | 367 | 45 | 2 | 2 | Journey |
    | 4 | Chicken Fried | 183 | 49 | 3 | 3 | Zac Brown Band |

4. Perform the `select` statement. Because we have selected `*` (meaning everything), simulate this by doing nothing:

    | id | title  | length  | play_count  | artist_id | id | name |
    |---|---|---|---|---|
    | 1 | This Must Be the Place | 345 | 23 | 1 | 1 | Talking Heads |
    | 3 | Don't Stop Believin' | 367 | 45 | 2 | 2 | Journey |
    | 4 | Chicken Fried | 183 | 49 | 3 | 3 | Zac Brown Band |


## Activity 5a

Given this table:

**songs table**

| id | title  | length  | play_count  | artist_id |
|---|---|---|---|---|
| 1 | This Must Be the Place | 345 | 23 | 1 |
| 2 | Heaven | 432 | 12 | 1 |
| 3 | Don't Stop Believin' | 367 | 45 | 2 |
| 4 | Chicken Fried | 183 | 49 | 3 |

Work out the following query on paper using the following process.

```sql
select artist_id, min(play_count) from songs group by artist_id;
```

**Process**

1. Perform the FROM statement. Simulate this by by laying out the appropriate table in front of you.
1. Perform the `select` statement. Simulate this by taking the appropriate columns from the table.
1. Perform the `group by` statement. Simulate this by separating the rows into groups based on the given criteria.
1. Perform the aggregate function. Simulate this by **condensing** the appropriate rows from each group into a single pile.
1. Put the groups back together.
1. Perform the calculation for each pile. You should end up with:

    | artist_id | sum |
    | 1 | 12 |
    | 2 | 45 |
    | 3 | 49 |


## Activity 5b

Use the following tables of data:

**artists table**

| id | name |
| -- | ---- |
| 1 | Talking Heads |
| 2 | Journey |
| 3 | Zac Brown Band |

**songs table**

| id | title  | length  | play_count  | artist_id |
|---|---|---|---|---|
| 1 | This Must Be the Place | 345 | 23 | 1 |
| 2 | Heaven | 432 | 12 | 1 |
| 3 | Don't Stop Believin' | 367 | 45 | 2 |
| 4 | Chicken Fried | 183 | 49 | 3 |

Solve the following problem by first working it out on paper, and then writing the sql statement that solves the problem:

```
Get a list of all artists sorted by the total play count of all of their songs
```
