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

app.get( '/location' , handleLocation );
app.get( '/weather' , handleWeather );

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
