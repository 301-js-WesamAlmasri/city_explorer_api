'use strict';

const experss = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();
const superagent = require( 'superagent' );

const app = experss();
app.use( cors() );

const PORT = process.env.PORT || 5000;

// location constructor
function Location( query, data ) {
  this.search_query = query;
  this.formatted_query = data[0].display_name;
  this.latitude = data[0].lat;
  this.longitude = data[0].lon;
}

// weather constructor
function Weather( data ) {
  this.forecast = data.weather.description;
  this.time = new Date( data.datetime ).toString().slice( 0, 15 );
}

// park constructor
function Park( data ) {
  this.name = data.fullName;
  this.address = Object.values( data.addresses[0] ).join( ', ' );
  this.fee = data.fees[0] || 0;
  this.description = data.description;
  this.url = data.url;
}

app.get( '/location' , handleLocation );
app.get( '/weather' , handleWeather );
app.get( '/parks' , handleParks );
app.use( handleError );


// function to handle location end point
function handleLocation ( req, res, next ) {
  let searchQuery = req.query.city;

  superagent
    .get( 'https://eu1.locationiq.com/v1/search.php' )
    .query( { key: process.env.GEOCODE_API_KEY } )
    .query( { q: searchQuery } )
    .query( { format: 'json' } )
    .then( response => {
      let locationObj = new Location( searchQuery, response.body );
      res.status( 200 ).send( locationObj );
    } )
    .catch( next );
}

// function to handle weather end point
function handleWeather ( req, res, next ) {
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;

  superagent
    .get( 'https://api.weatherbit.io/v2.0/forecast/daily' )
    .query( { key: process.env.WEATHER_API_KEY } )
    .query( { lat: latitude } )
    .query( { lon: longitude } )
    .then( response => {
      let resultArr = response.body.data.map( item => new Weather( item ) );
      res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

// function to handle park end point
function handleParks ( req, res, next ) {
  let searchQuery = req.query.search_query;

  superagent
    .get( 'https://developer.nps.gov/api/v1/parks' )
    .query( { api_key: process.env.PARKS_API_KEY } )
    .query( { q: searchQuery } )
    .query( { limit: 10 } )
    .then( response => {
      let resultArr = response.body.data.map( item => new Park( item ) );
      res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

// function to handle errors
function handleError ( err, req, res, next ) {
  let response = {
    status: 500,
    responseText: 'Sorry, something went wrong',
  };

  res.status( 500 ).send( response );
}


app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
