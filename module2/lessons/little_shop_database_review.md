---
title: Little Shop Database Review
layout: page
---

## Preparation

Students should come prepared with a database schema that they've designed and maybe collaborated on with their team.

## Seating

Have students sit near other students who are NOT part of their project team.

## Turn & Talk

Have students peer review each other's database designs.

## Class Share

Take input from students on the tables and attributes they'll need in each table. Discuss the enums.

Discuss the model Relationships.

Describe the "gotcha" of how joining tables in one direction will treat users/items as a merchant, but users/orders as a consumer.

## Final Desired Database Schema

Users Table

- name, string
- street_address, string
- city, string
- state, string
- zip, string
- email, string
- password_digest, string
- role, integer (enum: user, merchant, admin)

Items Table

- name, string
- description, text
- image_url, string
