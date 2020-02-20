---
title: Class Methods - Instructor Facing
layout: page
---

# Class Methods

## Agenda


## Instructor Prep
- Have enough sticky notes so that each students has 2 to write on (could have on tables before class) - IF you choose post it note CFU over PollEv/another form of CFU
- Print worksheets from this gist: https://gist.github.com/ameseee/a000c62f3656a3e2f197bb9e565213c8
- On the BACK of that, print the "Digging In" Questions: https://gist.github.com/ameseee/d148fbda594876a33b4509d187fdef31
- Have slack message ready to send out code for the Hedgehog class

## Learning Goals
- Explain the difference between class and instance methods.
- Use a class method to create instances of that class.
- Distinguish between class and instance methods with the same name.

## Vocabulary
- Instance Method
- Class Method

## Intro 
- Up until now, we’ve been using classes as factories for instances of that class. We define methods in our class, we store some state in our instance variables, we call .new, and then we can use them. In Ruby, classes are also objects themselves.
- We are going to talk about something called Class Methods - this is something you won’t use a ton of in Mod 1, but I want you to be familiar with as it will be used heavily in Rails with ActiveRecord. This is another case where you don’t need to be a complete expert, but knowing some terminology and having some context will help you read documentation and other people’s code later, and again, this will circle back in Mod 2. 
- It’s not wildly different from anything you’ve seen, so I’m going to push you into an exploration activity right away. With your partner…
  * Look at the class Hedgehog, then complete the table on your paper. This is just based on your educated guesses. If totally unsure, that’s ok!
  * Once you agree on predictions, take the code snippet (in Slack) and create a runner to see what you get… 
  * The answer the “Digging In” questions

## Explore
- With partner and no computer, work to complete the table on your worksheet. 
- THEN, hop on a computer and check your predictions. (Recommend you also slack out the code so students don't have to type out that whole class)

## Digging Into Class Methods
- Have students write answers to the digging in questions
- Have a class discussion to ensure everyone has come to the same/correct conclusion. 

## Demo/Practice
- Demo writing code for the User, then have students practice with the House.
- While/after completing that, students should answer the `Exploration` questions in the student facing resource.

## Post It CFU 
- Teach should create a 2x2 grid on board with markers. It might look like:

| CFU          | Instance Methods   | Class Methods  |
| -------------   |:-------------:     | -----:|
| Syntax          | _stickies go here_ | _stickies go here_ |
| Important Facts | _stickies go here_ | _stickies go here_ |


- Split the class into two groups and give each student 2 sticky notes (may be helpful to give each group their own color). Students will be given two questions to answer, each on a sticky note. They should do this independently. Both should be framed around the idea of: "Pretend a classmate missed this class and asked you to teach them about..."
- Group 1 should answer:
  * syntax for Instance Methods
  * Important facts about Instance Methods
- Group 2 should answer:
  * syntax for Class Methods
  * Important facts about Class Methods
- As each student completes their sticky notes, they should walk up to the board and place it in the appropriate spot.

## ANOTHER OPTION FOR CFU

## PollEv CFU
Create a PollEv group of questions using the exploration questions from the student-facing resource. 

---

## Practical Use, Experimentation

In mod 2, students will learn about ActiveRecord, so the following exercises will have them build similar methods to emulate what the database is doing.

### Getting Started

Download the following CSV of popular baby names:

https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv?accessType=DOWNLOAD

Place this CSV file in the same folder as a new Ruby script you'll call "name.rb"

In that name.rb, start with the following code:

```ruby
require 'csv'
require 'pry'

class Name
  attr_reader :year, :bio_gender, :ethnicity, :name, :count, :rank
  @@filename = 'Popular_Baby_Names.csv'

  def initialize(data)
    @year = 
    @bio_gender = 
    @ethnicity = 
    @name = 
    @count = 
    @rank = 
  end

  def self.find_by_name(name)
    rows = CSV.read(@@filename, headers: true)
    result = []
    
    # new code goes here
    
    result
  end
```

1. Students will be asked to finish the `find_by_name`; encourage them to manage this is a case-sensitive way
  1. how many rows of data can you find for the following names:
    1. Ian (21), MEGAN (10), Sal (0), Omar (18), Riley (33), HUNTER (14)
    
```ruby
  # example
  def self.find_by_name(name)
    rows = CSV.read(@@filename, headers: true)
    result = []
    rows.each do |row|
      if row['name'] == name
        result << Name.new(row)
      end
    end
    result
  end
```
    
2. Students will then copy that method to do the same work for finding data by another column in a `find_by_year` or `find_by_rank` etc.

3. Students will build `self.where` which takes a hash of details, and builds an array of `Name` objects that match the CSV data. This method will need to copy the `CSV.read` line from our `self.find_by_name` method.
  1. how many rows of data can you find for:
    1. Rows with a rank of 25 (140)
    2. Rows with a bio_gender of male (9485)? of female (9933)?
    3. Rows with an ethnicity of "BLACK NON HISPANIC"? (2826)

```ruby
  def self.where(detail)
    rows = CSV.read(@@filename, headers: true)
    key = detail.keys.first
    value = detail.values.first

    result = []
    rows.each do |row|
      # binding.pry
      if row[key.to_s] == value.to_s
        result << Name.new(row)
      end
    end
    result
  end
```

4. Create a new class method called `self.order` which will allow us to sort data based on a hash of input.
  1. A use-case will look like `results = Name.order( { year: :asc } )`
    1. This would sort our CSV file by year in ascending order.
    2. What is the first row of data that comes back?
  2. A use-case will look like `results = Name.order( { name: :desc } )`
    1. This would sort our CSV file by name in descending order.
    2. What is the first row of data that comes back?

---

Extensions / Discussions

Students are welcome to explore the following additional work if this topic is especially interesting, but can otherwise be discussed as a classroom:

1. How would you adapt your `.where` method to take multiple fields of data to match?
  1. For example, we might call `results = Name.where( { name: "Ian", rank: "15" } )`
2. How would you adapt your `.order` method to take multiple fields of data to sort?
  1. For example, we might call `results = Name.order( { ethnicity: :asc, name: :descending } )`

## Discussion

There are other methods that our database library would build for us including the following. Discuss with your partner how you would build these:

- select: takes a list of fields, and only populates Name objects with the fields you choose
  - example:
```ruby
result = Name.select(["name", "rank"])
p result.first
#<Name:0x00007fa22cfe7dd0 @year=nil, @bio_gender=nil, @ethnicity=nil, @name="Ian", @count=nil, @rank="24">
```
- limit: takes an integer parameter and returns only that many objects, eg `Name.limit(10)`
- average: takes a field name to average, returns a float, eg `Name.average("rank")`
