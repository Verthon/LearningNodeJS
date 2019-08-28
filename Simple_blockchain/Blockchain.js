class Blockchain {
  constructor () {
    this.chain = [];
  }

  createGenesisBlock = () => new Block('0', '24/05/2019', 'Genesis Block', '0');

  getLatestBlock = () => this.chain[this.chain.length - 1];

  createBlock = () => 
}