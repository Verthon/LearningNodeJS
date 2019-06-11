const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t){
    this.title = t;
  }

  save () {
    const dataPath = path.join(
      path.dirname(process.mainModule.filename),
      'data', 
      'products.json'
      );
    fs.readFile(dataPath, (err, fileContent) => {
      console.log(fileContent);
    });  
  }

  static fetchAll() {
    return products;
  }
}