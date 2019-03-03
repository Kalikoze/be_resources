---
title: Introduction to RESTful Routes and CRUD
layout: page
---

## Non-Tech Resources Needed

- poster paper
- markers


## Learning Goals

* Explain CRUD in the context of web applications.
* Explain what is REST
* Create a routes reference chart for the seven RESTful routes.
* Be able to distinguish between a RESTful vs non-RESTful route.

## Vocabulary
* CRUD
* REST
* HTTP Verbs
* URI

## Warmup

* What does CRUD stand for?
* Look at your Task Manager controller: what are the eight different method/argument combinations contained there?
* What does each one do?


## CRUD

* C - Create
* R - Read
* U - Update
* D - Delete

This is a list of the operations we can perform on a _resource_.

- _resource_ is a generic term for something that we have in our application
- generally, a database table our application accesses is a resource
- our application will create/read/update/delete resources in a database
- our applications will typically have a separate controller and model for each resource (not in Sinatra though)


## REST

* **Representational State Transfer** (ReST) is a web "architecture style"
* Coined by Roy Fielding in doctoral dissertation (2000)
* REST organizes interactions between systems
* maps HTTP verb/path combinations to respective CRUD actions
* RESTful applications typically treat the web like a resource

### HTTP Verbs

* GET: retrieve a resource from a url
* POST: create a new resource
* PUT: update an entire resource
* PATCH: update part of a resource
* DELETE: remove/destroy a resource

Additional information from the [W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).

### URI

* **Uniform Resource Identifier**

- within mod 2, we'll consider the URI to be the portion of the URL after the domain.

For the URL `https://en.wikipedia.org/wiki/Uniform_Resource_Identifier`, the URI would be `/wiki/Uniform_Resource_Identifier`.


## Turn & Talk

What is the URI for this address? `http://www.tatteredcover.com/book/9781626722934`


### Seven RESTful Routes

- show the controller code for Task Manager on the TVs
- have each student build a visual representation of REST<->CRUD interactions
- encourage them to write this in a journal, but there's an electronic copy as well:
  - https://docs.google.com/spreadsheets/d/1AGjUE49UJajPEQHvh3plKjaem5RAGvuv5SNjZzvjD9U/edit?usp=sharing
- include the following in the table:
  * What the user is trying to do
  * Method (verb) the browser is using
  * URI path
  * Data Prep/Manipulation -- is the database fetching/saving any data?
  * Do we want to Redirect, or do we want to Render erb
  * Name of View


## Poster Paper

Have students form small teams and reproduce the table

## full-class evaluation of what the students produce

- Have students review each team's poster


### Not So RESTful routes

* Do research. What is an example of a non-RESTful route?
  * `/tasks/add`

* Sometimes non-RESTful routes are necessary for small pieces of work, such as
  - `/items/5/enable`
  - `/items/5/disable`


## WrapUp

* What is each part of CRUD?
* What is REST?
* How do we combine CRUD and REST in web applications?
* Record a version of the restful routes table in your notes

## Additional Resources

- encourage students to review material at the end of the lesson plan for more information
