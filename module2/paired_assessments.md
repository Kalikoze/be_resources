---
title: Paired Assessments
layout: page
---

For Module 2 assessments, students will complete prework before the assessment. They will push their code to their repository, and instructors will clone it during the assessments. The student and instructor will collaborate on a user story where the student is the "navigator" and an instructor is the "driver".

## Mid-Mod Evaluation

Students will participate in a mid-module assessment ("mid-mod") that does NOT count towards promotion. It is simply a checkpoint progress indicator of which concepts each student has learned and is able to apply. Students are encouraged to focus mentoring and pairing sessions around topics where they did not perform adequately in the mid-mod.

## Final - Driver/Navigator 

Students will participate in a final assessment that will count towards promotion. If students do not pass the final, they will be given an independent retake.

## Repositories

#### Student Facing

Students should fork and clone the following repositories and use their forks to complete the prework tasks.

* [Mid Mod Prework Repo (version 1)](https://github.com/turingschool/B2_mid_mod_1)
* [Mid Mod Prework Repo (version 2)](https://github.com/turingschool/B2_mid_mod_2)
* [Final Prework Repo](https://github.com/turingschool/final_b2_prework)

Each module, instructors should create a copy of the repo into a new, public facing repo under the `turingschool-examples` organization.

#### Instructor Facing

The following repositories contain the prework, assessment user stories, retake user stories, and examples of code that completes those stories.

* [Mid Mod Instructor Repo (for version 1 mid mod)](https://github.com/turingschool/book_club_mid_mod)
* [Mid Mod Instructor Repo (for version 2 mid mod)](https://github.com/turingschool/instructor_students_mid_mod)
* [Final Instructor Repo](https://github.com/turingschool/final_b2)

## Conducting the Assessment

During the assessment, students should tell instructors what to type. However, students should be encouraged to use high level technical language rather than saying exactly what characters to type. However, if they choose to use high level, technical language, they should still be specific about what they want.

If a student needs to make a button in a view, here are some example responses:

**ideal:**

> Make some visible erb tags with a button_to that has an identifier of "Add Song", a path '/songs' and a verb of 'post'

**good:**

> Make some visible erb tags with button_to, quotes add song, comma quotes slash songs, comma method colon space colon post


**not specific enough**

> Make a button that goes to the song create route


If a student is not able to describe the task with high level language or specific syntax, the instructor should help them through the task


## Expectations:

Students are not expected to have the exact syntax for certain tasks memorized. These are:

* Filling in a form in a test
* Creating a form
* Strong params

Students should be able to describe the components of each, but not necessarily the exact syntax.

If a student needs to create a form, here are some example answers:

**ideal**


> Make visible erb tags with a form_tag that submits to a path of "/songs" with a verb of "post", and a do block. It will also need an end in invisible erb tags. Inside the block, we'll need a visible erb tags with a label_tag and a symbol of title, as well as a visible erb tag with a text_field_tag and a symbol of title. Finally, we'll need a submit_tag inside visible erb tags.


**good**

> Make visible erb tags with a form_tag, with a path of "/songs" and a verb of "post". Then we'll need a field for the title and a submit button. (In this case, the student has not described the do/end block or the syntax for creating the fields and submit button).


**not specific enough**

> Make a form_tag. It's also going to need a field for the title. (In this case, the student has left off the core components of verb, path, and submit button.


## Rubric

| | Rails Syntax | MVC | ActiveRecord | Testing and Debugging |
| -- | -- | -- | -- | -- |
| 4 | Students effectively use Rails methods or strategies not discussed in class, and can effectively defend their decision to use those tools. | Student strictly adheres to MVC, and can defend decisions of where functionality lives. | Highly effective and efficient use of ActiveRecord beyond what we've taught in class | Prework tests are extremely well organized and nested. Student demonstrates excellent TDD during paired assessment. |
| 3 | Student effectively and independently uses appropriate Rails syntax to complete the user stories | Student adheres to the principles of MVC, with only one infraction. | Students appropriately choose class vs. instance methods. Students can CRUD resources using built in ActiveRecord methods and ActiveRecord associations. | Tests capture the behavior described in the user stories. Student demonstrates use of TDD, but may be prompted by the instructor once or twice. |
| 2 | Student uses appropriate Rails syntax with instructor prompting, or does not complete the paired user story | Student does not adhere to the principles of MVC, demonstrated by up to 3 infractions. Student is able to describe the principles of MVC. | Student needs  prompting from instructor in order to use ActiveRecord to CRUD resources, or student makes an incorrect, or inappropriate choice of using a class or instance method. | Tests do not capture the behavior described in the user stories, and/or the student does not demonstrate consistent use of TDD |
| 1 | Student fails to complete one or both of the prework user stories | Student has more than 3 infractions of MVC and/or can not describe the principle of MVC. | Student is unable to CRUD resources using ActiveRecord | Student is unable to write an effective test without significant instructor guidance. |

## Final - Not Paired
Make a copy of the repo below for the final. Students will be given 3 hours to complete the following repo. Students should fork and clone the repo and then submit a pull request to Turing. 

[Field Trip](https://github.com/turingschool/field_trip)
