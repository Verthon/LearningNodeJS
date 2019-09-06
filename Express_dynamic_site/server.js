const express = require('express');
const server = express();
const path = require('path');
const homeRoute = require('./routes');
const speakersRoute = require('./routes/speakers');
const faqRoute = require('./routes/faq');

const PORT = 3000;

server.use(express.static('public'));

server.set('view engine', 'handlebars');

server.use(homeRoute);
server.use(speakersRoute);
server.use(faqRoute);
server.use((req, res, next) => {
  res.status('404').send('<h1>Page not found!</h1>');
});


server.listen(PORT, () => console.log('Listen on port 3000'));

module.export = server;
