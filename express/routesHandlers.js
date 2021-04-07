const { getLocationData } = require( '../helpers/locationHelpers' );
const { getWeatherData } = require( '../helpers/weatherHelpers' );
const { getParksData } = require( '../helpers/parksHelpers' );
const { getMoviesData } = require( '../helpers/moviesHelpers' );
const { getRestaurantsData } = require( '../helpers/yelpHelpers' );


// function to handle location end point
function handleLocation ( req, res, next ) {
  let searchQuery = req.query.city;

  getLocationData( searchQuery )
    .then( response => res.status( 200 ).send( response ) )
    .catch( next );
}

// function to handle weather end point
function handleWeather ( req, res, next ) {
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;

  getWeatherData( latitude, longitude )
    .then( resultArr => {
      return res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

// function to handle park end point
function handleParks ( req, res, next ) {
  let searchQuery = req.query.search_query;

  getParksData( searchQuery )
    .then( resultArr => {
      res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

// function to handle movies end point
function handleMovies ( req, res, next ) {
  let searchQuery = req.query.search_query;

  getMoviesData( searchQuery )
    .then( resultArr => {
      res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

// function to handle yelp end point
function handleYelp ( req, res, next ) {
  let searchQuery = req.query.search_query;
  let pageNumber = req.query.page;

  getRestaurantsData( searchQuery, pageNumber )
    .then( resultArr => {
      res.status( 200 ).send( resultArr );
    } )
    .catch( next );
}

module.exports = {
  handleLocation,
  handleWeather,
  handleParks,
  handleMovies,
  handleYelp
};
