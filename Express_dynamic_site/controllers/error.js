exports.get404 = (req, res, next) => res.status('404').render('404.ejs', { pageTitle: 'Not Found', links: ['speakers', 'about', 'schedule', 'news', 'contact'] })
