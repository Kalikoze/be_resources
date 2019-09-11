---
title: Cookies and Sessions
layout: page
---

## Materials

* Index Cards
* Sticky Notes

## Demonstration

Instructor will give a demonstration of client/server interaction with cookies. Notecards will represent HTTP request/responses, and sticky notes will represent cookies.

Ask for three student volunteers. Each student is a client, the instructor is the server.

### Client/Server Interaction

First, demonstrate client/server interaction with no cookies:

1. Have a student write a message on a notecard
1. Pass it to the instructor
1. Instructor reads the message and throws the notecard on the ground
1. Instructor writes a response on a new notecard
1. Student reads notecard and throws it on the ground (Note, it is very important that the notecards get thrown on the ground)
1. Repeat this process with the other students

**Turn and Talk:** Why are the notecards being thrown on the ground?

Answer: HTTP is stateless by nature. Once a request/response is delivered, it is discarded. We have no knowledge of previous request responses. If we need to remember something about previous interactions, we need to use cookies.

**Turn and Talk:** What are some examples of previous interactions that need to be remembered?

Expected answers: logging in and carts.

## Logging In

Next, demo logging in:

Rules for this interaction:

* whenever a student receives a notecard with a sticky note, they keep that stick note in their hand.
* If they already have a stick note, they must discard the old sticky note and replace it with the new one.
* Every time a student passes a notecard, they must copy their sticky note onto a new sticky note and attach it to the notecard.

1. Have a student write down on their notecard what their name and password is.
1. Instructor reads the notecard and throws it on the ground.
1. Instructor writes a response on a new notecard.
1. Instructor attaches a stick note to the notecard with "user_id = 3"
1. Instructor passes notecard with sticky back to student. Student then discards the notecard, but keeps the sticky.
1. Repeat with other students giving each a unique user id.
1. Have a student write a message on a notecard that says "I would like to access my profile".
1. The student must also copy their sticky note onto a new sticky note and attach it to the notecard.
1. Instructor receives the notecard and sticky note. Say out loud "I see that this is user 3 from the sticky note".
1. Write down a response on a notecard and hand it back to the student.
1. Repeat for other students.

**Turn and Talk:**  explain to your partner what each part of this demonstration represents in terms of http and cookies.

## Cart

Do another example demonstrating a cart:

1. Have a student write down a message on a new notecard saying what they would like to buy. As usual, they must copy their sticky note onto a new sticky note and send it with the notecard.
1. Instructor discards the notecard and writes a response on a new notecard. Also, attach a sticky note with **both** the previous user id plus the item they want to buy and the quantity of 1 ex "user_id = 3; socks = 1".
1. Student receives the notecard, takes the sticky note off, and throws both the notecard and their old sticky note onto the ground.
1. Repeat this process with the other students, each buying a unique item.
1. Do another round where each student buys another item. Have one student buy the same thing again, so the new cookie will just update the quantity. Have another student buy something new, so that it adds a new entry to the cookie.

## Checkout

Demo a checkout:

1. Have a student send a message that says "I would like to checkout", along with a copy of their sticky note.
1. Upon receiving request, instructor can say out loud, "I see this user wants to checkout, and they have these items in their cart. I can now go into my database and process this order".
