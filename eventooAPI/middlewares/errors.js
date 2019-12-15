exports.notFound = (err, req, res, next) => {
  const error = new Error('404 Page not found');
  error.status = 404;
  next(error)
}

exports.catchError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message
  })
}