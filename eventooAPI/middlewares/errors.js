exports.notFound = (req, res, next) => {
  const err = new Error('404 Page not found');
  err.status = 404;
  next(err)
}

exports.catchError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message
  })
}