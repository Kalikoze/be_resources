---
title: Munchies
layout: page
---

## Setup

Create a branch off of your Sweater Weather project called `final_assessment`. As you work, you should commit to this branch every 15 minutes

## Assignment

You will build an endpoint that will retrieve food and forecast information for a destination city.

Your endpoint should follow this format: 

`GET /api/v1/munchies?start=denver,co&end=pueblo,co&food=chinese`

Your API will return:
- the end city
- estimated travel time
- the name and address of a restaurant serving THE SPECIFIED TYPE of cuisine that WILL BE OPEN at your estimated time of arrival. 
- the forecast at your time of arrival

Your response should be similar to the format below:

```
{
  "data": {
    "id": "null",
    "type": "munchie",
    "attributes": {
      "end_location": "Pueblo, CO",
      "travel_time": "1 hours 48 min",
      "forecast": "Cloudy with a chance of meatballs"
      "restaurant": {
        "name": "Chinese Restaurant",
        "address": "4602 N. Elizabeth St, Ste 120, Pueblo, CO 81008"
      }
    }
  }
}
```

## APIs

1. Google directions API
    - to find out how long it will take to travel from your start location to your end location.
    - https://developers.google.com/maps/documentation/directions/start
1. Yelp Fusion API
    - to find the name and address of a restaurant in your end location that serves a SPECIFIC CUISINE TYPE THAT WILL BE OPEN at the time of arrival.
    - https://www.yelp.com/developers/documentation/v3/business_search
1. Open Weather Map API
    - to find the forecast in the end location at the time of arrival.
    - https://openweathermap.org/api


## Technical notes

* The Yelp API only accepts time as UNIX time. You can convert a Time object into UNIX time by doing something like this: `Time.now.to_i`
* You can find out time in the future using a feature built into Rails' ActiveSupport which will let you do things like this: Time.now + 4.hours (This will ONLY work in Rails and not a pry session run from the command line)
