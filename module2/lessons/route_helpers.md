---
title: Rails Route Helpers and View Helpers
layout: page
---

##  Learning Goals

* Understand the 5 pieces of information `rake routes` gives us.
* Use a route helper to easily refer to a relative and absolute path.
* Understand the difference between what `_url` and `_path` return when combined with a routes prefix.
* Find a routes prefix and use that prefix to build a helper.
* Understand how to use link_to and button_to view helpers.

## Vocabulary

* routes
* path helpers
* url helper

## WarmUp

* How have you been sending a user to another route, say in your tests or in a controller?
* What is the syntax for hand rolling a route?
* What shortcut does Rails give us to create multiple routes at once?

## Routes

With your partner, take a look at the entries in the table that `rake routes` gives you and fill out the table below in your notebook or on your computer.

| Table Heading | Prefix | Verb | URI Pattern | Data Collection | Controller#Action | Redirect or Render? | View | Path Helper | URL Helper |
| photos | photos | get | /photos | Photo.all | photos#index | render | index | photos_path | photos_url |

Fill in your answers [here](https://docs.google.com/spreadsheets/d/1AGjUE49UJajPEQHvh3plKjaem5RAGvuv5SNjZzvjD9U/edit#gid=0).


## Path Helpers

Open the code-along project, change `config/routes.rb` to add a new resource like `resources :albums` and run `rake routes`

```text
$ rails routes
    Prefix Verb   URI Pattern                Controller#Action
    albums GET    /albums(.:format)          albums#index
           POST   /albums(.:format)          albums#create
 new_album GET    /albums/new(.:format)      albums#new
edit_album GET    /albums/:id/edit(.:format) albums#edit
     album GET    /albums/:id(.:format)      albums#show
           PATCH  /albums/:id(.:format)      albums#update
           PUT    /albums/:id(.:format)      albums#update
           DELETE /albums/:id(.:format)      albums#destroy
```

- Rails will use the "prefix" column to build our "path helpers".
- Any row that does not include a "prefix" uses the same "prefix" as the line above it.

Alter a test to include `binding.pry`
- show students what gets echoed out when you use `albums_path` vs `albums_url`
- notice that the "path helpers" don't have any HTTP verb associated
  - Rails ONLY turns those prefixes into their corresponding URI patterns

#### Large group share

* What is the path helper for each CRUD action? Which ones take an argument?
* What is the "url helper" for each? How do these compare to the "path helpers?"

### Passing Parameters to Path helpers

- What happens if we forget to pass a parameter to a path helper that needs it?
- What error do we see?
- Practice reading the ENTIRE error message to understand what's going on
  - notice that the error message looks like it's telling us we're missing a route in `config/routes.rb` but if you read the ENTIRE message it tells us clearly that our path helper is just missing a parameter

### Using `rake routes` as a debugging tool

We can use `rake routes` as a debugging tool for our path helpers:

- examine the `edit` path helper for an album:

`edit_album GET    /albums/:id/edit(.:format) albums#edit`

- point out that `rake routes` tells us that this needs an `:id` value, and also tells us ahead of time that this will be accessed as `params[:id]`

Add a new route to `config/routes.rb`:
- `get '/albums/:album_id', to: 'albums#show'`
and run `rake routes` again
- `GET    /albums/:album_id(.:format) albums#show`

Again, `rake routes` shows us a dynamic URI parameter, called `:album_id`, and we would also access this as `params[:album_id]`

**remove custom routes for albums**


#### Independent Practice

Update your test suite to use path helpers instead of direct paths (i.e. "/songs")

Explain that we want students to use only path helpers going forward, no exceptions

#### Partnered Workshop

Research how to use link helpers with your path helpers to create a navigation bar. This navigation bar would contain a link that leads to all songs and one that leads to all artists. It also includes a link to go home. Your home would show links to create a new song or artist.

#### Partnered Share

Turn to a new partner and share out how you used path helpers to dry up your code.

### WrapUp

* What does artists_path evaluate to outside of a link helper?
* What does artists_url evaluate to outside of a link helper?
* What does artist_path(@artist) give you? Why do you need to pass it @artist? Which other routes need you to pass a resource?
