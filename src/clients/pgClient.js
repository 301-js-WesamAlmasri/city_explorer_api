const { Client } = require( 'pg' );

//init pg clinet
const client = new Client( {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DEV_MODE ? false : { rejectUnauthorized: false }
} );

// function to exute query to DB and return the result
function executeQueryToDB ( sqlQuery, values ) {
  let result = client
    .query( sqlQuery, values )
    .then( dbRespnse => dbRespnse )
    .catch( e => { throw e; } );

  return result;
}

module.exports = {
  client,
  executeQueryToDB
};
