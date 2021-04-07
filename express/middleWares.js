

// Logger middleware
function logger( req, res, next ) {
  console.log( `Time: ${Date.now()}, Requested method: ${req.method}, Requested url: ${req.originalUrl}` );
  next();
}


// function to handle errors
function handleError ( err, req, res, next ) {
  console.error( err.stack );
  let response = {
    status: err.status || 500,
    responseText: err.message,
  };

  res.status( err.status || 500 ).send( response );
}

module.exports = {
  logger,
  handleError
};
