const fs = require('fs');
const path = require('path');

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  'data', 
  'products.json'
  );


const getProductsFromFile = (callback) => {
  fs.readFile(dataPath, (err, fileContent) => {
    if(err) {
      callback([]);
    }
    else{
      callback(JSON.parse(fileContent));
    }
  })
}

module.exports = class Product {
  constructor(t){
    this.title = t;
  }

  save () {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), err => {
        console.log(err);
      });
    }); 
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
}