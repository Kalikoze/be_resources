---
title: Intro to ActiveRecord in Sinatra
layout: page
---

## Learning Goals

* Generate a migration in order to create or modify a table
* Use rake commands to create a database/drop a database/generate migration files/and migrate the database
* Interpret schema.rb
* Utilize ActiveRecord Models in the controller to pass information to views

## Vocabulary

* ActiveRecord
* Relational database
* Schema
* Object Relational Map (ORM)

## Warmup

* What are the pieces of MVC? How do we use them in a Sinatra app?
* What do you know about ActiveRecord?
* Name two ActiveRecord methods you explored yesterday.

## Repository

Clone https://github.com/turingschool-examples/set-list and run `bundle install`.

## Introduction

This repo will be the basis for a code-along throughout the week to create a
"song playlist" application which displays information from the database.

Students are encouraged to take notes along the way, and that code will be
pushed up to this repo after each lesson. They should do the code work in class
if time is permitted, or to complete the coding as homework, and to use Turing's
repo as a backup if needed.


### Background

#### Relational Databases

Database systems handle massive datasets by optimizing complicated queries. Relational databases make it easy to relate tables to one another on common data.

For example, if we have a table of songs and artists, and a song belongs to one artist, we'll need to keep track of how these pieces of data relate to one another. We might keep that information in our app in something like a CSV or YAML file but there's no easy way to query those kinds of files for this info.

#### Object Relational Mappers

"An ORM framework is written in an object-oriented language (like Ruby, Python, PHP etc.) and wrapped around a relational database. The object classes are mapped to the data tables in the database and the object instances are mapped to rows in those tables."

(from sitepoint.com)

![400% ORM Diagram](http://wiki.expertiza.ncsu.edu/images/2/2c/ORM_Flowchart.jpg)

* Someone has done the hard work of allowing us to easily interact with the relational database, through Ruby.
* It's still important to understand how SQL works so we can more easily visualize the dataset we're fetching, but an ORM like ActiveRecord will help us use Ruby to construct the SQL for whichever database we're using.

#### Ruby ORM's

* ActiveRecord (most popular)
* DataMapper
* Sequel

#### Why do we need an ORM?

We want to wrap our data into arrays of Ruby objects so we can easily manipulate the data.

If we didn't wrap them in Ruby objects, we'd simply have strings in arrays and other simple data types. This isn't as flexible to manage as full objects.

#### How does a database map to a Ruby class?

* a Model file represents a database table
* the table represents a collection of instances
* a row represents one specific instance
* the table columns represent the attributes of an instance

**Partnered Practice**

With someone near you, draw out a diagram representing the above four aspects.


## Tutorial

Define what a "migration" file is:

- Ruby instructions to create, alter, or delete something about the structure of a table in our database
- eg: create a table and define the columns, or rename a column, or delete a column and its data

We're going to use ActiveRecord "migrations" to create a `songs` table in the database, then create a `Song` model in Sinatra that allows us to interact with that database table from our app.

A `Song` will have a `title` (text), `length` in seconds (integer), and `play_count` (integer).

**Be sure that students create the play_count field with an underscore, or they might get tripped up later**

At a high level, we are going to follow these steps:

1. Create an empty database
1. Create a migration file.
1. Write code in that migration to create the `songs` table with the necessary fields
1. Run the migration.
1. Inspect `schema.rb` to ensure your table was created as intended.
1. Create a `Song` model.
1. Add data using `tux`
1. Review our controller to see that we have a route to see all songs
1. Launch our server to see your songs!

### Creating the database

(make sure you've run `bundle install` and `rake db:drop` before you start these instructions)

"Before we begin, we'll need to create a database."

Instruct students to look in the `/db/` folder of their app. There are no SQLite3 database files in this folder yet.

"The next command we run will create some empty database files for our app to use. When we switch to using PostgreSQL in Rails next week, we won't see these database files in our `/db/` folder any longer."

Run `rake db:create` and show students the new files that were created within the `/db/` folder.


#### Rake

Sometimes students get confused about what Rake is. You can put this URL in the channel where they can read about it on their own time: https://www.rubyguides.com/2019/02/ruby-rake/


### Creating a Songs Table

- now we add a table to the database
- we do this by making a "migration" file
- then we "run" the migration to actually alter our database

- Rake gives us some handy commands to help us generate migration files.

```ruby
$ rake db:create_migration NAME=create_songs
```

The `create_songs` name we use is interpreted and turned into the class name in the resulting file. These class names need to be unique, so we can't call them all "do_some_stuff"

Inside of that file you should see an empty migration file:

```ruby
class CreateSongs < ActiveRecord::Migration[5.1]
  def change
  end
end
```

---
The "5.1" version doesn't mean much to us right now, but ensures we have v5.1 installed. If students have 5.2 it may indicate that they've done a "bundle update" or may have installed Rails 5.2.
---

We are going to use ActiveRecord's `create_table` method to specify what we want to name this table and what fields it will include.

```ruby
class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.text    :title
      t.integer :length
      t.integer :play_count

      t.timestamps
    end
  end
end
```

Within the block of code, we use a `t` block parameter to specify the data type we want each column to be, followed by a 'symbol' of the attribute name we want to use.

- Run `rake db:migrate` to apply the migration, and change the database.
- This generates or updates `/db/schema.rb` with a Ruby representation of what our database looks like
- we should not change this file as running any new migrations will overwrite our changes

Inspect the schema.rb file:

```ruby
ActiveRecord::Schema.define(version: 20160217022804) do

  create_table "songs", force: :cascade do |t|
    t.text     "title"
    t.integer  "length"
    t.integer  "play_count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end
end
```

Point out that the 'version' shown at the top of the schema is the same as the timestamp of the LAST migration that was run. Explain this is kind of like 'versioning' the database changes, and that changing migration files once we've applied it will not re-run the migrations, and will likely just generate more errors.

In "development" mode, it's safe and encouraged to change new migrations and drop/create/migrate their database ... ONLY if the migrations aren't in "production" yet. Once a migration has been run in production, students would have to build a new migration to rename/create/drop any attributes that need a correction.


### Creating a Song Model

Now that we have a `songs` table, we'll want to create a Song model to interact with that table.

```
$ touch app/models/song.rb
```

**We name our Model files in a singular name like "song", not a plural name, like "songs". Remember it this way: when you 'new' up a model class, you have one "song" object.**

Inside of that file:

```ruby
class Song < ActiveRecord::Base
end
```

By inheriting from `ActiveRecord::Base`, we're given a bunch of class and instance methods we can use to manipulate the songs in our database. These methods will take the place of the methods that you wrote yourself in Task Manager (e.g. `::all`, `::find`, `::new`, `::save`).

Now that we have a model, we can use `tux` (an interactive console for your app) to add some songs to our database.

If you get an error when running tux that looks like this:
```
You have already activated rack-test 0.6.3, but your Gemfile requires rack-test 1.0.0. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```

To fix this error, just run tux like this instead: `bundle exec tux`

Next, add the following songs to the development database. If students did NOT create their 'play_count' attribute with an underscore, or misspelled another attribute name, these commands will display errors.

```ruby
Song.create(title: "Don't Stop Believin'", length: 251, play_count: 760847)
Song.create(title: "Don't Worry Be Happy", length: 280, play_count: 65862)
Song.create(title: "Chicken Fried", length: 183, play_count: 521771)
Song.create(title: "Radioactive", length: 10000, play_count: 623547)
```

Ask if any students got errors when they ran these commands. Encourage them to connect to the Apple TV and debug the problem as a class. Explain that this hive-mind debugging allows everyone to see different errors and helps all of us figure out why something isn't working how we expected.

To quit tux, use the command `exit`.

### Updating the Controller

Update your controller to pull all songs into an instance variable:

```ruby
class SetList < Sinatra::Base
  get '/songs' do
    @songs = Song.all
    erb :"songs/index"
  end
end
```

Explain that ActiveRecord gives us access to an `.all` method that will return an array of `Song` model objects in the same order we inserted them into the database.

### Creating the View

Explain that we're going to organize our 'views' files to allow us to expand the application to have many different kinds of 'resources' like songs.

Create `/app/views/songs/index.erb` and enter this code:

```html
<% @songs.each do |song| %>
<ul>
  <li><%= song.title %></li>
  <li>Length: <%= song.length %></li>
  <li>Play Count: <%= song.play_count %></li>
</ul>
<% end %>  
```

Run `shotgun` from the command line. Visit `http://localhost:9393/songs` and see your songs.

### Inspecting the Setup

If you have additional time, review the files below.

* `Gemfile`: note that this is where we pull in ActiveRecord and Tux.
* `Rakefile` (find the included rake tasks [here](https://github.com/janko-m/sinatra-activerecord)): provides access to ActiveRecord's Rake commands.
* `config/environment.rb`: Pulls in our models/controllers, and sets some configuration values related to our database and our Sinatra app.
* `config/database.rb`: Tells our app which database to use, and sets some configuration values.
* `config/database.yml`: Tells our app where to look for our databases and how to access them.

## Check for Understanding

* What does a migration do?
* What's the syntax to create a migration from the command line using ActiveRecord?
* How do our models relate to our database?
* What do our models inherit from when we're using ActiveRecord?
* What are some methods that we have available to us when we inherit from ActiveRecord?

## Food for thought

* What happens if you try to create an object when you have a model but not a table?
* What happens if you try to create an object when you have a table but not a model?
