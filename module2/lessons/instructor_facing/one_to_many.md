---
title: One to Many
length: 60
layout: page
---

## Agenda
- Warm Up - 15
- Diagram Database/What is a Database? - 10

POM - 5

- Types of Relationships (foreign/primary key) - 10
- ORM - 10
- Check for Understanding - 10


## Instructor Prep

- [slides](https://docs.google.com/presentation/d/1LZgF487R2xW7_T1sFcLwJdyZFu1-UAS8mDBH-31Onsw/edit?usp=sharing)
- assign partners and send them out before class starts

## On Your Desk

- laptop
- notebook, pen

## Learning Goals

* Define Primary Key and Foreign Key
* Visualize One to many relationships
* Define ORM


## Vocabulary  

* One to Many
* Normalization
* Primary Key
* Foreign Key
* ORM


## Warm Up - slide 4


* 4 minutes - Have students sketch what current song table looks like from the setlist repo created during the Handling Requests lesson. Ideally, it is a table with the columns of name, length, and play_count.
* 2 minutes - Have students **Turn and Talk** to their neighbor and discuss how they might change the diagram they created to relate songs to artists.
* 3 minutes - After turn and talk is over, you can ask for volunteers to share their diagram. On the board, diagram what it might look like to add an additional column to the songs table to relate songs to artist. Then post a question like, "What if we also wanted to store the artists hometown in the table?". What might be a negative with the way we're currently (hypothetically) storing this information?


## What is a Database?

* Using the diagrams drawn in the warmup, explain why this is an inefficient way of storing data. It is repetitive, and it's not _normalized_.
* What is a Normalization?
  - **normalization** is used for minimizing redundancy for a relation or set of relations. In the case of songs and artists, we should normalize this database so that there is little redundancy. In doing this, we will make two tables, one songs table, and an artist table. Notice, all tables have id's. We call these id's **primary keys**, and when we reference their association with an entry from another table, that id is called a **foreign key**.
* Draw the two tables on the board to represent a normalized database with primary and foreign keys.



## Describe the Relationship

Within this mod, we will talk about three kinds of relationships. One to One, One to Many, and Many to Many.
- Example of One to One: one person has one SSN
- Example of One to Many: one merchant has many items
- Example of Many to Many: many professors have many students

In the case of artists and songs, it is a one to many relationship. Resource A (songs) will always **belong to** Resource B (artist), with the use of a **foreign key**; and, Resource B (artist) **has many** Resource A (songs).

## Using Resource Records in our Applications
- What's our database good for? What is it doing? Databases are great at storing information, they are not so great at giving our applications information that is easily manipulated or passed around - Because the database is storing raw data, not Objects as we are used to seeing in Ruby.
- What we would like, is to be able to work with each record in our database as if it were a smart ruby object - that way we could give each record additional behaviors through ruby methods.  This is where an **ORM** comes in.  
- There are many **ORMs** for many different webframeworks.  The most common **ORM** for Ruby is [ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html), and that is the one that we will be using. In fact, ActiveRecord is so standard that it is included in the base configuration of Rails.

## Checks for Understanding

Have students write down the following questions and answer them in their notebooks. After 2 minutes, have them share with their partner, fix/add anything to their answers, and then review it as a class.

1. What is database normalization?
1. Define primary and foreign keys.
1. How would you describe the one to many relationship between an author and their books? Sketch/Diagram a database for authors and books.

Tell students that the next class (ActiveRecord Associations) will go over these relationships in a lot more detail.
