---
title: Mid mod
layout: page
---

Learning Goals:

* Use MVC to organize code effectively
* Create routes
* Template a view
* Use path helpers
* Implement CRUD functionality for a resource using forms (form_tag or form_for), buttons, and links
* Create instance methods on a Rails model that use ActiveRecord associations
* Use built-in ActiveRecord methods to:
  * create queries that calculate, select, filter, and order data from a single table
  * create, read, update, and destroy records in a database
  * create records with relationships to other records in a database

  * Write feature tests utilizing:
    * RSpec and Capybara
    * CSS selectors to target specific areas of a page

  * Write model tests with RSpec including validations, and class and instance methods



* Describe vs. walk through
  * Walk through the exact syntax or describe using the technical terminology

Expectations:

* Everything is TDDed
* MVC conventions should be followed
* No need to use path helpers vs. handrolling routes

New Book Test:

* Students walk through the creation of an Author record
* Students walk through visiting the Author's show page
* Students describe filling in the form and clicking the submit button
* Students walk through expectations for seeing the new book on the author's show page

Routes

* Students walk through creating a route for the new book form
* Students walk through creating a route for the new book creation

New Book Form

* Students describe creating a form with a path and verb
* Students describe adding inputs and a submit button to the form
* Students walk through adding the author id to the form (path, hidden input, query params)

BooksController

* Students describe how to access the form data through the params hash
* Students walk through using the form data to create a new book
* Students walk through associating that book with the author
* Students walk through redirecting the user to the author show page

## Rubric

| | Rails Syntax | MVC | ActiveRecord | Testing and Debugging |
| -- | -- | -- | -- | -- | -- |
