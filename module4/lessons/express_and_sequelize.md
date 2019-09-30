---
title: Introduction to Express and Sequelize
layout: page
---

## Learning Goals

* familiarize students with terminology and commands for setting up Express
* review one-to-many relationships in a database, migrations, table structure
* review API design


## High Level Design Practice

Before starting any project, you need to plan it out, whether with a project board like Sweater Weather, or some other means. But you must plan.

Today we're going to work through a small API that allows us to save a city plus one or more zip codes.

## Turn & Talk

* what pieces do we need?
* what will our database look like?

## Work through design

Get student feedback on what we should build, and how we'll structure our application.

Emphasize that in an interview scenario, you have to ask clarifying questions like "what format should we use for a zip code?"

#### API Design

- save a city, POST (save city and state)
- get a city with its zip codes, GET (/api/v1/cities/find?city=Denver,+CO)
- save a zip code for a city ID, POST (/api/v1/cities/1/zip)


## Fetch some sample data

What would you search for on Google/etc to get a list of zip codes for a city?

Grab 4 or 5 zip codes for Denver, CO.


## Express

- show students the difference between setting up Express with an without a View structure

```
express zipcity-with-view
# and
express --no-view zipcity-no-view
```

- examine directory structure, file differences
  - especially app.js
  
### Is Express an MVC framework?

Strictly, no, but its organization lends itself well to Models and Controllers as well as a View layout. Some other frameworks have been built on top of Express to strictly follow the MVC Design Pattern.


## ACK, no TDD yet

This breaks Ian's heart, but we haven't learned testing yet, so we need to wild-wild-west this thing.

If you were to build an RSpec test for this, think about the kinds of errors you'd see, and arrange them in order.

### Turn & Talk

Work with a neighbor to discuss at least 3 sorts of "do this next" errors that RSpec would direct us to build

- route
- controller
- model

### Let's build a route first

```
// app.js

// where the other routers get required
var citiesRouter = require('./routes/api/v1/cities.js');

// where the other app.use() calls:
app.use('/api/v1/cities', citiesRouter);

// while we're in here, let's remove the users code
```


### What would our TDD process complain about next?

We don't have controller code for a given route and HTTP verb.

Now we need to build the "controller" code that we've "required" in app.js

- build /routes/api/v1/cities.js

```
var express = require('express');
var router = express.Router();


// last thing in the file:
module.exports = router;
```

## How's it Going So Far

Let's run this to see where we're at:

`npm start`


### Next, add more controller code

```
// api/v1/cities.js

var City = require ('../../../models').City;

router.post('/', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");

  City.create({
    city: req.body.city,
    state: req.body.state
  })
    .then(city => {
      payload = {
        id: city.id,
        city: req.body.city,
        state: req.body.state
      }
      res.status(201).send(payload)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error });
    })
}
```

### What would our TDD process complain about next?

We have no model called City, so we need to do that next.

We're going to side-step and talk about Sequelize

## Sequelize

Common JavaScript ORM, built with relational databases in mind.

`npm install --save sequelize sequelize-cli pg`

- we need to add these three packages to our `package.json` so other devs who download our code can do this too (package.json is like our Gemfile)

Next, we have to set up Sequelize within our app:

`npx sequelize init`

- this created some new folders and files, what are they?

Let's take a look at the `config/config.js` file and update our database names to something more specific to our app.

- change "database_development" etc to "zipcity_development" and so on

Now let's create the database and resolve some errors:

`npx sequelize db:create`

- need to change the "dialect" from "mysql" to "postgres"

`npx sequelize db:create`

- don't need the "root" username, which is a horrible idea in the first place, change the username to ""

### Making a Model

From here we need to generate a model called "City" and give it some attributes. We can do this on the command line:

`npx sequelize model:generate --name City --attributes name:string,state:string`

- What new files were created?

#### Migration

- note that the ID column and timestamps were automatically added AND it pluralized the name of the table for us
- note that the structure of the file calls things named "up" and "down", describe these as "do" and "undo"

#### models/city.js

- our model ONLY contains the two fields we told it to make, it hides the ID and timestamps

### Run the migration

`npx sequelize db:migrate`

To rollback a migration:

`npx sequelize db:migrate:undo`


## Okay, let's manually test this:

Load up Postman and enter the URL for the route and enter some data


---

## Stage Two

Work in groups of 3 to implement the GET verb for a city sing req.query instead of req.body

- build out an endpoint for `GET "/api/v1/cities/1"` and `GET "/api/v1/cities/find?city=Denver, CO"`

---

## Stage Three

Build migration, etc for a Zip model

How will they find documentation on building a one-to-many relationship between City and Zip?

City.hasMany(Zip);
Zip.belongsTo(City);

- build a POST endpoint to save a zip code to a city
- update the GET routes for city to fetch any zip codes
