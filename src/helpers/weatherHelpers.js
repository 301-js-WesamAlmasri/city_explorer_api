const { getDataFromAPI } = require( '../clients/superAgent' );
const { Weather } = require( '../store' );

//function to get weather data
function getWeatherData( latitude, longitude ) {
  let url = 'https://api.weatherbit.io/v2.0/forecast/daily';
  let params = {
    key: process.env.WEATHER_API_KEY,
    lat: latitude,
    lon: longitude
  };

  let resultData = getDataFromAPI( url, params )
    .then( response => {
      let resultArr = response.body.data.map( item => new Weather( item ) );
      return resultArr;
    } )
    .catch( e => {throw e;} );

  return resultData;
}

module.exports = {
  getWeatherData
};
