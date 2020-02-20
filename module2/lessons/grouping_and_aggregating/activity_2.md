---
layout: page
title: Activity 2
---

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

  <br>
  <br>
  <br>

    | artist_id | sum |
    | 1 | 35 |
    | 2 | 45 |
    | 3 | 3 |
