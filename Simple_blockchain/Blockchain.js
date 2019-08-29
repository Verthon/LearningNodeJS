import Block from './Block';

class Blockchain {
  constructor () {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock = () => new Block('0', '24/05/2019', 'Genesis Block', '0');

  getLatestBlock = () => this.chain[this.chain.length - 1];

  addBlock = newBlock => {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = Block.prototype.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid = () => {
    for( let i = 0; i < this.chain.length - 1; i++ ){

    }
  }
}