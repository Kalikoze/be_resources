---
layout: page
title: Intro/Review to MVC
---

## Learning Goals

* Identify the elements of the MVC design pattern
* Describe the single responsibility of the each of the Model, View, and Controller
* Describe how data is passed through the MVC pattern

## Vocabulary
* MVC
* Model
* View
* Controller
* DSL(Domain Specific Language)

## Warmup

* What are the primary responsibilities of the models, views, and controllers in Task Manager?


## Lecture

### Overview

* Controllers - Coordinate the response to an HTTP request. It is common to have multiple controllers. In Task Manager, we only utilized one controller.
* Models - Interact with the database. Holds other methods related to a particular resource (e.g. a `task`)
* Views - Templates for pages that we will display to our user. Frequently contain placeholders for data, making them dynamic.

### Controller

Have students open their local copy of Task Manager and look at their controller.

* Routes in Sinatra are defined through DSL (Domain Specific Language).
* Routes look similar to Ruby `do`/`end` blocks
* The first keyword corresponds with the **HTTP verb** the request is making to the route.
* The argument this method takes is a string version of the **path** the request is being made to.
* Inside the block, we tell Sinatra how to handle the request.
* Sinatra *can* have multiple controllers, but we don't get into that

### Model

Look at your `Task` model.

* Includes methods to interact with the database
    * `::all`
    * `::find(id)`
    * `::update(id, task_params)`
    * `::destroy(id)`
    * `#save`
* Every Controller within the `controllers` directory can access every Model
* Model files are almost always named singular, not plural
* We will replace these methods with ActiveRecord in an upcoming lesson

### View

Look at a view from Task Manager

* By default, Sinatra looks for our views in `/app/views` directory.
* Use ERB (embedded ruby) to describe how data should be used to create HTML
    * `<%= %>` renders the return value of the enclosed statement
    * `<% %>` does not render the return value

We can also embed Ruby code blocks with erb, but we should minimize how much
Ruby processing we actually do within these files. Generally we want to limit
Ruby code in here to if/else and .each in Mod 2.

```erb
<% if @tasks %>
  # do something
<% end %>
```

### Putting it All Together

* Sinatra determines the method to call by inspecting the verb/URI of the request
* Within that method, we:
    1. Perform any data manipulation we need using our model
    1. Collect any data we need to use in our view (using a model as a go-between)
    1. Render a view or redirect (using `erb` or `redirect`)

Let's draw a diagram to represent this process.

[MVC Diagram](https://docs.google.com/drawings/d/e/2PACX-1vRrocz01rjJXxrIYnECmpzzVsUzIOrGL5psEFaIeZbMIrqsoU2WVQ-Sd-ZJCzy03VvoQL-KaTbHZd2F/pub?w=474&h=369)


### Logic "Responsibilities"

The MVC Design Pattern describes the primary responsibility of each portion of code that we'll describe a little bit deeper here.

#### Models -- Data Logic

We saw earlier that the Model is responsible for interaction with the database. In MVC, we say that the Model is responsible for "data logic". *Calculations, filtering of data, or other manipulation of data should happen at the Model level.* When fetching data from a Model, the Model should only return raw data in an appropriate data structure -- usually an array, but can also be a hash.

A Model generally does not alter data. For example, it would be appropriate for the Model to calculate the average age of all students, but it should NOT 'round' that data to, say, two decimal places. It can force the result to be a floating point number with `.to_f`, but it should return raw data as much as possible.

#### Views -- Presentation Logic

Views have very little logic in them, generally just if/else statements and perhaps doing some basic iteration over a dataset. *The primary goal of a View is to manipulate raw data given to it by a Controller to present that data* in a way that is useful to our users.

If a View has access to an instance variable, or a collection of instances in an array that it is iterating over, it's appropriate for the View to call "instance methods" from the Model class if needed. A View should not call *class* methods except in extremely rare cases where a data builder requires it, such as a drop-down select in a form for example.

#### Controllers -- Business Logic, or Application Logic

Our Controllers are the "traffic cop" between our Models and our Views. Based on the incoming request, each controller method knows precisely which Model(s) it needs to utilize to fetch or write data, and will generally hand that data off to a View for presentation.

Controllers should limit their database actions to very simple lookups, or creation of a resource. A controller should not do very much data manipulation, that "data logic" is the role of the Model. Likewise, the controller should pre-fetch as much data as possible so the View does not call Class methods from the Models.

### Fat Controller vs Fat Model

Turing teaches that students should move all calculations and data processing within the model. This is known as "Fat Model".

Let students know that some companies will follow a "Fat Controller" architecture instead where the model's responsibility is to read/write data as-is to/from the database, and that the controller code should do any necessary calculations.


### Experiment

1. Add a new route/view to visit  “localhost:9393/easteregg” and see a new view of their choice.
2. Add a new route so that the user can go to “localhost:9393/showmethetasks” and be redirected to all of the tasks. NOTE: You should not have to create a new view, nor should you use the `erb` method i the controller.

Let’s also quickly talk about why the 2nd path isn’t a good idea.

### Recap

* What does MVC stand for?
* What are the "logic responsibilities" for each part of the MVC pattern?
* How is data passed through the MVC pattern?
* What is the difference between `<%= %>` and `<% %>`?
