---
title: Book Review
layout: page
---

Clone down [book_review](https://github.com/turingschool-examples/book_review)

We will be using:
1. The Open Library API:
  - Book search - __search for book by title__ endpoint: `http://openlibrary.org/search.json` include query params: title=<book_title_here>
  - This api does not require an API key


2. New York Times Book API:
  - Sign up for API key [here](https://developer.nytimes.com/get-started)
  - Once logged in, register your app and select the Books API
  - Reviews - __search for reviews by book title endpoint__: `https://api.nytimes.com/svc/books/v3/reviews.json`
  - [Books API Reviews Docs](https://developer.nytimes.com/docs/books-product/1/routes/reviews.json/get)

We will be searching for a book and the New York Time's review summary of the book.

__Important: Use the book title _Normal People_ or _The Man Who Saw Everything_ to ensure you get back a New York Time review summary__

```
As a user
When I visit "/"
And I input "the man who saw everything" into the form
(Note: Use the existing search form)
And I click "Find Book"
Then I should be on page "/search"
Then I should see the book's info
For that book I should see
- Title
- Author
- Genres
(Note: genres is referred to as "subjects" in the book search response)
I should also see:
- This book has 2 reviews from the New York Times
  (Note: reviews are the "summary" in the book review response)
- Review 1: ""The Man Who Saw Everything,"" which was longlisted for the Booker Prize, looks at masculinity through the perspective of a young historian who sneers at "authoritarian old men.""
Review Publication Date: 2019-10-09
- Review 2: "Deborah Levy’s latest novel, "The Man Who Saw Everything," experiments with time travel, history and the endless complications of love."
Review Publication Date: 2019-10-15
```
