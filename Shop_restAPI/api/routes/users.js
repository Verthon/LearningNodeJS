const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find()
    .select('email _id')
    .then(docs => {
      const response = {
        users: docs.map(user => {
          return {
            email: user.email,
            _id: user._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/users/' + user._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select('email _id')
    .then(doc => {
      if (doc) {
        res.status(200).json({
          user: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/users',
          },
        });
      } else {
        res.status(404).json({ message: 'Not found user with provided id' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post('/signup', (req, res, next) => {
  User.find({ email: req.body.email })
    .then(user => {
      if (user.length >= 1) {
        res.status(409).json({
          message: 'User already exists',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then(result => {
                res.status(201).json({
                  message: 'User created',
                  body: { result },
                });
              })
              .catch(err => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/login', (req, res, next) => {
  User.find({ email: req.body.email})
    .then(user => {
      if(user.length < 1){
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if(err){
          return res.status(401).json({
            message: 'Auth failed'
          });
        }

        if(result){
          const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          }, 
          process.env.JWT_KEY,
          {
            expiresIn: '1h'
          }
          )
          return res.status(200).json({
            message: 'Auth successful',
            token: token
          });
        }

        return res.status(401).json({
          message: 'Auth failed'
        });
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
});

router.delete('/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({
        message: 'User deleted.',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/users',
          body: { email: 'String', password: 'String' },
        },
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
