const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorsHandler = require('./middlewares/errors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const contactRouter = require('./routes/contact');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/contact', contactRouter);
app.use(errorsHandler.notFound)
app.use(errorsHandler.catchError)

app.listen(8080, function(){
  console.log('Listening')
});

module.exports = app;
