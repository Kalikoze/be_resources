---
title: Book Review
layout: page
---

Clone down the book_review repo: `https://github.com/turingschool-examples/book_review`

We will be using:
1. The Open Library API:
  - Book search - __search for book by title__ endpoint: `http://openlibrary.org/search.json` include query params: title=<book_title_here>
  - This api does not require an API key


2. New York Times Book API:
  - Sign up for API key here: `https://developer.nytimes.com/get-started`
  - Once logged in, register your app and select the Books API
  - Reviews - __search for reviews by book title endpoint__: `https://api.nytimes.com/svc/books/v3/reviews.json`
  - Books API Reviews Docs: `https://developer.nytimes.com/docs/books-product/1/routes/reviews.json/get`

We will be searching for a book and the New York Time's review summary of the book.

__Important: Use the book title _Normal People_ to ensure you get back a New York Time review summary__

```
As a user
When I visit "/"
And I input "Normal People" into the form
(Note: Use the existing search form)
And I click "Find Book"
Then I should be on page "/search"
Then I should see the book's info
For that book I should see
- Title
- Author
- Publisher

Example:
Normal People by Sally Roony
Published By:  Faber & Faber,
               Hogarth,
               Random House Large Print,
               Knopf Canada

I should also see:
- This book has 2 reviews from the New York Times
  (Note: reviews are the "summary" in the book review response)
- Review 1: "Rooney’s second novel tracks two gifted but troubled teenagers across four years of friendship and occasional romance."
Review Publication Date: 2019-04-08
- Review 2: "Like “Conversations With Friends,” “Normal People” also traces a young romance in Ireland."
Review Publication Date: 2019-04-15
```
