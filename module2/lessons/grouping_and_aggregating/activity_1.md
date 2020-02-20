---
layout: page
title: Activity 1
---

In this activity, you will work through the following SQL query using the given materials.

```sql
select artist_id, avg(length) from songs group by artist_id;
```

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

    <br>
    <br>
    <br>
    <br>
    <br>

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
