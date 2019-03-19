---
title: Forms in Rails
layout: page
---

## Learning Goals

* Explain why we use/need forms
* Understand the role of `form_for`
* Construct a basic form with the help of documentation/references
* Practice building the C portion of a CRUD application with a form

## Vocab
* form_for
* params
* strong params

## WarmUp

* What is the syntax for a form in raw HTML for the following constraints
  * create a new song
  * field to enter title  
  * field to enter song length
  * field to enter play count
  * labels for each field
  * submit button

### Setup

* Open up a working version of our code-along project (eg, `jukebox`)
* **Get familiar with the `/new` route.** What functionality is there?

### User Story

1. ```
    As a user,
    When I visit "/artists/new"
    Then I see a form where I can create a new artist`
    ```

2. ```
    As a user,
    When I visit "/artists/new"
    And I fill in an artist name
    And I click "Create Artist"
    Then I am taken to the show page for the new artist`
    ```

### Tests

- First things first, let's run our test suite since we added our Artists table. Why isn't it passing?
- Answer: Our songs now require a artist, we can't create songs by themselves any more.
- Lets go into our test suite and add a artist to our songs in our test setup.

```ruby
journey = Artist.create(name: "Journey")
song = journey.songs.create(title: "Don't Stop Believin'", length: 231, play_count: 0)
```

Now that we have fixed those errors, lets add a new test:
`touch spec/features/artists/new_spec.rb`

#### New Artist Test

```ruby
new_artist = "Journey"

visit "/artists/new"

fill_in "artist[name]", with: new_artist
click_on "Create Artist"

expect(page).to have_content(new_artist)
```

* show students that we can also use symbol notation in our form `fill_in` instructions in Capybara:

`fill_in :artist_name, with: new_artist`

* either way is fine

### Code Along

Let's run the test and see what happens:

```bash
ActionController::RoutingError:
       No route matches [GET] "/artists/new"
```

So we need to add the route, in fact, lets open up all our artists resources:

```ruby
  #routes.rb
  resources :songs
  resources :artists
```

Now if we run RSpec again, we get a different error:

```bash
     # NameError:
     #   uninitialized constant ArtistsController
```

* create `app/controllers/artists_controller.rb`

```ruby
class ArtistsController < ApplicationController
end
```

* run `rspec`

```bash
The action 'new' could not be found for ArtistsController
```

* add a `new` action method to our controller:

```ruby
class ArtistsController < ApplicationController
  def new
  end
end
```
* run `rspec` and see the error about missing the template
* create `app/views/artists/new.html.erb`:

```html
<%= form_for Artist.new do |f| %>
  <p><%= f.label :name %></br>
  <%= f.text_field :name %></p>
  <p><%= f.submit %></p>
<% end %>
```

* explain that `form_for` is a "form helper"
  * designed to make working with models much easier than raw HTML
  * provides a set of methods for creating forms based on your models attributes
  * generates perfect HTML5 forms, inputs, and labels
  * lots of input field types available like email addresses, phone numbers, calendar dates and times
  * there are other parameters we can pass to `form_for` for styling, but we should avoid any other parameters for now
    - `<%= form_for @artist, :html => { :class => "new_artist", :id => "new_artist" } do |f| %>`

* Why do we need `Artist` object defined at our form's route?
* Why are we calling model code (`.new`) in our VIEW?!
* explain that we don't want to call Class-level methods in our views

* change `Artist.new` to `@artist` and define `@artist` in our controller's `new` method

```ruby
  def new
    @artist = Artist.new
  end
```

* explain: form_for figures out where the browser should submit the form, and which HTTP verb to use, based on the object we pass
* if the object does not have an `id`:
  * form_form will use a POST verb and the action path will be `/resources`
  * the form will start out empty
  * the submit button will say 'Create (resource name)'
  * the action method we need to process the form data will be called `create`
* if the object has an `id`:
  * form_for will use a PUT verb and the action path will be something like `/resources/:id`
  * the form will pre-populate the fields with the data from the database
  * the submit button will say 'Update (resource name)'
  * the action method we need to to process the form data will be called `update`

By creating this form, we should now be further along in our errors:

```bash
The action 'create' could not be found for ArtistsController
```

* edit `app/controllers/artists_controller.rb`

```ruby
class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    binding.pry
  end
end
```

**Turn & Talk**

* run `rspec` and examine the `params` hash
* how does this compare with Sinatra?
* what is new/different that wasn't there in Sinatra?
* what do you think `permitted false` means?

## Strong Params

To filter out the `params` data that we don't need, we can use something called `strong parameters` or `strong params`.

Since ActiveRecord allows us to call `.create()` and pass in a hash, we have to make sure that Rails is only giving us the parameters we want to submit
* for example, we wouldn't want a user to register a new account and hack our form to also send a flag allowing them to become an admin user

Strong Parameters:
- Protects against security threats
- Presumes that no attributes are accessible unless specified in the model

Since this method is not called from any external object, let's make it `private` in our ArtistsController:

```ruby
class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.new(artist_params)
    if artist.save
      # everything saved properly
      redirect_to "/artists/#{artist.id}"
    else
      # we were unable to save, so show the user the `new` form again
      # remember to write a test for this !!!
      render :new
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
```

- `params.require(:artist).permit(:name)` - when the params are examined, we are going to require that a hash key called `artist` is present, and ONLY allow us to create the object if we see that key. When we see that key, we now are going to only allow ("permit") the attributes that we explicitly list there, like `:name`.

### Exercise: Finish Create Artists and Add Create Playlists

- Finish any remaining implementation to make our tests pass.
- Add the functionality for a user to add a new playlist name in a form, including routes
