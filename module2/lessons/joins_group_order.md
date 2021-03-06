---
title: Joins/Group/Order ActiveRecord Queries
layout: page
---

## Learning Goals

* Use `joins` to collect information from multiple tables
* Use `group` to group results by a common characteristic
* Use `order` to order grouped results
* Compare SQL queries to ActiveRecord queries

## Vocabulary
* SQL Query (Standard Query Language)
* ActiveRecord Query
* joins (JOIN)
* group (GROUP BY)
* order (ORDER BY)

## Warmup

* What new ActiveRecord methods did you learn over the weekend? In the Obstacle Course?
* How would you do the following in SQL?
  * Join results from multiple tables?
  * Order results
  * Group results

## Lecture

**Joining, grouping, and ordering data are some of the most complex things we do in Mod 2 and the concepts are easily misunderstood. Let students know that we'll review this lesson in a few days to cover the material again if they want.**

* we've talked about using ActiveRecord to create, find, and delete records, as well as to find related records on other tables
* you've begun using ActiveRecord in your Book Club project to query your database for analysis and stats
* today we're going to review three ActiveRecord methods that will help you with some of those analytics.

To give us some context to work within, clone down the `roster` repo:
* https://github.com/turingschool-examples/roster

### Joins

The `.joins` ActiveRecord method creates a `JOIN` query at the SQL level.

**Turn and Talk**

What does this do? What do we have access to when we join tables together?

### Next Step

Assume we have the following tables.

courses:

```
| id | title | description                             |
|----|-------|-----------------------------------------|
| 1  | BE M1 | OOP with Ruby                           |
| 2  | BE M2 | Web Applications with Ruby              |
| 3  | BE M3 | Professional Rails Applications         |
| 4  | BE M4 | Client-Side Development with JavaScript |
```

students:

```
| id | first_name | last_name   | course_id | score |
|----|------------|-------------|-----------|-------|
| 1  | Brian      | Zanti       | 1         | 3     |
| 2  | Megan      | McMahon     | 1         | 4     |
| 3  | Josh       | Mejia       | 3         | 2     |
| 4  | Mike       | Dao         | 3         | 3     |
| 5  | Ian        | Douglas     | 2         | 2     |
| 6  | Dione      | Wilson      | 2         | 4     |
| 7  | Cory       | Westerfield | 4         | 3     |
| 8  | Sal        | Espinosa    | 1         | 2     |
```

In another tab, let's open a connection to `psql`
```
$ psql
$ \c roster-development
```

If you get an error trying to run the above commands try this instead:
```
$ psql --dbname roster-development
```

A `JOIN` query would look something like this:

`SELECT * FROM courses JOIN students ON students.course_id = courses.id;`

And it would result in a `result set` table like the following:

```
| id | title | description                             | id | first_name | last_name   | course_id | score |
|----|-------|-----------------------------------------|----|------------|-------------|-----------|-------|
| 1  | BE M1 | OOP with Ruby                           | 1  | Brian      | Zanti       | 1         | 3     |
| 1  | BE M1 | OOP with Ruby                           | 2  | Megan      | McMahon     | 1         | 4     |
| 3  | BE M3 | Professional Rails Applications         | 3  | Josh       | Mejia       | 3         | 2     |
| 3  | BE M3 | Professional Rails Applications         | 4  | Mike       | Dao         | 3         | 3     |
| 2  | BE M2 | Web Applications with Ruby              | 5  | Ian        | Douglas     | 2         | 4     |
| 2  | BE M2 | Web Applications with Ruby              | 6  | Dione      | Wilson      | 2         | 2     |
| 4  | BE M4 | Client-Side Development with JavaScript | 7  | Cory       | Westerfield | 4         | 3     |
| 1  | BE M1 | OOP with Ruby                           | 8  | Sal        | Espinosa    | 1         | 2     |
```

Notice that there is duplicated information in the table that resulted from this JOIN.

### How does this look in ActiveRecord?

First, in order to create the query, we use the ActiveRecord `.joins` method.

Note that this is a **class** method.

It creates a `result set` (a temporary internal table) with a row for each record in the resulting data payload.

```ruby
# In the Course model
def self.with_students
  joins(:students)
end
```

in `tux`:

`Course.joins(:students)`

```ruby
=> #<ActiveRecord::Relation [#<Course id: 1, title: "BE M1", description: "OOP with Ruby">, #<Course id: 1, title: "BE M1", description: "OOP with Ruby">, #<Course id: 1, title: "BE M1", description: "OOP with Ruby">, #<Course id: 2, title: "BE M2", description: "Web Applications with Ruby">, #<Course id: 2, title: "BE M2", description: "Web Applications with Ruby">, #<Course id: 3, title: "BE M3", description: "Professional Rails Applications">, #<Course id: 3, title: "BE M3", description: "Professional Rails Applications">, #<Course id: 4, title: "BE M4", description: "Client-Side Development with JavaScript">]>
```

### Turn & Talk

* What information is this showing us?
* What is missing in the output?

In tux,

`Course.joins(:students).count(:id)`

* output says we have eight rows of data
* there are only four courses
* The resulting data, aka `result set` includes all 8 students
* the course information gets repeated for each student

### in psql

Remind students what the result set looks like at the database level.

`SELECT * FROM courses JOIN students ON students.course_id = courses.id;`

The Course objects that are returned from this query will only know about Course attributes because that's our select statement is doing.

In order to access attributes from both tables, we need to add one more piece:

```ruby
# In the Course model
def self.with_students
  select("courses.*, students.*").joins(:students)
end

# From Tux
Course.select("courses.*, students.*").joins(:students)
```

Explain that the output doesn't look any different -- ActiveRecord's console output will only show the "native" attributes in a model when it echoes/prints the model object to the console.

* in `tux`:
```
Course.select("courses.*, students.*").joins(:students).first.first_name
```

More on how we might use `.joins` shortly.


### Group

* Group will take the result set and condense common rows by a particular attribute.
* We can only group on columns that are part of our "select" statement.

Using "Group" in ActiveRecord and SQL will allow us to condense common rows of data from our result set by perform some other calculation on the data at the same time.

**We can't group data without a calculation.**

* in `psql`:

```SQL
SELECT students.course_id, count(students.id) AS student_count FROM students GROUP BY students.course_id;
```
The return looks something like this:

```SQL
course_id  | student_count
-----------+---------------
         3 |             2
         4 |             1
         2 |             2
         1 |             3
(4 rows)
```

* in `/app/models/student.rb`
```ruby
def self.count_by_course_id
  group(:course_id).count
end
```

Will return a hash like the following:

```ruby
{3 => 2, 4 => 1, 2 => 2, 1 => 3}
```

The keys are the course_id and the values are the count of how many students in that course.

### Other Important Caveats:

**ActiveRecord will return a hash if we include a .group instruction, and then end our statement with an 'aggregation' instruction like .count, .sum or .average** Once ActiveRecord sees that aggregation command, a hash object is returned and no further ActiveRecord commands will work.

* in `tux`
`Student.group(:course_id).count.order(:course_id)`

If we don't want a hash, we have to build our own `.select()` statement instead to get an array of objects instead:

```ruby
Course.joins(:students).select("courses.id, count(students.id) AS student_count").group(:id)
or
Student.select("course_id, count(id) AS student_count").group(:course_id)
```

Likewise, using an aggregate function earlier in the "chain" of commands can return a calculation result instead of allowing us to chain additional instructions.

Example in `tux`: `Student.count.group(:course_id)`
* tells us we can't do a `group` operation on an integer because `Student.count` returned an integer


### Order

* `.order()` is used to sort data in our result set
* needs a "direction" of ASCending/DESCending
  * some db's support a 'random' direction as well to shuffle things
* ascending is the default if no direction is specified
  * but it's good to be specific always

To order our courses by student count, getting the courses with the lowest counts of students first:

* in `psql`:
```SQL
SELECT students.course_id, count(students.id) AS student_count
FROM students
GROUP BY students.course_id
ORDER BY student_count ASC;
```

This will return us a table like so:

```SQL
course_id | student_count
-----------+---------------
         4 |             1
         3 |             2
         2 |             2
         1 |             3
(4 rows)
```

* in `/app/models/student.rb`

```ruby
def self.count_by_course_id
  group(:course_id)
    .order("count_all")
    .count
end
```

Now the resultant hash would look something like the following:

```ruby
{4 => 1, 3 => 2, 2 => 2, 1 => 3}
```

Interestingly, if you add a `select` clause with a calculation as an argument, it is possible for a `group` and `order` query to return objects. For example:

```ruby
Course.select("courses.*, avg(score) AS avg_score")
  .joins(:students)
  .group(:course_id, :id)
  .order("avg_score DESC")
```

This query will return a collection of Course objects. The first will be the Course with the highest avg_score.

We can order by multiple attributes, for example we could order students by last name then first name:
`Student.order("last_name desc, first_name asc")`

We can also write this in hash notation:
`Student.order(last_name: :desc, first_name: :asc)`


## Checks for Understanding

* What does a `.joins` query do in ActiveRecord?
* `.group`?
* `.order`?
* `.select`?
* What does a `.group` query return when you have `.count` on the end?
* Without it?
