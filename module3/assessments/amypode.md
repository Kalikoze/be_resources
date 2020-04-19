---
title: Amypode
layout: page
---

## Setup

Create a branch off of your Sweater Weather project called `final_assessment`. As you work, you should commit to this branch every 15 minutes

### Assignment

An antipode is the point on the planet that is diametrically opposite. You will create an API endpoint that takes a starting location and returns it's anitpode city along with the current weather temperature and summary for the antipode city.

Your API endpoint should follow this format:

```
GET /api/v1/antipode?location=<start_location_city_name>
```

Your endpoint will return:
    
  - the starting city name
  - the name of the antipode city
  - the current weather summary for the antipode city

Your response format should be similar to the format below:

```
{
    "data": {
        "id": "null",
        "type": "antipode",
        "attributes": {
            "location_name": "Antipode City Name",
            "forecast": {
                "summary": "Mostly Cloudy,
                "current_temperature": "72",
            },
            "search_location": "Hong Kong"
        }
    }
}
```

__Note:__ Most places on Earth have an antipode in the ocean. Use "Hong Kong" as a test city. Its antipode is somewhere in Argentina.

### APIs

You are expected to consume the following APIs:

* Google geocoding API: https://developers.google.com/maps/documentation/geocoding/start 
    * Use Geocoding to get lat/long coordinates from a city name
    * Use Reverese Geocoding to get a city name from lat/long coordinates
* Open Weather Map API: https://openweathermap.org/api
    * Use to get weather for a city
* Amypode API
    * Use to get antipode coordinates from lat/long coordinates
    * Sample Request: [http://amypode.herokuapp.com/api/v1/antipodes?lat=27&long=-82]()
    * The Amypode API requires header based authentication.
        * Pass your api key in as a header. Your header should be named `api_key`.
        * Your api key is: `oscar_the_grouch`
