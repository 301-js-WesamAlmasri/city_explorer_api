'use strict';

const experss = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();

const app = experss();
app.use( cors() );

const PORT = process.env.PORT || 5000;

app.get( '/' , ( req, res ) => {
  res.send( 'Hello Word' );
} );

app.listen(PORT, () => console.log( `Listening on port ${PORT}` ) );
