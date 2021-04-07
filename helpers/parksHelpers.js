const { getDataFromAPI } = require( '../clients/superAgent' );
const { Park } = require( '../store' );

//function to get parks data
function getParksData( searchQuery ) {
  let url = 'https://developer.nps.gov/api/v1/parks';
  let params = {
    api_key: process.env.PARKS_API_KEY,
    q: searchQuery,
    limit: 10
  };

  let resultData = getDataFromAPI( url, params )
    .then( response => {
      let resultArr = response.body.data.map( item => new Park( item ) );
      return resultArr;
    } )
    .catch( e => {throw e;} );

  return resultData;
}

module.exports = {
  getParksData
};
