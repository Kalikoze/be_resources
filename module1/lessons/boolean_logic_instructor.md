---
title: Boolean Logic
length: 60
tags: boolean, truthy, falsey, flow control
layout: page
---

## Agenda


## Instructor Prep

- Print out [guided notes](https://docs.google.com/document/d/1yVxajmhifYVZSEMcd8g657uN0ALHHCqN9hZTgf2Wug8/edit?usp=sharing)
- Assign pairs to students and send out pairs before class starts
- Have students clone down the [repo](https://github.com/turingschool-examples/vehicle_boolean) before the lesson

## On Your Desk

- guided notes
- notebook, pen
- laptop

## Learning Goals

* explain falsy vs truthy in Ruby
* apply the key logic operators AND, OR, and NOT
* combine operations into a logic expression
* utilize a truth table to illustrate a logical expression
* trace multiple paths through a code snippet
* apply compound logic to flatten nested if statements


## Vocabulary  

* Boolean
* Truthy
* Falsey
* Precedence
* Truth Table
* Flow Control

## Warm Up  (6 minutes)

* Have students do their own research using the method value_to_check and the list of values to check, and answer the following questions:
  - How many falsey values are there in Ruby?
  - What is truthy in Ruby?
* Students share observations from above activity

## Truth Tables (5 minutes)

* Show students an example of setting values for a and b, checking value in pry, and then filling out the truth table in the guided notes
* Give students about 5 minutes to play around in pry and fill out the rest of the truth table
* Put the answers on the board for students to check

## Precedence and Parentheses (10 minutes)

* Review meaning of precedence (order of operations which ruby follows)
* In pry, show conditionals using 'true' and 'false'. Have students predict what the return value will be, and then run it for:
  - true
  - false
  - false && false || true
* Show operators and their precedence list (there are examples on this list that not everyone will know, but inform them that they can play around with it on their own to figure it out)
* Walk through first example with true/false ( false || true && false || false )
- have students think what the answer will be, tell their partner, and then walk through it on the board, and then run the code
* Have students brainstorm return value of next two examples on guided notes, and then run it in code to get correct answer

## Precedence and Parentheses Practice (10 minutes)
* Have students turn page of guided notes over so that they can see the truth table for A, B, and C.
* Give students 6 minutes with their partner to work through as much boolean logic as they can.
* Display answers and answer questions (4 minutes)

## Independent Practice (20 minutes)
* Using the repo that should already be cloned down, have students look over the code in vehicle.rb and vehicle_analysis.rb and answer the following questions:
  - How many unique execution paths are there throughout vehicle_analysis.rb ?
* Have students refactor the code in vehicle_analysis.rb so that it flattens the if statements, but also still displays the same things. Students work individually, but should feel free to talk with partner while working.
* Have students screen share their refactors


## Wrap Up (5 minutes)

Have students turn and talk with partner and answer following questions:
- What objects are truthy? What objects are falsey?
- What are the rules of precedence in Boolean expressions?
- Why might you use complex Boolean expressions?

After turn and talk, call on students to share
