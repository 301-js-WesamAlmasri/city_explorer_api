'use strict';

const experss = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();
const {client} = require( './clients/pgClient' );

const {
  handleLocation,
  handleWeather,
  handleParks,
  handleMovies,
  handleYelp
} = require( './express/routesHandlers' );

const {
  logger,
  handleError
} = require( './express/middleWares' );

const app = experss();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use( cors() );
app.use( logger );

// Routes
app.get( '/location' , handleLocation );
app.get( '/weather' , handleWeather );
app.get( '/parks' , handleParks );
app.get( '/movies' , handleMovies );
app.get( '/yelp' , handleYelp );

// Errors handler
app.use( handleError );

// connect to database and start the server
client
  .connect()
  .then( () => {
    app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
  } )
  .catch( e => console.log( e ) );

