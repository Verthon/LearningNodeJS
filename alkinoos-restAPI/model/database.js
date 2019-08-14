const mongodb = require("mongodb");
const mongoose = require('mongoose');

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://user:admin@cluster0-ft0n5.mongodb.net/test?retryWrites=true&w=majority";
const mongoConnect = callback => {
  MongoClient.connect(uri)
  .then(result => console.log(result))
  .catch(err => console.log(err));
}

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

export default mongoConnect;