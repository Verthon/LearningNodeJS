var SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash="") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash = () => SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
}