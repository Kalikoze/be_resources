---
title: Review of HTML/CSS Pre-Work
layout: page
---

## Learning Goals

* Explain HTML tags, HTML5 semantic tags
* Explain CSS, what "cascading" means, how to use selectors
* Introduce front-end tools like Bootstrap

## Vocabulary

* HTML semantic tags
* CSS selectors
* layout grid


## Pre-work Questions

Spend some time with students asking them to pull up their pre-work questions,
and which questions apply to HTML, CSS, layout.

## Review HTML lesson

http://backend.turing.io/module2/lessons/intro_to_html

## Review CSS lesson

http://backend.turing.io/module2/lessons/intro_to_css_and_bootstrap

## Introduce "layout.erb" and "yield"

For their Sinatra project, introduce the idea of `/app/views/layout.erb` and how
Sinatra will look for this "magic" filename to share a core layout with all other
ERB files.

Spend some time having students build a `layout.erb` file to load several views
in their TaskManager code. Share ideas with neighbors in the class.

## Review some basics of Bootstrap/Flexbox

There are some notes in the CSS/Bootstrap lesson about Bootstrap and Flexbox,
but spend some time discussing the columns/grid layout idea. Show them how to
load these assets into their `layout.erb` in the `<head>` block of their HTML.

Have students also implement Bootstrap 4:

```html
<head>
  ...
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  ...
</head>

<body>
  ...
  <%= yield %>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
```

Use your discretion about whether to explain why these script tags are added at
the end of the `<body>` in the layout.
