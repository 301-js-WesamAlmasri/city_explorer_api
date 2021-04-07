const { Location } = require( '../store' );

const {
  executeQueryToDB
} = require( '../clients/pgClient' );

const {
  getDataFromAPI
} = require( '../clients/superAgent' );


// function to get the location data
function getLocationData( searchQuery ) {

  // checking the database for location information
  let query = 'SELECT * FROM locations WHERE search_query=$1';

  let resultData = executeQueryToDB( query, [searchQuery] )
    .then( dbRespnse => {
      if( dbRespnse.rowCount > 0 ) {
        let locationObj =  new Location( dbRespnse.rows[0] );
        return locationObj;
      }
      else {
        let dataFromApi = getLocaionInfoFromApi( searchQuery )
          .then( apiResponse => apiResponse )
          .catch( e => { throw e; } );

        return dataFromApi;
      }
    } )
    .catch( e => { throw e; } );

  return resultData;
}

// function to get location info from api
function getLocaionInfoFromApi( searchQuery ) {
  let url = 'https://eu1.locationiq.com/v1/search.php';
  let params = {
    key: process.env.GEOCODE_API_KEY,
    q: searchQuery,
    format: 'json'
  };

  let resultData= getDataFromAPI( url, params )
    .then( response => {
      let setLocationQuery = 'INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING id, search_query, formatted_query, latitude, longitude;';
      let safeValues = [searchQuery, response.body[0].display_name, response.body[0].lat, response.body[0].lon];

      let resultFromDB = executeQueryToDB( setLocationQuery, safeValues )
        .then( insertResponse => {
          let locationObj = new Location( insertResponse.rows[0] );
          return locationObj;
        } )
        .catch( e => {throw e;} );

      return resultFromDB;
    } )
    .catch( e => {throw e;} );

  return resultData;
}

module.exports = {
  getLocationData
};
