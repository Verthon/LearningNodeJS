module.exports = {
  
  handleError: error => {
    res.status(500).json({ error: err });
  }

}