---
title: Models, Migrations, and Databases
layout: page
---

## Learning Goals

* Write migrations in Rails
* Create one-to-many relationships at the database level using foreign keys.
* Create many-to-many relationships at the database level using join tables with foreign keys.
* Use `has_many` and `belongs_to` to create one-to-many and many-to-many relationships at the model level.

## Vocab

* Migration
* Schema
* Relationships

## WarmUp

* In your own words, what is a migration?
* What are some things that we can do with a migration?
* What is the relationship between a migration, our database, and our schema?
* Research what `rake db:rollback` does. When **wouldn't** I want to use it?

## Models, Migrations, and Databases in Rails

In this lesson, we'll be adding to our new SetList Rails app to demonstrate a one-to-many and a many-to-many relationship.

We'll add two tables (`artists`, and `playlists`) to our database, and connect them to our existing `songs` table.

**Think & Ink**

What might the relationships look like?

Have students sketch this in their journals.



## One-to-Many Relationships

### At the Database Level: Artist

- we want the ability to create artists with names
- let's start with a model test
- create `/spec/models/artist_spec.rb`

### Introduce shoulda-matchers

https://github.com/thoughtbot/shoulda-matchers
- gives us some streamlined syntax to use in testing our validations and relationships.

- Add `gem 'shoulda-matchers', '~> 3.1'` to `group :development, :test` in your `Gemfile`  
- run `bundle install`
- Put the following in `rails_helper.rb`:

```ruby
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

In `artist_spec.rb`

```ruby
require 'rails_helper'

describe Artist, type: :model do
  describe "validations" do
    it { should validate_presence_of :name }
  end
end

```

When we run rspec, we get an error similar to this:

```ruby
# --- Caused by: ---
     # PG::UndefinedTable:
     #   ERROR:  relation "artists" does not exist
     #   LINE 8:                WHERE a.attrelid = '"artists"'::regclass
     #                                             ^
     #   ./spec/models/artist_spec.rb:5:in `block (2 levels) in <top (required)>'
```

* Point out `PG::UndefinedTable` as the clue of what we're missing

### Bottom-Up development: we started with a test, now we create the database table

1. First, we'll create a migration and a model:

`rails g migration CreateArtists name:string`

The migration generator creates a migration and if we follow the working convention for rails the migration will be pre-populated.

Let's look at the migration inside of `db/migrate`:

```ruby
class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

Now create a model file. `touch app/models/artist.rb`.
 Inside `artist.rb` add the code that hooks up our model to ActiveRecord.

```ruby
class Artist < ApplicationRecord
end
```

Let's run rspec again.  

```ruby
Failures:

  1) Artist should validate that :name cannot be empty/falsy
     Failure/Error: it {should validate_presence_of(:name)}

       Artist did not properly validate that :name cannot be empty/falsy.
         After setting :name to ‹nil›, the matcher expected the Artist to be
         invalid, but it was valid instead.
     # ./spec/models/artist_spec.rb:4:in `block (2 levels) in <top (required)>'
```

* important part: `Artist did not properly validate that :name cannot be empty/false.`

Let's add a validation to Artist!

```ruby
class Artist < ApplicationRecord
 validates_presence_of :name
end
```

Run `rspec`


### Songs

**Turn & Talk**

* What's the relationship between song and artist?
* Draw this out in a diagram to help visualize the relationship.

### Start with a test

* continue to add code to `/spec/models/artist_spec.rb` but in a different 'describe'

```ruby
describe 'relationships' do
  it { should have_many :songs }
end
```

When we run this test we get an error something like this:

```ruby
Failures:

  1) Artist relationships should have many songs
     Failure/Error: it {should have_many(:songs)}
       Expected Artist to have a has_many association called songs (no association called songs)
     # ./spec/models/artist_spec.rb:9:in `block (3 levels) in <top (required)>'
```

* point out `Expected Artist to have a has_many association called songs (no association called songs)`
* we're missing the relationship declaration at a database and model level

### Database First

```bash
rails g migration AddArtistsToSongs artist:references
```

* point out: single resource name, references is plural
* examine the migration file:

```ruby
class AddArtistsToSongs < ActiveRecord::Migration[5.1]
  def change
    add_reference :songs, :artist, foreign_key: true
  end
end
```

### Next: define the relationship in the Model

Let's implement some model-level associations using our handy methods.

* `has_many`
* `belongs_to`

**Turn & Talk**

* Why do we need a foreign key at the database level -AND- the `belongs_to` method in the model?
* What do each of these things allow for?

Within `rails console`

- Create a artist.
- Create a song.

Did any students get an error? Maybe `NameError: uninitialized constant Artist`?

- Why are we getting this error?
- What do we need to do to fix this error?
  - Remember that creating a migration is a separate step from *running* the migration.
- Exit `rails console` and run `rake db:migrate`

Hop back into `rails console`:

**Reflection**

- What are different ways we learned in week 1 to associate songs with artists?

Add a relationship validation to `Song` in a `/spec/models/song_spec.rb` test for the `has_many` relationship, make sure the test fails, then add the relationship to the model to make the test pass.

## Student Workshop

## Many-to-Many: Songs and Playlists?

Diagram the relationship for `songs` and `playlists`.

A playlist can have many songs, and a song can be in many playlists. This is the definition of a many-to-many relationship.

* Students will need to create a join table `playlist_songs`.

### WAIT: does it matter what we call the join table??

* we could call it `song_playlists` or `playlist_songs`
* it's really up to you as the developer
* we could name it `happy_fun_times` but that would be confusing

When you're thinking about what to call this table, think about how you're likely to use it most within your application. Since our app's goal will be to show a playlist of songs more often, we're going to call it `playlist_songs`.

### Next Steps

create `spec/models/playlist_spec.rb`

```ruby
require "rails_helper"

describe Playlist, type: model do
  describe "relationships" do
    it { should have_many(:songs).through(:playlist_songs) }
  end
end
```

* Run `rspec`

```ruby
# --- Caused by: ---
     # PG::UndefinedTable:
     #   ERROR:  relation "playlist" does not exist
     #   LINE 8:                WHERE a.attrelid = '"playlist"'::regclass
     #                                             ^
     #   ./spec/models/playlist_spec.rb:5:in `block (2 levels) in <top (required)>'
```

* create a migration to create `Playlists` and `PlaylistSongs`.

```bash
rails g migration CreatePlaylists name:string
```

* run `rspec`

```ruby
# --- Caused by: ---
     # PG::UndefinedTable:
     #   ERROR:  relation "playlist_songs" does not exist
     #   LINE 8:                WHERE a.attrelid = '"playlist_songs"'::regclass
     #                                             ^
     #   ./spec/models/playlist_spec.rb:5:in `block (2 levels) in <top (required)>'
```

* create migration for the join table

```bash
rails g migration CreatePlaylistSongs playlist:references song:references
```

* run `rake db:migrate`

### Create Models

* create the models and their relationships

### Accessing data through that association

How can we get access to another resource through our join table?  

* `has_many :plural_table_name, through: :name_of_joins_table`
* `belongs_to`

Run `rspec` and see what errors you get.


run `rails console` and create a new Playlist

**Turn and Talk**

* What are different ways to associate playlists with songs?
* Need a refresher on associations? Click [here](http://guides.rubyonrails.org/association_basics.html).


## Notes

* common column types: `boolean`, `string`, `text`, `integer`, `date`, `datetime`
* `rake db:migrate` applys our migrations

## WrapUp

* What are three different types of table relationships that you might need to implement? In what scenario would you use each?
* What is the syntax for the following migrations in Rails?
  * Create a table
  * Add a column to a table, with or without a data type
  * Add a reference from one table to another
  * Create a joins table
