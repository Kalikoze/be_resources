---
title: Feature Testing in RSpec for a Sinatra App
layout: page
---

## Learning Goals

* differentiate between feature tests and model tests
* write user stories
* translate user stories into feature tests using Capybara

## Vocabulary
* feature test
* user story
* "top-down" design
* DSL (Domain Specific Language)

## Repository

You should be able to use the SetList repository that we have been using this week. If you have not yet cloned it down, you can find it [here](https://github.com/turingschool-examples/set-list).

## Warmup

* What are we testing so far in our SetList app?
* What aren't we testing?
* Assuming that our tests will have some setup, execution, assertions, and teardown, what might be included in each phase?

## Lecture

## What are Feature Tests?

* Feature tests mimic the behavior of the user
  * in web apps: clicking things, filling in forms, visiting new pages, etc.
* Just like a user, the feature test should not need to know about underlying code
* Based on "user stories"

## What are User Stories?

* A tool used to communicate user needs to software developers.
* They are used in Agile Development, and it was first introduced in 1998 by proponents of Extreme Programming.
* They describe what a user needs to do in order to fulfill a function.
* They are part of our "top-down" design.

```txt
As a user
When I visit the home page
  And I fill in title
  And I fill in description
  And I click submit
Then my task is saved
```

We can generalize this pattern as follows:

```
As a [user/user-type]
When I [action]
  And I [action] (can be repeated)
Then [expected result]
```

Depending on how encompassing a user story is, you may want to make multiple Waffle cards from a single story.


### Exercise: Create User Stories

Class exercise on verbalizing a user story. Give them several minutes to think of the user workflow for the following things:

* Adding a Horse to HorsesApp
* Signing up for a new account
* Logging into an account
* Viewing only the Horses associated with a specific Jockey

## Creating Our Feature Test

Introduce Capybara, https://github.com/teamcapybara/capybara#using-capybara-with-rspec

- Capybara is a Ruby test framework that allows you to feature test any RACK-based app.
- Provides a DSL to help query and interact with a web page

Introduce the following capybara commands, and explain that these are the primary commands we'll use in mod 2:

* `visit '/path'`
* `expect(page).to have_content("Content")`
* `within ".css-class"  { Assertions here }`
* `within "#css-id"  { Assertions here }`
* `fill_in "identifier", with: "Content"`
* `expect(page).to have_link("Click here")`
* `click_link "Click Here"`
* `expect(page).to have_button("Submit")`
* `click_button "Submit"`
* `click_on "identifier"`
* `expect(current_path).to eq('/')`


### Important Setup Things

Ensure the following lines are present in your `Gemfile` in the `:development, :test` group:

```ruby
gem 'capybara'
gem 'launchy'
gem 'simplecov'
```

Run `bundle install`

Update your `spec/spec_helper.rb` file to include the following:

```ruby
# other 'require' items here

# SimpleCov will help us see which lines of code we've tested or not
require 'simplecov'
SimpleCov.start

require 'capybara/dsl'
Capybara.app = SetList
Capybara.save_path = 'tmp/capybara'

# within the RSpec configuration (this is the same place you have your database cleaner options set):

  c.include Capybara::DSL
```

### Writing the Test

Present the following user story:

```
As an unauthenticated user
When I visit the home page of the site
Then I see a "welcome" message
```

* we're going to be building a new TYPE of test: "feature" test
* this needs its own folder under `/spec`, `spec/features`
* filenames must still end in `_spec.rb`

```bash
$ mkdir spec/features/
$ touch spec/features/user_sees_welcome_message_spec.rb
```

Let's turn that user story into a test using the Capybara methods from above and make it pass.

```ruby
RSpec.describe "an unauthenticated user visits welcome page" do
  context "they visit /" do
    scenario "they see a welcome message" do
      visit '/'

      within "#greeting" do
        expect(page).to have_content("Welcome!")
      end
    end
  end
end
```

### Debugging tools

* use 'binding.pry' in your controller code, model code, tests
* use `save_and_open_page` to debug a view



### What about all of those html files from save_and_open_page?

* `save_and_open_page` generates lots of temporary files
* should be living in your `tmp/capybara` directory based on configuration we added earlier
* add `tmp` folder to `.gitignore` to avoid checking those files into Git
* also add `coverage` to avoid saving coverage files into the repo

This will tell git to ignore everything inside of the `tmp` directory.

## Notes about feature test file organization

* reiterate that filenames MUST end in `_spec.rb`

File/subfolder structure is determined by the team working on the code.

* generally, many tests in one file
* tests grouped under different describe/context blocks
* subfolders will still be found by RSpec
* avoid a single test in a single file, file access on disk will slow down testing

### Pro-Tip

* create /`spec/features` subfolders based on `/app/views` folders
* create test filenames based on 'action', like `index_spec.rb` for all testing that access `index.erb`

**Every team you work on, every job you have, could have a completely different organizational method for test files, so keep that 'growth mindset' and be flexible!**

```
/spec
/spec/features
/spec/features/songs
/spec/features/songs/index_spec.rb # all tests about the index page
/spec/features/songs/show_spec.rb  # all tests about the show page
etc
```

## Wrap Up

* What is the difference between a model and feature test?
* What are the 4 main methods (blocks) for a test? Why/when would you use each one?
* What is the general structure of a user story?


## Workshop

- show students how to open their coverage file
- examine code we've already written that don't have feature testing
- back-fill feature testing to cover code that we've already added:

```
As a visitor to the web site
When I visit '/songs/new'
And I fill in the form completely and click the Submit button
Then I return to the index page
And I see my new song on the page
```

```
As a visitor to the web site
When I visit '/songs'
Then I see all songs in the database
Each song shows its title, length, and play count
```
