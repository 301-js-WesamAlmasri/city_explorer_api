const superagent = require( 'superagent' );

// funtion to get data from API

function getDataFromAPI( ulr, params, headers ) {
  return superagent
    .get( ulr )
    .set( headers || {} )
    .query( params )
    .then( response => response )
    .catch( e => {throw e;} );
}

module.exports = {
  getDataFromAPI
};
