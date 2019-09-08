exports.getSinglePage = (route, options) => {
  (req, res) => {
    return res.render(route, options);
  };
}