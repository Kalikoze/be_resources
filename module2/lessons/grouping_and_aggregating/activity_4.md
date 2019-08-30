---
layout: page
title: Activity 4
---

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

<br>

```sql
select * from songs inner join artists on songs.artist_id = artists.id where play_count > 20;
```

1. Perform the `from` statement. Simulate this by laying out the `songs` and `artists` tables:

    <br>
    <br>
    <br>
    <br>

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
