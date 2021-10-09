;require('mongoose')

const Token = require('./models/token-schema');
const Utilities = require("./utilities");

class Controller {
  async getTokenMetadata(id) {
    const token = await Token.findOne({ tokenId: id }).exec();
    return new Utilities().formatTokenMetadata(token);
  }
}
module.exports = Controller;
