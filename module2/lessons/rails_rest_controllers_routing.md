---
title: REST, Controllers, Routing in Rails
layout: page
---

## Pre-work

Read [this article](https://www.theodinproject.com/courses/ruby-on-rails/lessons/routing).

## Learning Goals

* explain the purpose of the `routes.rb` file
* interpret the output of `rake routes`
* explain the connection between `routes.rb` and controller files
* create routes by hand
* create routes using `resources :songs`

## Vocabulary

- `routes.rb`
- `rake routes`
- CRUD
- MVC

## Warm Up / Review

- What is REST?
- How are routes applied in Sinatra?
- Where do our routes live?
- How is MVC implemented in Sinatra?

## Reminder - REST

* Representational State Transfer is a web architecture style
  * Aims to produce Verb/URI combinations that are descriptive
  * Let the software determine what to do from there
* [Representational State Transfer](https://en.wikipedia.org/wiki/Representational_state_transfer) on Wikipedia
* [What is Rest?](http://www.restapitutorial.com/lessons/whatisrest.html) from REST API Tutorial

## Turn and Talk

- have students summarize REST and ask why we use REST, what's an example of a RESTful route, a non-RESTful route, etc

## Routes + Controllers in Rails

"Convention over configuration"

## Introduction

- we're going to rebuild our "set list" application in Rails and make it easier/better to build and manage
- this codebase will be used through the rest of mod 2
- instructors will regularly push lesson code to a repo that you can clone/review

## Rails New

```bash
$ rails new set_list -T -d="postgresql" --skip-spring --skip-turbolinks
```

- `-T` - rails has minitest by default, when this flag is used, `gem 'minitest'` will not be in the Gemfile
- `-d="postgresql"` - by default, Rails uses `sqlite3`. We want to tell it to use `postgresql` instead because platforms we use for deploying our projects will expect to use a PostgreSQL database.
- `--skip-spring` - Spring is a Rails application preloader
  - we don't use or rely on this in mod 2 at all and should be skipped completely
- `--skip-turbolinks` - Enables faster page loading through JavaScript
  - we don't use/rely on this at all in mod 2 and can cause significant testing problems

## Research & Reflection

- Take a few minutes to explore what `rails new` generates.
- Which parts are the same as a Sinatra application?

## Start with a Feature Test

Let's install RSpec and dream drive our application!

### Add gems to Gemfile and run `bundle install`

  - `gem "rspec-rails"`, Rails-specific version of RSpec
  - `gem "capybara"`, allows us to interact with the DOM, fake browser
  - `gem "launchy"`, save_and_open_page debugger
  - `gem "pry"`, Ruby debugging tool

### Install and set up RSpec

```bash
$ rails g rspec:install
```

Ask students to compare how this differed from RSpec setup in Sinatra.

What new files/directories did this generate?

- `./.rspec` file
- a whole `./spec/` directory
- `./spec/rails_helper.rb` is the new `spec_helper`, holds rails-related configuration
- `./spec/spec_helper.rb` - where we keep all specs that don't depend on rails


### Now lets write a test!

`$ atom spec/features/songs/index_spec.rb`

```ruby
require "rails_helper"

RSpec.describe "user_index", type: :feature do
  it "user_can_see_all_songs" do
    song_1 = Song.create(title: "Don't Stop Believin'", length: 303, play_count:123456)
    song_2 = Song.create(title: "Never Gonna Give You Up", length: 253, play_count:987654321)

    visit "/songs"

    expect(page).to have_content(song_1.title)
    expect(page).to have_content("Play Count: #{song_1.play_count}")
    expect(page).to have_content(song_2.title)
    expect(page).to have_content("Play Count: #{song_2.play_count}")
  end
end
```

### Dream-Driven Development

Take a tangent here, and discuss how this test is really "dreaming" about what our app should do, what its end-user behavior should be looking for -- how do we want the user to interact with our page, what content should they see, etc.

### Moving On

Run `rspec`

```bash
ActiveRecord::NoDatabaseError:
  FATAL:  database "set_list_test" does not exist
```

**Prompt: How do we create a new database?**

Run `rake db:create`

**Now we run our tests again**

Run `rspec`

See an error `Uninitialized Constant Song`

Have students identify different parts of the error:
- what is the line of code that cause the error?
- where is that link of code found in our Rails app?
- how do we isolate just this one test

Since our test is calling `Song.create` and that's the line of code that doesn't work, that means we need to make a model.

Create `app/models/song.rb`

```ruby
class Song < ApplicationRecord
end
```

We inherit from ApplicationRecord, which coincides with a file called `application_record.rb` which inherits from ActiveRecord.

```ruby
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
```

Mod 2 doesn't really get into shared behavior at the model level, but this is where we could put some shared code, attributes, validations, etc if we needed to.

Run `rspec`

```bash
ActiveRecord::StatementInvalid:
   PG::UndefinedTable: ERROR:  relation "songs" does not exist
```

ActiveRecord failures indicating "PG" usually point to a database-level error in PostgreSQL. In this case it's telling us that we have an "undefined table".

We made an empty migration file in Sinatra using `rake db:create_migration NAME=create_table`

In Rails we're going to do this in a different way:

```bash
$ rails g migration CreateSongs title:string length:integer play_count:integer
```

**Explain that "rails g" is short for "rails generate" and that there will be other shortcuts like this we'll use in the future**

Examine the migration file in `/db/migrate/` -- how does it look different than what we had to do in Sinatra?

Have students add a "timestamps" entry to the migration.

Run `rake db:migrate`

Run `rspec`

```bash
Failure/Error: visit "/songs"

     ActionController::RoutingError:
       No route matches [GET] "/songs"
     # ./spec/features/user_sees_all_songs_spec.rb:8:in `block (2 levels) in <top (required)>'
```

Now we need to go build some routing in Rails. This isn't done in the controller code any more, we have a configuration file to hold all of these now: `config/routes.rb`

```ruby
Rails.application.routes.draw do
  get '/songs', to: 'songs#index'
end
```

From the command line, we can see which routes we have available: `$ rake routes`. Explain that `rails routes` generates the same data and some instructors prefer `rails routes` but both do the same thing.

We should see this output:

```
Prefix Verb URI Pattern      Controller#Action
songs GET   /songs(.:format) songs#index
```

This means whenever a `get` VERB is used in a request to the path `/songs`, the application will look at a "Songs" controller, and look for an "action method" in there called `index`.

**Don't mention the "prefix" column yet, that's a class we do later this week**

Tell students to ignore the `(.:format)` fragment of the URI pattern, explain that they'll use it more in Mod 3 but is generally used to retrieve resource data in different formats like XML, CSV, etc

Run `rspec`

```bash
Failure/Error: visit "/songs"

   ActionController::RoutingError:
     uninitialized constant SongsController
```

Our error is still complaining about the same line of code, `visit "/songs"` but the error output is different.

**TDD is now telling us step-by-step what to go build next.**

Create `app/controllers/songs_controller.rb`

Explain that Rails is VERY particular about its file-naming conventions. Controllers are generally *pluralized* names of a resource, where the model was *singularly* named.

```ruby
class SongsController < ApplicationController
end
```
You can explain ApplicationController inheritance if you want at this stage similarly to ApplicationRecord.

Notice that the name of the class is pluralized just like the name of the file (`songs_controller.rb` => `class SongsController`), but the file is "snake-cased" (with the underscore character) and the class name is "camel-cased" with mixed capitalization.

Emphasize that this is all we need to make that part of our test pass, let's continue to use TDD.

Run `rspec`

```bash
The action 'index' could not be found for SongsController
```

Let's add the index method:

```ruby
class SongsController < ApplicationController
  def index
  end
end
```

Again, this is all we need to make the test pass.

Run `rspec`

```bash
ActionController::UnknownFormat:
    SongsController#index is missing a template for this request format and variant.

    request.formats: ["text/html"]
    request.variant: []

    NOTE! For XHR/Ajax or API requests, this action would normally respond with 204 No Content: an empty white screen. Since you're loading it in a web browser, we assume that you expected to actually render a template, not nothing, so we're showing an error to be extra-clear. If you expect 204 No Content, carry on. That's what you'll get from an XHR or API request. Give it a shot.
```

**Without a specific command in our action method to render a specific ERB file, Rails will automatically look for a view folder with the same name as the controller (`/app/views/songs` folder), then look for a view with the same name as the action method (`index.html.erb`).**

The actual error output from RSPec tells us that it's trying to find an HTML-based template, which is the `:format` bit we saw in `rake routes`. Since this is the default format, and the only format we get into in Mod 2, we will name all of our view files as `.html.erb`

within `app/views/songs/index.html.erb`
```html
<h1>All Songs</h1>

<% @songs.each do |song| %>
  <h2><%= song.title %></h2>
  <p>Plays: <%= song.play_count %></p>
<% end %>  
```

**Point out to students that we're not testing for the "All Songs" heading on the page**

- generally we don't test for "static" content on the page that never changes
- we really only need to test for "dynamic" content that comes from the database or a calculation

Run `rspec`

```bash
undefined method 'each' for nil:NilClass
```

Just like Sinatra, we need to declare an instance variable `@songs` for our view/template.

Within `app/controllers/songs_controller.rb`
```ruby
class SongsController < ApplicationController
  def index
    @songs = Song.all
  end
end
```

Run `rspec` and the test should be passing.

## Rails Server

Start up your rails server: `rails server` or `rails s` from the command line.

Navigate to `localhost:3000/songs`

The page should load successfully, but you and the students should see nothing on the page.


#### Check for Understanding

Why don't we have any data on our page even though we created data in our test?

## Rails Console replaces "tux"

Let's add some songs in `rails console` and start the server again to see our songs!

```
Song.create(title: "Don't Stop Believin'", length: 251, play_count: 760847)
Song.create(title: "Don't Worry Be Happy", length: 280, play_count: 65862)
Song.create(title: "Chicken Fried", length: 183, play_count: 521771)
Song.create(title: "Radioactive", length: 10000, play_count: 623547)
```

### Workshop

Have students implement feature testing (not implementation code!) for the user stories in the lesson plan.

Have them refer to the [feature testing in Sinatra](http://backend.turing.io/module2/lessons/feature_testing_in_rspec_for_a_sinatra_app) lesson for the Capybara commands we
want them to be familiar with. It's in a section called "Creating Our Feature Test"

Encourage the use of `pry` to look at `params` and `save_and_open_page` to look at resulting pages.


### Using Resources in the Routes File

**Turn & Talk**: What are the common CRUD actions? They match up to eight routes. Can you name all of them?

Rails is all about "convention over configuration", it has an easy way to create all eight RESTful routes at one time via a shortcut.

We can use the `resources` command in `config/routes.rb`:

```ruby
Rails.application.routes.draw do
  resources :songs
end
```

Now let's look at the routes we have available: `$ rake routes`.

Point out how the verb/URI combination line up with the CRUD actions.

Any methods with `:id` REQUIRE that an id to be part of the URI path.

These values are dynamically added (like viewing the seventh song via `/songs/7`).

#### Questions:

* What actions (methods) would we need in our `SongsController` in order to handle the tests we just wrote?
* Which actions would render a form and which actions would redirect?

Don't worry about putting `render :text` in these actions. You won't be able to test out `post`, `patch`, `put`, or `delete` by navigating in your browser.

If you add a whole bunch of `resources :things` to your routes file, it will generate these eight routes for all of the things you've specified:

```ruby
Rails.application.routes.draw do
  resources :songs
  resources :artists
  resources :playlists
end
```

Now try `$ rake routes`.

### Security!

- What if our application doesn't implement certain routes?
- What happens if we run `rails s` and access a GET endpoint where we don't a controller or action method yet?

Explain the use of `only` and `except` inside `config/routes.rb`:

```ruby
Rails.application.routes.draw do
  resources :songs, only: [:index, :show]
end
```

**Turn & Tall** What do you see when you run `rake routes` now?

It is **STRONGLY** encouraged to use `only` so that you don't accidentally expose endpoints where your application is not ready to accept requests.

If you implement most CRUD endpoints, you can use `except` instead to build all other endpoints "except" the ones you list.


### Other things

* We can add a route for a "home page" of our app (a URI path of just '/') with:

```ruby
Rails.application.routes.draw do
  root 'songs#index'
end
```

This will direct any get request to `http://localhost:3000/` to the `index` action within `songs_controller.rb`

## Wrap Up Questions

- How are routes applied in Rails?
- Where do our routes live?
- How is MVC implemented in Rails?

### Homework

* [Routes and Controllers Assignment](https://github.com/turingschool/challenges/blob/master/routes_controllers_rails.markdown)
