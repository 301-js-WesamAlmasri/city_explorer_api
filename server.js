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
  this.time = data.datetime;
}

app.get( '/location' , handleLocation );
app.get( '/weather' , handleWeather );
app.use( handleError );


// function to handle location end point
function handleLocation ( req, res ) {
  let searchQuery = req.query.city;
  if( !searchQuery ) throw new Error( 'Sorry, something went wrong' );

  superagent
    .get( 'https://eu1.locationiq.com/v1/search.php' )
    .query( { key: process.env.GEOCODE_API_KEY } )
    .query( { q: searchQuery } )
    .query( { format: 'json' } )
    .then( response => {
      let locationObj = new Location( searchQuery, response.body );
      res.status( 200 ).send( locationObj );
    } );
}

// function to handle weather end point
function handleWeather ( req, res ) {
  let weatherData = require( './data/weather.json' );

  let resultArr = weatherData.data.map( item => new Weather( item ) );
  res.status( 200 ).send( resultArr );
}

// function to handle errors
function handleError ( err, req, res ) {
  let response = {
    status: 500,
    responseText: err.message,
  };

  res.status( 500 ).send( response );
}


app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
