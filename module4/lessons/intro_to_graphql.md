---
title: Intro to GraphQL
layout: page
---

Student-Facing Lesson: https://backend.turing.io/module4/lessons/graphql

## Vocabulary

- Over-fetching
- Under-fetching
- n + 1 queries
- Operation
- Field
- Argument


## Warmup

- Why do we use APIs?
- What makes an API RESTful?
- Why do we commonly see /api/v1/ included in RESTful API endpoints?

## Intro -- What is GraphQL?

GraphQL is a query language for APIs.

If we've heard of Graphs as a data structure or as a database, we might get the wrong idea that GraphQL is a database, or a query language for a database.

GraphQL is a specification for how clients can query an existing API for information.

It is agnostic of database, programming language, and network transport (HTTP, TCP etc)

## What problems are being solved by GraphQL?

GraphQL was designed to help with performance efficiency and to address under-fetching and over-fetching.

## In Depth

When we load a web page which includes dynamically-loaded content with JavaScript, we have to download the base page, plus any assets, and then JavaScript code is executed. This JavaScript code may go back to an API to fetch additional content on the page.

Imagine that you have a blogging website. After a user has logged in you want to show them a dashboard page.

On this page you want to display

- the logged in user’s name
- the titles of the blogs posts they have written
- their top 3 followers

## Turn & Talk

- How many API calls would you need to make to retrieve all this information?
- What would each request and the response look like?

![RESTful fetching](https://backend.turing.io/module4/lessons/assets/RESTful_requests.png)

## Define Under-Fetching

Since each endpoint should be single-responsibility, we need to access multiple endpoints to fetch everything we need for this page.

This is known as under-fetching: making multiple API calls to collect all of the information we need.

### Performance Impact

Each query is another whole request/response back to a server.

### n+1 Queries

Think back to a Mod 2 project where your controller fetched a resource, then in the View you had code that fetched additional data, like `owner.pets` to print the name of every pet someone owned.

Under-fetching is like this `n+1` problem: for a given resource, fetch more resources based on that resource, so you can access attributes (or additional resources).

## Define: Over-fetching

Imagine DarkSky returning daily/hourly/minutely when all we want is the current condition and temperature. Many API endpoints actually return way more data than we actually need for a given circumstance. But it wouldn't make sense to build multiple endpoints that return more/less data.

---

## GraphQL to the Rescue!

![GraphQL Response](https://backend.turing.io/module4/lessons/assets/GraphQL_request.png)

### Benefits to Front-end Developers

- more control over which data they actually need
- faster turnaround for fetching different data without backend having to build/change endpoints

### Benefits to Back-end Developers

- we can gain insight from the requests being received
  - are there fields in our database that never actually get used?
  - are we indexing columns that get used a lot?
- we can use this data to make better API endpoints in the future, possibly also migrate underused data to lookup tables

## Components of GraphQL

### Turn & Talk

Based on previous image, let's look for the following things:

- operation type
- fields
- arguments

### Components We'll Cover Today:

1. Resolvers
2. Schema
3. Operations
4. Mutations


## 1. Resolvers

Before we go too much further, we need to talk about how GraphQL handles requests and returns data. This is done using something called a Resolver.

The Resolver is responsible for examining the incoming request and sets up an appopriate response. It will also collect the necessary information to complete the response. Let’s look at what a resolver might look like if we wanted to find a particular user.

```
Query: { 
  user(root, args) { 
    return User.find({ id: args.id });
  }
}
```

First, specify the operation type, in this case it is Query.

Next, we want `user` to be directly at the "root" level so we specify that by user:(root).

We then write a function to return what we want from the database. In this case, we'll find a User object based on an ID value.


## 2. Schema

A schema is a representation of what can be queried or mutated.

The simplest component of the Schema is an object type.

An object "type" is a representation of an object and it’s fields.

```
type User { 
  name: String! 
  address: String birthday: String
}
```

### Turn & Talk

What does that ! mean?

Answer: That field cannot contain a null value.



The other important piece for our schema is to define the entry points using query type and/or mutation type. This would look something like this:

```
//schema
schema {
  query: Query
  mutation: Mutation
}

//defining query type
type Query {
	user: User
}
```

Having lowercase "user" defined here means that it can be at the root of the query.


## 3. Operation Types:

- query
- mutation
- subscription

![GraphQL operations etc](https://backend.turing.io/module4/lessons/assets/GraphQL_vocabulary.png)

### Queries

A query is an `operation type` to READ requested data.

```
query {
  User(id: 1234) {
    name
    posts {
      title
    }
    followers(last: 3) {
      name
    }
  }
}
```

Within the query, we identify the fields we want to return.

In this example, `User` is the "root" of our request and response.

Fields that refer to the Object (in this case, User), are known as `sub-selection`, such as fetching the user's posts' titles.

Query fields are executed in parallel, so GraphQL will fetch the User object, the posts data, and the followers all at the same time.

## 4. Mutation

A mutation is the operation type that we use when we want to create/update/delete data.

Mutations and queries look very similar, but mutation fields run in series(one after the other) NOT in parallel like a query.

```
//mutation request
mutation CreatePostForUser($user: User!, $post: postInput!) {
	createPost(user: $user, post: $post) {
		title
		content
    }
}


//variables
{
	"user": "Bugs Bunny",
	"post": {
		"title": "Greetings"
		"content": "What's Up Doc?"
	}
}
```

---

## Code-Along with Explanations

```bash
mkdir graphql_example
cd graphql_example
npm init -y
npm install --save graphql express express-graphql
atom ./index.js
```

```javascript
// index.js
const express = require("express");
const express_graphql = require("express-graphql");
const {buildSchema} = require("graphql");
const app = express();

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root_resolver,
  graphiql: true  // note the spelling, this is NOT a typo!
}));

app.listen(3000, ()=> console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));
```

When we run `node index.js` and visit `http://localhost:3000/graphql` we get an error, because we need to build our schema and resolver first.


## Design Our Simple Pet-Owner App

We want an app where we can build a schema for pets and owners.

Requirements:

- pets will have an id, name, animal type, breed, age, favorite treat, and an Owner reference
- owners will have an id, name, and a has-many reference to Pet
- query endpoints:
  - find a single pet by id
  - find multiple pets
- write a mutation to change a pet name

Let's build our Schema!

```javascript
const schema = buildSchema(`
  type Pet {
    id: Int
    name: String
    animalType: String
    breed: String
    age: Int
    favoriteTreat: String
  }
`);
```

Next, we need a way to get a pet based on an ID value.

First we'll define a GraphQL query inside our schema:
```
const schema = buildSchema(`
  type Query {
    pet(id: Int!): Pet
  },
  type Pet { ...
```

In this case, we want to use "pet" as our query name in GraphQL, and it will reference our Pet objects.

The `id: Int!` portion says that a user will be required to provide an integer to pass as the Pet ID value.

```
var getPet = function(arguments) { // args come from GraphQL query
  let id = arguments.id;
  return pets.filter(pet => {
    return pet.id == id;
  })[0];
};
```

Let's go see if that works in our interactive GraphQL interface:

```
query {
  pet(id: 1) {
    name
  }
}
```

This returns "null", because our function is referencing a "pets" variable which doesn't exist, so ABOVE the function we just made, let's add a way to store pets: (non-database version)

```javascript
var pets = [
  {
    id: 1,
    name: '',
    animalType: '',
    breed: '',
    age: 3,
    favoriteTreat: 'carrots',
  }
];
```

This still returns a "null" for us ... because we haven't told GraphQL to "resolve" anything for us.

```javascript
const root_resolver = { // resolver
  pet: getPet, // query: function
};
```

Let's run our query again:
```
query {
  pet(id: 1) {
    name
  }
}
```

Next, lets add an owner to our pet.

```javascript
var pets = [
  {
    id: 1,
    name: '',
    animalType: '',
    breed: '',
    age: 3,
    favoriteTreat: 'carrots',
    owner: {
      id: 1,
      name: 'Jane Doe'
    }
  }
];
```

Also, in our schema, we need to specify that our Pet object belongs to an Owner object

```
  type Pet {
    id: Int
    name: String
    animalType: String
    breed: String
    age: Int
    favorite_treat: String
    owner: Owner
  }
```

Wait, we're referencing an Owner that doesn't exist yet! Let's go add Owner to our schema!

```
  type Owner {
    id: Int
    name: String
  }
```

### Turn & Talk

How can we adapt our query to get the owner's name too?

```
query {
  pet(id: 1) {
    name
    owner {
      name
    }
  }
}
```


### Fetch All Pets

Super, now let's go add code to get all pets based on an OPTIONAL attribute like animalType

First, we'll add this as a query in our schema:

```javascript
const schema = buildSchema(`
  type Query {
    pet(id: Int!): Pet
    pets(animalType: String): [Pet]
    // note that there is NO COMMA separating these like we'd do in JSON
    // note that there is no ! after String, which makes animalType an optional parameter
  },
  type Pet {...}
```

Next we'll need a JavaScript function:

```javascript
var getPets = function(arguments) {
  if (arguments.animalType) {
    var animalType = arguments.animalType;
    return pets.filter(pet => pet.animalType === animalType);
  } else {
    return pets;
  }
};
```

This will give us the flexibility to fetch all pets or just certain pets based on an animal type

Finally, we need to add this method to our resolver:

```
const root_resolver = {
  pet: getPet,
  pets: getPets
};
```

Let's restart npm and give it a spin:

```
query {
  pets {
    name
    animalType
  }
}
```

Let's add more pets!!


### Turn & Talk:

How can we filter just the cats or dogs?

And let's try it with our animalType parameter:

```
query {
  pets(animalType: "dog") {
    name
  }
}
```

Let's try it with an animal type that we know isn't in our database:

```
query {
  pets(animalType: "rabbit") {
    name
  }
}
```

### Change a Pet's Name

Last piece: let's update a pet's name.

Since this will update something, this will be a "mutation" operation type, not a "query" operation type. We will require an ID of the pet plus their new name, and we'll add it to our schema like this:

```javascript
const schema = buildSchema(`
  type Query { ... },
  type Mutation {
    updatePetName(id: Int!, new_name: String!): Pet
  },
  type Pet {...},
```

Our GraphQL 'name' for this mutation will be `updatePetName` and we need a JavaScript function for it as well:

```
var changePetName = function({ id, new_name }) {
  pets.map(pet => {
    if (pet.id === id) {
      pet.name = new_name;
      return pet;
    }
  });
  return pets.filter(pet => pet.id === id)[0];
};
```

Finally, we need to add this combination of mutation name plus JS function name to our resolver:

```
const root_resolver = { // graphql:jsfunction
  pet: getPet,
  pets: getPets,
  updatePetName: changePetName
};
```

Let's give it a try:

```
mutation {
  updatePetName(id: 1, new_name: "mickey") {
    id
    name
  }
}
```

Did it work? Let's call our 'pets' query and our 'pet` query with this ID to see if the name change worked.

