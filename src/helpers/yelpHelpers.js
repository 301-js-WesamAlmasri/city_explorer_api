const { getDataFromAPI } = require( '../clients/superAgent' );
const { Restaurant } = require( '../store' );

//function to get Restaurants data
function getRestaurantsData( searchQuery, pageNumber ) {
  let startWith = ( ( pageNumber - 1 ) * 5 + 1 );

  let url = 'https://api.yelp.com/v3/businesses/search';
  let params = {
    location: searchQuery,
    limit: 5,
    offset: startWith
  };

  let headers = {
    'Authorization': `Bearer ${process.env.YELP_API_KEY}`
  };

  let resultData = getDataFromAPI( url, params, headers )
    .then( response => {
      let resultArr = response.body.businesses.map( item => new Restaurant( item ) );
      return resultArr;
    } )
    .catch( e => {throw e;} );

  return resultData;
}

module.exports = {
  getRestaurantsData
};
