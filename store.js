// location constructor
function Location( data ) {
  this.search_query = data.search_query;
  this.formatted_query = data.formatted_query;
  this.latitude = data.latitude;
  this.longitude = data.longitude;
}

// weather constructor
function Weather( data ) {
  this.forecast = data.weather.description;
  this.time = new Date( data.datetime ).toString().slice( 0, 15 );
}

// park constructor
function Park( data ) {
  this.name = data.fullName;
  this.address = Object.values( data.addresses[0] ).join( ', ' );
  this.fee = data.fees[0] || 0;
  this.description = data.description;
  this.url = data.url;
}
  
// movie constructor
function Movie( data ) {
  this.title = data.title;
  this.overview = data.overview;
  this.average_votes = data.vote_average;
  this.total_votes = data.vote_count;
  this.image_url = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  this.popularity = data.popularity;
  this.released_on = data.release_date;
}

// restaurant constructor
function Restaurant( data ) {
  this.name = data.name;
  this.image_url = data.image_url;
  this.price = data.price;
  this.rating = data.rating;
  this.url = data.url;
}

module.exports = {
  Location,
  Weather,
  Park,
  Movie,
  Restaurant
};
