---
title: Model Testing in RSpec for a Sinatra App
layout: page
---

## Learning Goals

* set up RSpec within a Sinatra web app
* test model methods and validations using best practices in RSpec

## Vocab

* RSpec
* DSL
* Model Testing
* Bottom-Up Testing

## Repository

Using [Set List](https://github.com/turingschool-examples/set-list)

## Warmup

1. Have students read https://robots.thoughtbot.com/four-phase-test from Thoughtbot, about the four-phase test design.
2. What are the 4 main parts of a strong software test?
  - Setup, Exercise, Assertions, Teardown (SEAT)

## Reflection

Encourage students to take some time to journal how this approach worked in Minitest


## Intro to RSpec

* `describe` blocks as an outside wrapper to group related tests: use for *things*
* `context` blocks to add... context (but technically the same method as `describe`): use for *states*
* `it` blocks to indicate an outcome (something to test)
* `scenario` blocks to indicate an outcome (something to test)
* `expect` instead of assert, lots of "chained" instructions we can use (discussed later)

## Bottom-Up

- Model testing describes our "bottom-up" design
- Shows other developers how our model code should work within our application
- Not meant to reflect how an end user would use our code


## Code-Along

### Setting up Model Tests

**STEP 1**: Install `rspec`

Add the following line to the block labeled `group :development, :test` in your `Gemfile`

```ruby
  gem 'rspec'
```

Run `bundle install`.

**STEP 2**: Configuration Files

Your `.rspec` file can contain certain flags that are helpful when you run your tests.
* `atom .rspec`

```
--require spec_helper
--format=documentation
--order=random
```

Read this for more information: http://stackoverflow.com/questions/1819614/how-do-i-globally-configure-rspec-to-keep-the-color-and-format-specdoc-o


* `atom spec/spec_helper.rb`

Add the following to your `spec_helper.rb` file:

```ruby
require 'bundler'
Bundler.require(:default, :test)
require File.expand_path('../../config/environment.rb', __FILE__)
```

Explain to students that the 'environment' line makes all controllers and
models available to their tests

First this will require the `bundler` gem, then use that gem to require the other gems we have loaded in the `default` and `test` groups in our Gemfile.

Finally, we require the `environment.rb` file, which loads up the rest of our application so that we can use it in our tests.

**STEP 3**: Initial Model Test

Files must end in `_spec.rb`

* `atom spec/models/song_spec.rb`


### Create a Model Spec

In `spec/models/song_spec.rb`:

- many ways we could use RSpec `describe` and `context` blocks to organize our tests
- generally you want to group tests based on what is being tested
- where's what we're going to use for today:

```ruby
RSpec.describe Song, type: :model do
  describe "Class Methods" do
    describe ".total_play_count" do
      it "returns total play counts for all songs" do
        Song.create(title: "Song 1", length: 180, play_count: 3)
        Song.create(title: "Song 2", length: 220, play_count: 4)

        expect(Song.total_play_count).to eq(7)
      end
    end
  end
end
```

### Student Research & Reflection

* have students read best practices in http://www.betterspecs.org/#describe
* discuss use of '.' in the describe
* discuss wording of the 'it' test
* discuss the space between the created songs and the expectation

### Run all tests

Run `rspec` at command line.


### Make it Pass

Explain to students that we can follow these errors to "drive" our development effort moving forward.

* Ask for brief examples of how RSpec errors differ from Minitest.


### Explaining the output:

```ruby
Randomized with seed 28022
```

RSpec will run our tests in a randomized order (we told it to in `.rspec`) and we can use `rspec --seed 28022` to run things in that same random order to see why a test passes sometimes but not other times. This generally won't happen in mod 2, but is helpful to explain in passing.

```
Song
  Class Methods
    .total_play_count
      returns total play counts for all songs (FAILED - 1)
```

This block is from `--format=documentation` and is more friendly to read than a string of `.........` dots across the screen. The strings come directly from the 'describe'/'it' definitions.

Now skipping ahead to the end of the output:
```
Finished in 0.02851 seconds (files took 0.80607 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/models/song_spec.rb:5 # Song Class Methods .total_play_count returns total play counts for all songs

Randomized with seed 28022
```
This last part shows us how many tests ran, how many failed, and how we can isolate a single test by copying that `rspec ./spec/...` line including the line number

Now the heart of the error itself. Spend lots of time breaking this down for students:
```
Failures:

  1) Song Class Methods .total_play_count returns total play counts for all songs
     Failure/Error: expect(Song.total_play_count).to eq(7)

     NoMethodError:
       undefined method `total_play_count' for #<Class:0x007fea2ab582d8>
     # .../.rvm/gems/ruby-2.4.0/gems/activerecord-5.1.4/lib/active_record/dynamic_matchers.rb:22:in `method_missing'
     # ./spec/models/song_spec.rb:9:in `block (4 levels) in <top (required)>'
```

* The `Failure/Error:` line prints the line of code that caused the error
* Teach students to read the ENTIRE error
* Describe that reading part of the error can sometimes lead to incorrect hypothesis of the root cause
* Point out how to read the tech stack to see how we got to this error
* Explain what this error is actually telling us

```ruby
NoMethodError:
       undefined method 'total_play_count' for #<Class:0x007fea2ab582d8>
```

###  Add that method into our Song model.

Point out that all we need to build right now is the specific thing that the test is telling us what is missing. In this case, we were missing a method name, so the only thing we need to add to our code is the skeleton of that method call and NOTHING ELSE.

It's important to point out to students that jumping ahead and implementing work you know/think you're going to need can sometimes cause other problems.

Add within `app/models/song.rb`
```ruby
def self.total_play_count
end
```

Run `rspec` again:

```ruby
     Failure/Error: expect(Song.total_play_count).to eq(7)

       expected: 7
            got: nil
```

Now we need to tell our code to go look up the value from our database:

In `app/models/song.rb`

```ruby
def self.total_play_count
  sum(:play_count)
end
```

* `sum` is an ActiveRecord method
* it sums a particular column of values in a single table within our database
* it can't sum things across different tables
* the symbol we pass (`:play_count`) is the name of the attribute in the table

### Turn and Talk:

How does it know that we're trying to call this method on our `songs` table?

### Discussion

The implicit receiver of the `sum` method is `self` in the method definition, which in this case is the class Song.

**This is an example of a Class Method -- ActiveRecord calls on the entire class are usually used for performing work on EVERY row in the Class' table**

### Moving on

run `rspec` again

```ruby
       expected: 7
            got: 1972034
```

The sum operation works, but ask students why the number is beyond what we expected to happen

Run `rspec` again and point out that the 'got' count is higher every time it runs

* Explain that our testing is writing data into our 'development' database because we're not done with RSpec configurations
* we call this "polluting" a database
* Every time we run our tests, we want to start with a fresh slate, to existing data
* We need to have two different databases: one for testing purposes and one for development purposes

Explain that "shotgun" doesn't set up a particular environment, and the app defaults to "development" mode.

We need to configure RSpec to run in 'test' mode.

We'll use an environment variable: `ENV["RACK_ENV"]`.

* Remind students about the Rack pre-work
* Sinatra and Rails are built on top of Rack
* Sinatra and Rails still use some Rack environment settings

In `spec_helper.rb` add the following at the very top of the file:

```ruby
ENV["RACK_ENV"] = "test"
```

* if students want to know how/why this happems point them to `config/environment.rb` and `config/database.rb`

The next line is for Sinatra only, and that students need to do this once

```
$ rake db:test:prepare
```
* this should create and run the migrations for a test database
* students will need to re-run this next command if they ever 'drop' their database

After running this line, all `rake db:migrate` commands will apply new migrations to the test database as well as the development database.

### Moving On

Run `rspec` -- note that all tests are passing.

Run it again, NOW what's happening??

Re-visit the SEAT anagram, review the Model test we wrote, and discuss which step we're missing.

We're missing Teardown.

* we need to clear out our database after each test
* we could put some teardown into each test

It's better to make teardown happen for all tests in RSpec configuration and using Database Cleaner
* https://github.com/DatabaseCleaner/database_cleaner

In the test/development section of your `Gemfile` add the following line:

```ruby
  gem 'database_cleaner'
```

Run `bundle install`

Then in your `spec_helper.rb`, add the following AFTER your current `require` lines:

```ruby
DatabaseCleaner.strategy = :truncation

RSpec.configure do |c|
  c.before(:all) do
    DatabaseCleaner.clean
  end
  c.after(:each) do
    DatabaseCleaner.clean
  end
end
```

Students may ask about the difference between `:each` and `:all`.

* `before(:all)` ensures that our database is scrubbed before we run our tests whether we're running one test or all tests
* `after(:each)` ensures that at the end of every test that the database is scrubbed for the next test

run `rspec` to see passing tests


### Testing Validations

Data we put into the database should also be 'validated' to make sure what the user is trying to put into the database matches the data type in the table, or ensure that we're including data we determine is 'required'.

In `spec/models/song_spec.rb`:

```ruby
describe "Validations" do
  it "is invalid without a title" do
    song = Song.new(length: 207, play_count: 2)

    expect(song).to_not be_valid
  end
end
```

Notice here that we've left out the `title` attribute.

run `rspec`

```ruby
  1) Song Validations is invalid without a title
     Failure/Error: expect(song).to_not be_valid
       expected `#<Song id: nil, title: nil, year: 207, play_count: 2, created_at: nil, updated_at: nil>.valid?` to return false, got true
     # ./spec/models/song_spec.rb:7:in `block (3 levels) in <top (required)>'
```

RSpec is telling us that it expected `.valid?` to return `false` when creatig an object.
ActiveRecord, though, is still creating the object for us, which is why our test is failing.


### Writing Validations in the Model

ActiveRecord provides a `validates` method that takes a column attribute name, plus options.

Go into the `app/models/song.rb` model and add the following line at the top:

```ruby
  validates :title, presence: true
```

There are additional options that can look at things like string length or whether a numeric field is a positive value, etc..

If all we need is just a requirement that a user has typed SOMETHING in the field, we can shortcut this to:
* `validates_presence_of :title`
* can add multiple columns like `validates_presence_of :name, :address, :city`

Run `rspec` and see passing tests.


## Recap

* Review what you wrote down earlier about how Minitest did SEAT, how is that different than RSpec?
* What goes into your `spec_helper` in a Sintra app? What does each piece do?
* Create a Venn Diagram comparing MiniTest & RSpec. Think about set up of methods and how you check expected outcomes.


## Workshop

* Have students work in pairs
* test for and then implement `.average_play_count` class method
* test that a song cannot be created without a `title` or `length`


## Extra time, or homework

* Take a look at the [BetterSpecs](http://www.betterspecs.org/) community guidelines.
* Check out the [RSpec Documentation](http://rspec.info/documentation/): For now you'll likely be most interested in the `rspec-core`, and `rspec-expectations` links.
