
exports.getAbout = (req, res, next) => {
  res.render('about', {
    pageTitle: 'Contact',
    links: ['speakers', 'about', 'schedule', 'contact']
  })
}
