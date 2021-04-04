'use strict';

const experss = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();

const app = experss();
app.use( cors() );

const PORT = process.env.PORT || 5000;

function Location( query, data ) {
  this.search_query = query;
  this.formatted_query = data[0].display_name;
  this.latitude = data[0].lat;
  this.longitude = data[0].lon;
}

const handleLocation = ( req, res ) => {
  let locationData = require( './data/location.json' );
  let locationObj = new Location( req.query.search_query, locationData );

  res.status( 200 ).send( locationObj );
};

app.get( '/location' , handleLocation );

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
