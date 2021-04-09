# City-Explorer

**Author**: Wesam Al-Masri
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

API server which provide data for the City Explorer Application, allowing a user to search for a location, present a Map, as well as interesting information about the area, all using data from APIs that the server will fetch and manage.

## Getting Started

1. Clone the repo using `git clone https://github.com/WesamAlmasri/city_explorer_api.git` for HTTPS or `git@github.com:WesamAlmasri/city_explorer_api.git` for SSH connection
2. Install all the needs packages by `npm install`
3. Run the server by entering the command `npm start`

## Architecture

- Lnaguage: JavaScript with Node.js
- Frameworks and libraries used: `express`, `cors`,  `dotenv`, `superagent`, `pg`
- APIs: Location IQ Geocoding API, Weather Bit API, National Park Service API, Yelp API, 
The Movie Database (TMDb) API

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
