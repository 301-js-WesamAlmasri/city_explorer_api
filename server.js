'use strict';

const experss = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();

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

// function to handle location end point

const handleLocation = ( req, res ) => {
  if( !req.query.city ) throw new Error( 'Sorry, something went wrong' );
  let locationData = require( './data/location.json' );
  let locationObj = new Location( req.query.city, locationData );

  res.status( 200 ).send( locationObj );
};

// function to handle weather end point

const handleWeather = ( req, res ) => {
  let weatherData = require( './data/weather.json' );

  let resultArr = [];
  weatherData.data.forEach( item => resultArr.push( new Weather( item ) ) );
  res.status( 200 ).send( resultArr );
};

// function to handle errors

const handleError = ( err, req, res ) => {
  let response = {
    status: 500,
    responseText: err.message,
  };

  res.status( 500 ).send( response );
};

app.get( '/location' , handleLocation );
app.get( '/weather' , handleWeather );
app.use( handleError );

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
