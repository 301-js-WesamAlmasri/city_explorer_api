# City-Explorer

**Author**: Wesam Al-Masri
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

API server which provide data for the City Explorer Application, allowing a user to search for a location, present a Map, as well as interesting information about the area, all using data from APIs that your server will fetch and manage.

## Getting Started

1. Clone the repo using `git clone https://github.com/WesamAlmasri/city_explorer_api.git` for HTTPS or `git@github.com:WesamAlmasri/city_explorer_api.git` for SSH connection
2. Install all the needs packages by `npm install`
3. Run the server by entering the command `npm start`

## Features & Routes

### Location

**Request:**

| Method | Endpint         | Description                                                |
| ------ | --------------- | ---------------------------------------------------------- |
| GET    | /location?city= | Get the data about specific city by searching by it's name |

**Response:**

The response will be like this

```json
{
  "search_query": "seattle",
  "formatted_query": "Seattle, WA, USA",
  "latitude": "47.606210",
  "longitude": "-122.332071"
}
```

### Weather

**Request:**

| Method | Endpint                | Description                                                                                     |
| ------ | ---------------------- | ----------------------------------------------------------------------------------------------- |
| GET    | /weather?latitude=&longitude= | Get the  weather forecast for the upcoming days for specific area by the latitude and longitude |

**Response:**

The response will be like this

```json
[
  {
    "forecast": "Partly cloudy until afternoon.",
    "time": "Mon Jan 01 2001"
  },
  {
    "forecast": "Mostly cloudy in the morning.",
    "time": "Tue Jan 02 2001"
  },
  ...
]
```

### Parks

**Request:**

| Method | Endpint              | Description                                                      |
| ------ | -------------------- | ---------------------------------------------------------------- |
| GET    | /parks?search_query= | Get the first ten parks and campgrounds in the area by it's name |

**Response:**

The response will be like this

```json
[
    {
     "name": "Klondike Gold Rush - Seattle Unit National Historical Park",
     "address": "319 Second Ave S., Seattle, WA 98104",
     "fee": "0.00",
     "description": "Seattle flourished during and after the Klondike Gold Rush. Merchants supplied people from around the world passing through this port city on their way to a remarkable adventure in Alaska. Today, the park is your gateway to learn about the Klondike Gold Rush, explore the area's public lands, and engage with the local community.",
     "url": "https://www.nps.gov/klse/index.htm"
    },
    {
     "name": "Mount Rainier National Park",
     "address": "55210 238th Avenue East, Ashford, WA 98304",
     "fee": "0.00",
     "description": "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
     "url": "https://www.nps.gov/mora/index.htm"
    },
    ...
]
```

### Movies

**Request:**

| Method | Endpint               | Description                                            |
| ------ | --------------------- | ------------------------------------------------------ |
| GET    | /movies?search_query= | Get the top twenty movies set in the area by it's name |

**Response:**

The response will be like this

```json
[
  {
    "title": "Sleepless in Seattle",
    "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
    "average_votes": "6.60",
    "total_votes": "881",
    "image_url": "https://image.tmdb.org/t/p/w500/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
    "popularity": "8.2340",
    "released_on": "1993-06-24"
  },
  {
    "title": "Love Happens",
    "overview": "Dr. Burke Ryan is a successful self-help author and motivational speaker with a secret. While he helps thousands of people cope with tragedy and personal loss, he secretly is unable to overcome the death of his late wife. It's not until Burke meets a fiercely independent florist named Eloise that he is forced to face his past and overcome his demons.",
    "average_votes": "5.80",
    "total_votes": "282",
    "image_url": "https://image.tmdb.org/t/p/w500/pN51u0l8oSEsxAYiHUzzbMrMXH7.jpg",
    "popularity": "15.7500",
    "released_on": "2009-09-18"
  },
  ...
]
```

### Resturants

**Request:**

| Method | Endpint                   | Description                                                                    |
| ------ | ------------------------- | ------------------------------------------------------------------------------ |
| GET    | /yelp?search_query=&page= | Get restaurants in the area by it's name. There will five result for each page |

**Response:**

The response will be like this

```json
[
  {
    "name": "Pike Place Chowder",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg",
    "price": "$$   ",
    "rating": "4.5",
    "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  {
    "name": "Umi Sake House",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
    "price": "$$   ",
    "rating": "4.0",
    "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  ...
]
```

## Architecture

- Lnaguage: JavaScript with Node.js, postgreSQL
- Frameworks and libraries used: `express`, `cors`,  `dotenv`, `pg`, `superagent`
- APIs: Location IQ Geocoding API, Weather Bit API, National Park Service API, Yelp API
The Movie Database (TMDb) API

![javascrip](https://camo.githubusercontent.com/70af7d849226bbfced08e4510d3b0dc5cc6a38b3415abee253ec233286e5f66f/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f686b614e467778315039314636425173762d4f56642d432d68344743784c4f67675a3969724f4545576e6a4d69667a53376a717a77666a3650775554614a367955635a304f75655275695a515252587771515775486369775a5a6d686c30634179486766494f792d544146336d33766f623135497142535f765a5955546c615f313337594e657276733341)

![nodejs and express](https://camo.githubusercontent.com/9ade6b7daaddeb7387dd09693e0295b264be4c6e520487cc2ccf37c05c6d6c4a/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f466b3137487533757550455a464841583847486141544b3770796d645851464a4b35733769322d4e62794275464a73455f324f55517432627737672d3269423439657453757874357546533671514b4279364a746f4b35507132694f657567726f77316f5f725536574761315077574b687565304345685f5943574d4249724a7a6c6e6238366972534763)

![postgres](https://camo.githubusercontent.com/f80a0890f0522bd1be4e42725b8b0d2baeea1c59ac3fbefec65d87aef367ad7b/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f5f53452d626b47626d5544483041365643746a3152386652533948575962374f5f5a39537267555f52384841654d52624469734a6968317744583559485053576e31772d5a2d6375794d6a6f6e65546e6c4a6d6e374d7835746d585368423055734c676f6739306f446c31676e39632d31453838706a476734364a3079364345786d494253774d47413951)

## Deployed app link

[City Explorer API](https://city-explorer-api2021.herokuapp.com/)

## Change Log

04-04-2021 02:30pm - Application now has a fully-functional express server, with a GET route for the location and weather resources .

05-04-2021 02:30pm - Application now get all data from a remote API, in addition a new router has been added to get parksin specific area .

06-04-2021 02:30pm - Application now cach the location information in a database so that when the user enter the same location the server does not need to get the data from the API.

07-04-2021 12:20pm - Application now has a new routers to get movies for a specific area and a router to get a paginated list of resturants in an area.

---

Number and name of feature: #1 Repository Set Up

Estimate of time needed to complete: 10 min

Start time: 11: 40

Finish time: 11:50

Actual time needed to complete: 10 min

---

Number and name of feature: #2 Location

Estimate of time needed to complete: 20 min

Start time: 12:35

Finish time: 01:00

Actual time needed to complete: 25 min

---
Number and name of feature: #3 Weather

Estimate of time needed to complete: 10 min

Start time: 01:05

Finish time: 01:15

Actual time needed to complete: 10 min

---
Number and name of feature: #4 Errors

Estimate of time needed to complete: 5 min

Start time: 02:20

Finish time: 02:25

Actual time needed to complete: 5 min

---

Number and name of feature: #5 Data Formatting

Estimate of time needed to complete: 5 min

Start time: 10:20

Finish time: 10:23

Actual time needed to complete: 3 min

---

Number and name of feature: #6 Locations

Estimate of time needed to complete: 15 min

Start time: 10:25

Finish time: 10:50

Actual time needed to complete: 25 min

---

---

Number and name of feature: #7 Weather

Estimate of time needed to complete: 20 min

Start time: 11:05

Finish time: 11:30

Actual time needed to complete: 25 min

---

Number and name of feature: #8 Parks

Estimate of time needed to complete: 20 min

Start time: 11:40

Finish time: 12:20

Actual time needed to complete: 40 min

---

Number and name of feature: #9 Database setup and table creation

Estimate of time needed to complete: 5 min

Start time: 10:00

Finish time:10:10

Actual time needed to complete: 10 min

---

Number and name of feature: #10 Persistance of location

Estimate of time needed to complete: 30 min

Start time: 10:20

Finish time: 11:00

Actual time needed to complete: 40 min

---

Number and name of feature: #11 Movies

Estimate of time needed to complete: 20 min

Start time: 10:40

Finish time: 11:45

Actual time needed to complete: 1 hour

---

---

Number and name of feature: #12 Yelp

Estimate of time needed to complete: 20 min

Start time: 11:50

Finish time: 12:05

Actual time needed to complete: 15 min

---

Number and name of feature: #12 Pagination

Estimate of time needed to complete: 15 min

Start time: 12:15

Finish time: 12:20

Actual time needed to complete: 5 min

---

Number and name of feature: #11 Deployment

Estimate of time needed to complete: 10 min

Start time: 12:25

Finish time: 12:30

Actual time needed to complete: 5 min

---
