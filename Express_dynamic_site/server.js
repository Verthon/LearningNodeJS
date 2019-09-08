const express = require('express');
const hbs  = require('express-handlebars');
const server = express();
const path = require('path');

//Routes
const homeRoute = require('./routes');
const speakersRoute = require('./routes/speakers');
const faqRoute = require('./routes/faq');
const pricingRoute = require('./routes/pricing');
const ticketRoute = require('./routes/buy-ticket');
const contactRoute = require('./routes/contact');
const scheduleRoute = require('./routes/schedule');

const PORT = 3000;

server.use(express.static('public'));

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(homeRoute);
server.use(speakersRoute);
server.use(faqRoute);
server.use(pricingRoute);
server.use(ticketRoute);
server.use(contactRoute);
server.use(scheduleRoute);

server.use((req, res, next) => {
  res.status('404').render('404.ejs', {pageTitle: 'Not Found'});
});


server.listen(PORT, () => console.log('Listen on port 3000'));

module.export = server;
