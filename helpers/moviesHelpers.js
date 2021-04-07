const { getDataFromAPI } = require( '../clients/superAgent' );
const { Movie } = require( '../store' );

//function to get movies data
function getMoviesData( searchQuery ) {
  let url = 'https://api.themoviedb.org/3/search/multi';
  let params = {
    api_key: process.env.MOVIE_API_KEY,
    query: searchQuery,
  };

  let resultData = getDataFromAPI( url, params )
    .then( response => {
      let resultArr = response.body.results.splice( 0, 10 ).map( item => new Movie( item ) );
      return resultArr;
    } )
    .catch( e => {throw e;} );

  return resultData;
}

module.exports = {
  getMoviesData
};
