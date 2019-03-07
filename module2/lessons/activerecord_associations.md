---
title: ActiveRecord Associations in Sinatra
layout: page
---

## Learning Goals

* set up relationships between tables at the database level using foreign keys in migrations
* set up relationships between tables at the model level using `has_many` and `belongs_to`
* use rake commands to generate migration files, and migrate the database
* modify a migration in order to create or modify a table
* interpret `schema.rb`

## Vocabulary

* primary key
* foreign key
* one-to-one
* one-to-many
* many-to-many

## Warmup

Describe the relationship between the following entities. Consider the relationship from both sides.

* Person and Social Security number
* Owner and pet
* Student and module
* Film and genre
* Book and author

## Lecture

Thus far we've talked about tables in relational databases, but we haven't talked about how to EASILY create the relationships between those tables. These relationships actually exist at two levels:

1. the database
2. the ActiveRecord model

We need both for our app to work correctly.

### Types of Relationships

* One-to-One: e.g. person/social security number
* One-to-Many: e.g. student/module
* Many-to-Many: e.g. Book/author

### One-to-Many/One-to-One

#### Database Level

We create these relationships at the database level with a column holding "foreign keys."

A "foreign" key is a column in a database table, which holds a "primary" key for another table in the database.

Assume we have tables for `students` and `courses`:

`courses` table:

* id
* title
* description

`students` table:

* id
* first_name
* last_name
* `course_id`

The `course_id` in the students table indicates that there is a one-to-many relationship between course and student. More specifically, it indicates that a module has many students and a student belongs to a module. How do we know this?

Sample courses table:

| id | title | description                             |
|----|-------|-----------------------------------------|
| 1  | BE M1 | OOP with Ruby                           |
| 2  | BE M2 | Intro to Rails                          |
| 3  | BE M3 | APIs in Rails                           |
| 4  | BE M4 | JavaScript                              |

Sample students table:

| id | first_name | last_name | course_id |
|----|------------|-----------|-----------|
| 1  | Sal        | Espinosa  | 4         |
| 2  | Ian        | Douglas   | 2         |
| 3  | Josh       | Mejia     | 3         |
| 4  | Megan      | McMahon   | 1         |
| 5  | Dione      | Wilson    | 2         |
| 6  | Brian      | Zanti     | 1         |
| 7  | Mike       | Dao       | 3         |

We can use this same pattern to create a one-to-one relationship, though we would need to validate the uniqueness of the foreign key (e.g. `course_id`) above.

#### Takeaway:

If a table has an `_id` field, that table typically "belongs to" another resource, which we'll cover next.


#### Model Level

We need to provide ActiveRecord with some additional information to use these relationships at the model level.

In the example above, we would need to add the following line to our Course model:

```ruby
has_many :students
```

and the following line to our Student model:

```ruby
belongs_to :course
```

Notice that `:course` is singular, and `:students` is plural.

**This is meant to sound "readable" in English: a course has many students, and a student belongs to one course.**

Adding these lines gives us access to additional methods on our models.

### Creating new content using associations

```ruby
Student.find(1).course
Course.find(3).students
m2 = Course.find(2)
m2.students

# preferred method
megan = m2.students.create(first_name: "Megan", last_name: "McMahon")

# less readable
brian = Student.create(first_name: "Brian", last_name: "Zanti")
m2.students << brian

# preferred approach if the sub-resources are made first:
m5 = Course.create(title: 'mod 5', students: [megan, brian])
```

## Practice and Code-Along

Have students open their "set list" repo, to add a `playlist` table to the app and then create a relationship between existing songs and their playlist.

### Creating the Playlist Table

Create a new migration to create the new table.

```bash
$ rake db:create_migration NAME=create_playlists
```

Modify the migration to name the table and add a `name` field and timestamps:

```ruby
class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

Run `rake db:migrate`

Have students inspect the `schema.rb` file:

```ruby
ActiveRecord::Schema.define(version: 20160217022804) do

  create_table "songs", force: :cascade do |t|
    t.text     "title"
    t.integer  "length"
    t.integer  "play_count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "playlists", force: :cascade do |t|
    t.text     "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
```

### Create the Playlist Model

Add a `playlist` model:

```
$ touch app/models/playlist.rb
```

```ruby
class Playlist < ActiveRecord::Base
end
```

Use Tux to create some new playlists:

```ruby
$ tux
funky_beats = Playlist.create(name: "Funky Beats 2018")
dance_party = Playlist.create(name: "1980's Dance Party")
power_ballads = Playlist.create(name: "Power Ballads")
classic_rock = Playlist.create(name: "Classic Rock")
```

### Playlists and Songs - How do they relate?

Let's assume for now that a song can only be set into a single playlist, which
isn't how we'd typically build this app, this is just an introduction theory
class for now.

If a playlist has many songs, then we'll add a foreign key **on the song** model.
This allows a song to **belong** to a playlist.

A song "belongs to" a playlist, and a playlist "has many" songs. How will we
connect these two tables?


#### Relating the data at the database level first

Our app needs to have these relationships built at both the database and application level.
In reality it doesn't matter which order to do this, but the process we're going to follow
in mod 2 is "database first, model second"

Before ActiveRecord can understand the relationship between two tables, we have
to do some work in the database first.

We'll need to add a `playlist_id` column to the `songs` table. An individual `Song` will always have a reference to one `Playlist` by using the `playlist_id` field.

Let's add the migration to add a `playlist_id` to the `songs` table.

```bash
$ rake db:create_migration NAME=add_playlist_id_to_songs
```

```ruby
class AddPlaylistIdToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :playlist_id, :integer
  end
end

```

Run `rake db:migrate`

Have students take a look at `schema.rb`:

```ruby
ActiveRecord::Schema.define(version: 20160217022905) do

  create_table "songs", force: :cascade do |t|
    t.text     "title"
    t.integer  "length"
    t.integer  "play_count"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "playlist_id"  <--- the new field
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
```

### Associating the Playlist and Song Models in our Application

At a database level, we have what we need for now, but our application still isn't aware that these models are somehow working together.

Let's add an `ActiveRecord` association to our `Playlist` to describe the relationship between a playlist and a song. This will make it easy to find all of a specific Playlist's songs.

```ruby
class Playlist < ActiveRecord::Base
  has_many :songs
end
```

Now, when we have an **instance** of a single `Playlist`, we have access to a method called `songs` on that instance.

```ruby
my_playlist = Playlist.create(name: 'Funky Beats 2018')
# let's imagine some songs were added to that playlist
puts my_playlist.songs
# this would give us an array of all Song objects associated with that playlist.
```

Discuss the SQL that's happening under the hood:

Behind the scenes, ActiveRecord and the database will go through the `songs` table and find all songs where the `playlist_id` attribute is the same as the primary key `id` of the playlist it's being called on.

```
# assume playlist_id is 5

select songs.* from songs where playlist_id=5;
```

Tell students to bookmark [this blog post](https://callahan.io/blog/2014/10/08/behind-the-scenes-of-the-has-many-active-record-association) to dive deeper on this topic.

A song has a DIFFERENT relationship with a playlist. Because a song can only have a single `playlist_id` value, it "belongs" to that playlist, and only that playlist. `ActiveRecord` gives us another association method:

```ruby
class Song < ActiveRecord::Base
  belongs_to :playlist
end
```

This will allow us to get an instance of a single song, and call `song.playlist` to get back the `Playlist` object associated with that song. Behind the scenes, this is searching the database for the playlist that has the primary key `id` of the `playlist_id` column on the `song` instance.

If you have a `has_many` relationship on a model, it is **not** necessary to have a `belongs_to` on another model.


Let's test it out:

```ruby
$ tux
classic_rock_playlist = Playlist.find_by(name: "Classic Rock")
classic_rock_playlist.songs
# returns a collection of associated Song objects
```

**Why is our result empty?**

We've added a `playlist_id` field to each `Song`, but we haven't given that field a value on any of our existing songs.

There are a few different ways to associate your data. If both objects are already created, but we want to associate them, we could do the following:

```ruby
# let's imagine we've already added this song:
# Song.create(title: "Don't Stop Believin'", length: 251, play_count: 760847)
classic_rock_playlist.songs << Song.find_by(title: "Don't Stop Believin'")
...and so on
```

The `<<` shovel operator will automatically build the association for us, through ActiveRecord, to populate the song's `playlist_id`. This isn't super readable, though, so here's another method:

```ruby
Song.find_by(title: "Don't Stop Belivin'").update(playlist_id: classic_rock_playlist.id)
```

The better way, and our preferred way, is to associate data DURING creation:

```ruby
classic_rock_playlist = Playlist.find_by(name: "Classic Rock")
classic_rock_playlist.songs.create(title: "Don't Stop Believin'", length: 251, play_count: 760847)
```

This will create a new `Song` record AND place our playlist's `id` is in the `playlist_id` field in the song's database record.

### Turn and Talk: Finding Songs with no playlist

Have students discuss how they could find songs that don't have an associated playlist yet.

### Updating our View

Let's update our `app/views/songs/index.erb` view to show all the songs in each playlist.

Point out to students that since not all songs have a playlist, we need an 'if' statement
in our view to 'guard' against an exception from happening if a song doesn't have a
playlist assigned to it yet.

```erb
<h1>All Songs</h1>

<div id="songs">
  <% @songs.each do |song| %>
    <h3><%= song.title %></h3>
    <p>Length: <%= song.length %></p>
    <% if song.play_count %>
    <p>Playlist: <%= song.playlist.name %></p>
    <% end %>
    <p>Play Count: $<%= song.play_count %></p>
  <% end %>
</div>
```

Run `shotgun` from the command line, then navigate to `localhost:9393/songs`.

You should see the songs listed along with their respective playlist.

### Extension

What would this look like for a many-to-many relationship? How do you structure the tables in the database? What do the migrations look like to get this done? How are your models impacted? How will this impact data prep in tests or controller methods?

## WrapUp (~30 min)

* How do you associate two resources on the database level?
* How do you associate two resources on the model level?
* How do you associate two resources when doing data prep in a test or controller?
* Compare and contrast a primary key and foreign key. Where do each live?
* Write out the steps you took to create the relationship and display the information for playlists and songs.
