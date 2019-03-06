---
title: LaughTracks
layout: page
---


Current early 2019 project is called "Laugh Tracks", which is a simple one-to-many
database of comedians and TV specials.

Clone down and set up a previous cohort repo to show students an example of what
they're about to build. Be sure to find one that looks balanced from functionality
and styling.

Example: https://github.com/csvlewis/LaughTracks

```
git clone https://github.com/csvlewis/LaughTracks LaughTracks
cd LaughTracks
bundle update
rake db:{drop,create,migrate,seed}
shotgun &
open http://localhost:9393/comedians
fg

```

(this runs 'shotgun' in background mode to launch the browser with 'open' and
then 'fg' brings shotgun back to the foreground so Ctrl-C can stop it later)

---

Point Students to the GitHub Repo
https://github.com/turingschool-projects/LaughTracks

Talk through the "user stories" and let them know we'll discuss the format of
what a "user story" is on Thursday.
