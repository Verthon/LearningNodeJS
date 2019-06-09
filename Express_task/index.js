const http = require('http');
const express = require('express');

const app = express();

//Second assignment

// app.use(req, res, next => {
//   console.log('Middleware 1');
//   next();
// });

// app.use(req, res, next => {
//   console.log('Middleware 2');
//   res.send("<p>Middleware 2</p>");
// });

app.use("/users", (req, res, next) => {
  console.log('Middleware 2');
  res.send('<h1>Users</h1> <a href="/">home</a>');
});

app.use("/", (req, res, next) => {
  console.log('Inside of middleware');
  res.send('<h1>Home</h1> <a href="/users">users</a>');
});

app.listen(3000);