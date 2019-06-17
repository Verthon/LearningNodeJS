const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {

  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
    callback(null, true)
  }
  else{
    callback(null, false);
    callback(new Error('I don\'t have a clue!'))
 
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
});

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
    .select('name price _id productImage')
    .then(docs => {
      const response = {
        count: docs.length,
        orders: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            productImage: doc.productImage,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + doc._id,
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

router.post('/', upload.single('productImage'), (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path,
  });

  product
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Product created successfully',
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/' + result._id,
          },
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('name price _id productImage')
    .then(doc => {
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/products',
          },
        });
      } else {
        res.status(404).json({ message: 'Not found product with provided id' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/', (req, res, next) => {
  const id = req.params.productId;
  const options = {};

  for (const ops of req.body) {
    options[ops.propName] = ops.value;
  }
  Product.patch({ _id: id }, { $set: { options } })
    .then(res => {
      res.status(200).json({
        message: 'Product updated',
        product: { res },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({
        message: 'Product deleted.',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/products',
          body: { name: 'String', price: 'Number' },
        },
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
