---
title: Battleship Evaluation
layout: page
---

The instructor will sit down with the students and fill out a rubric for the pair. For each rubric category, the instructor will ask each student questions in order to score the category and gauge each partner's individual contribution. Individual scores will not be recorded, but instructors should discuss any student whose answers raised concern. Rubrics should be published to [Ruby Submissions](https://github.com/turingschool/ruby-submissions).

### Functionality

The instructor should have the students play the game and/or ask to see the code that accomplishes the following features (recommend the instructors prints this checklist)

**Main Menu**:

* User is shown the main menu where they can play or quit

**Setup**:

* Computer can place ships randomly in valid locations
* User can enter valid sequences to place both ships
* Entering invalid ship placements prompts user to enter valid placements

**Turn**:

* User board is displayed showing hits, misses, sunken ships, and ships
* Computer board is displayed showing hits, misses, and sunken ships
* Computer chooses a random shot
* Computer does not fire on the same spot twice
* User can choose a valid coordinate to fire on
* Entering invalid coordinate prompts user to enter valid coordinate
* Both computer and player shots are reported as a hit, sink, or miss
* User is informed when they have already fired on a coordinate
* Board is updated after a turn

**End Game**:

* Game ends when all the user's ships are sunk
* Game ends when all the computer's ships are sunk
* Game reports who won
* Game returns user back to the Main Menu

### Object Oriented Programming

Sample questions to assess OOP:

* How many Board, Ship, and Cell objects are created throughout the course of the game? When are they created? Where are they created?
* Describe in 1 or 2 sentences what your additional classes are responsible for and/or how they interact within the game.
* At a high level, what is the responsibility of each class? How do classes interact?
* Walk me through the flow of your game. What is the entry point of the program?

### Test Driven Development

Students should have tests for the following. Recommend that instructor either scrolls through the code themselves or have students scroll through code to save time.

* ShipTest
  * `name`
  * `length`
  * `health`
  * `sunk` returns false initially
  * `hit` reduces healths
  * `sunk` returns true after enough hits
* CellTest
  * `coordinate`
  * `ship` returns nil initially
  * `empty?` returns true initially
  * `place_ship`
  * `empty?` returns false after `place_ship`
  * `fired_upon?` returns false initially
  * `fired_upon?` returns false after `fire_upon`
  * `fire_upon` reduces health
  * `render` return1 “.”
  * `render` return1 “M”
  * `render` return1 “H”
  * `render` return1 “X”
  * `render` return1 “S”
* BoardTest
  * `cells` returns a Hash of 16 coordinate/Cell pairs
  * `valid_coordinate?`
  * `valid_placement?`
    * returns false for incorrect length
    * returns false for nonconsecutive coordinates
    * returns false for overlapping ships
    * returns true for valid coordinates
  * `place_ship`
  * `render` can show a board without ships
  * `render` can show a board with ships

### Version Control

* Look at commit history
* Look at pull requests
* Look at insights
* Show me 10 pull requests that satisfy the requirements for a 4 (if students believe they got a 4)
