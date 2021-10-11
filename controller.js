;require('mongoose')

const Token = require('./models/token-schema');

class Controller {
  async createTokenMetadata(metadata) {
    return await Token.create(metadata);
  }

  async getTokenMetadata(id) {
    return await Token.findOne({ tokenId: id }).exec();
  }
}
module.exports = Controller;
