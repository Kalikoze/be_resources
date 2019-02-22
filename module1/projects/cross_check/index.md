---
title: Cross Check
layout: page
---

## Overview

In this group project, students will use CSV data from the NHL to perform statistical analysis. Students are given a description of the `StatTracker` that performs all the statistical analysis. Students should design other classes or modules in order to break this large problem into logical components.

## Learning Goals

* Build classes with single responsibilities.
* Write organized readable code.
* Use TDD as a design strategy
* Design an Object Oriented Solution to a problem
* Practice algorithmic thinking
* Work in a group
* Use Pull Requests to collaborate among multiple partners

## Timeline

* Monday, Week 4
  * Project Kick Off
* Wednesday, Week 4
  * Project Check In
* Thursday, Week 4
  * Code Share
* Tuesday, Week 5
  * Project Check In
* Thursday, Week 5
  * Project Evaluations

## Kickoff

During the kickoff, the instructor should discuss the following:

* Students need to be able to research and implement new things on their own:
  * SimpleCov
  * Rakefile
  * File Reading
* Red, Green, Refactor approach
* Goal is to write readable, OO code
* Spec Harness is not a replacement for tests
* Tests should not use full CSVs for testing
* Use TDD as a design tool

## Check Ins

For all checkins, instructors should remind students to come prepared with questions.

### First Check In

During the first checkin, instructors should make sure that students have completed iteration 1, File I/O and Setup.

For setup, instructor should make sure that students have implemented SimpleCov and a Rakefile. It is often useful to demonstrate to students how to open the coverage report after running the Rakefile.

For File I/O, the instructor should make sure that the `:from_csv` method is a class method that returns an instance of `StatTracker`. If students do not understand this concept, the instructor should refer them to the Class Methods lesson plan. That instance of `StatTracker` should also be loaded with all the data from the CSV files. While it is not explicitly stated in the project description, it is HIGHLY recommended that students create Classes to store the data from each of the CSV files, as opposed to storing the data in Hashes or other structures.

In the initial phases of the project, students can become bogged down in design decisions. The instructor can recommend that the students take the Red, Green, Refactor approach so they can focus on getting the code to work rather than big design decisions.

### Second Check In

This check in should be mostly student driven. Ideally, students have completed or are nearing completion of the project requirements and are working on or ready to begin refactoring. In this case, the instructor can discuss ideas for refactoring or feedback on the project organization.

If students are struggling to implement the methods described in the project, the instructor should offer more hands on support to get the students up to speed.

## Evaluation

The evaluation for Cross Check is in person with the instructor filling out the rubric. For each rubric category, the instructor should try to engage each student by asking questions, with the exception of "Functionality".

#### Functionality

The instructor should have students run the spec harness to assign a functionality score.

#### Object Oriented Programming

Instructor should inspect the overall organization of the project and the line length of each class. In addition, the instructor can ask probing questions, such as:

* In one sentence/at a high level, what is the responsibility of this class?
* Why did you organize the project this way?
* Why did you chose to make this a class/superclass/modules, etc?

#### Test Driven Development

The instructor should run `rake` and check the SimpleCov report, as well as look through the tests and ask probing questions such as:

* What data did you use for testing? What was difficult about this approach?
* Show me examples unit vs. integration testing.
* What was hard about writing the tests first for this project?

#### Version Control

The instructor should look at the Github insights and the Pull Requests tab to get an idea of the workflow. The instructor can also ask questions, such as:

* What was your GitHub workflow?
* How did you use Pull Requests to collaborate?
* What was your code review process?
