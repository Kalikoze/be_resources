---
title: Nested Resources in Rails
layout: page
---

# Nested Resources

## Learning Goals

- Understand how to use "nested resources" in Rails
- Understand when you should use nested resources

## Warm Up

Create a table containing all of the HTTP verbs, URI patterns, and controller actions that Rails gives you when you have the following in `config/routes.rb`:

```ruby
resources :muffins
```

## Background, Turn & Talk

Read [this](http://guides.rubyonrails.org/routing.html#nested-resources) section of the Rails routing documentation and discuss with the person next to you.

## Introduction

At a high level, we use "nested" resources when we have an interdependence between resources.

For example, we saw the other day that in our tests we cannot create a song any more without creating an artist first.

## Examples

```
GET  /artists/1/songs
GET  /artists/1/songs/new
POST /artists/1/songs
```

**Group Discussion**

What are some examples of a 'resource' you could nest in your paired project:

- in book club, creating a 'review' requires us to know a book
- if we had to build out CRUD functionality for TV Specials in Laugh Tracks, we would need to use the comedian to create the special

## In short

In short, any time we need to know one resource in order to create a different kind of resource, that's a good signal to use nested resources.


## How do we Create Nested Routes?

Indentation and a do/end marker!

* edit `config/routes.rb` to remove all "only" flags for a moment

```ruby
resources :artists do
  resources :songs
end
```

* Run `rake routes` -- what's different now?

Point out the nested resource:

```
      Prefix Verb URI Pattern                         Controller#Action
artist_songs GET  /artists/:artist_id/songs(.:format) songs#index
```

- our "prefix" has both resources in the name
- URI pattern automatically renames a dynamic parameter to `:artist_id`
- calling our path helper like `artist_songs(journey)` will resolve properly


## Shallow Nesting

* change `config/routes.rb` to add the "shallow: true" flag
```ruby
resources :artists
  resources :songs, shallow: true do
end
```

* Run `rake routes` again.

**Turn & Talk**

* How does this differ from what was generated without `shallow: true`?
* When we would we want it one way or the other?

Point out to students that with "shallow" nested routing, we still need an artist to create a song, but that
we have friendlier URI paths for things like a song show path:
```bash
$ rails routes
         Prefix Verb   URI Pattern                             Controller#Action
   artist_songs GET    /artists/:artist_id/songs(.:format)     songs#index
                POST   /artists/:artist_id/songs(.:format)     songs#create
...
           song GET    /songs/:id(.:format)                    songs#show
                DELETE /songs/:id(.:format)                    songs#destroy
```

## `form_for` with an un-nested resource

Open `app/views/artists/new.html.erb`

`form_for` uses an object passed to it as an argument to determine:

* Whether to render a 'new' form or an 'update' form
* Whether the fields in the form correspond to attributes on the object
* What route to use when sending the information when a user hits submit

## `form_for` with NESTED Resources

Explain:

* Need to pass **BOTH** the initial resource as well as the nested resource (eg, both `artists` and `songs`)
* Will provide them in an array as an argument
  * the array HAS to be in the correct order!
  * `rake routes` as a debugger will show us in the prefix what order these need to be!
* Need to update both our controller and our view

## Practice

- You should have a test already to see the form for a new song.
- Now let's create a new song with an artist.

Based on what we know about nested routes, let's start here:

* create `spec/features/songs/new_spec.rb`
* note that our test setup needs to create the artist to whom we're assigning this new song

```ruby
artist = Artist.create(name: "Journey")
title = "Don't Stop Believin'"
length = 231

visit new_artist_song_path(artist)

fill_in :song_title, with: title
fill_in :song_length, with: length

click_on "Create Song"

new_song = Song.last

expect(current_path).to eq(song_path(new_song))
expect(page).to have_content(title)
expect(page).to have_content(length)
expect(page).to have_content(artist.name)
```

**Workshop Time**

Give students some time to build out the controller code and view code to add this functionality

- use `rake routes` as a debugging tool, which routes do we need to add/use?
- which HTTP verb do we use to create a resource?
- follow TDD practices

**Reflection & Review**

- What is in your controller? What is in your view?
- We previously wrote a test to see a new form for a new song but did not actually create a new song.

Point out in `rake routes` output that we use the POST verb to create a new song
- we also see in here that our route needs a dynamic parameter called `:artist_id`
- since our prefix is borrowed from a previous line, we see `artist_songs` is our prefix, so
  that also tells us that we needed both an artist and a song to be passed to form_for IN THAT ORDER

```bash
  POST   /artists/:artist_id/songs(.:format)     songs#create
```

Our controller should only have an empty `new` method:
- `app/controllers/songs_controller.rb`
  ```ruby
  def new
    @artist = Artist.find(params[:artist_id])
    @song = Song.new
  end
  ```

- `app/views/songs/new.html.erb`:
  ```html
  <h1>Create a New Song</h1>

  <%= form_for [@artist, @song] do |f| %>
    <p><%= f.label :title %></br>
    <%= f.text_field :title %></p>
    <p><%= f.label :length %></br>
    <%= f.number_field :length %></p>
    <p><%= f.label :play_count %></br>
    <%= f.number_field :play_count %></p>
    <p><%= f.submit %>
  <% end %>
  ```

Run `rspec` and adjust our `SongsController` so we can process the form input in a `create` action method

in `app/controllers/songs_controller.rb`:

```ruby
def create
  artist = Artist.find(params[:artist_id])
  song = artist.songs.create(song_params)
  redirect_to song_path(song)
end
```

- We should have a passing test!!!

#### Bonus Points

Have the song page show the artist name!


**Check your work in Development mode**

Have students run `rails console` to make a new artist and then run `rails s` to visit `/artists/1/songs/new` and see their new user experience.

---

# Mixing Nested and Non-Nested Routes

What if we want to see a list of all songs?

Because we have `songs` nested under `artists`, we've lost our `/index` path, so not every test is going to pass!

in `config/routes.rb`

```ruby
resources :artists
  resources :songs, shallow: true do
end

resources :songs, only: [:index]
```

Visit `/songs` and you should see all songs.

## Security!

Remind students to replace the missing 'only' commands in your routes file so we don't expose routes to malicious users!

---

# Checks for Understanding

Turn and talk to your neighbor and discuss:

* When would you use a nested resource?
* How do you nest a resource in your routes file?
* How does that change your routes?
* What does it mean to use shallow nesting? Why would you do this?
* What changes do you need to make in your controller when you nest a resource?
