;require('mongoose')

const Token = require('./models/token-schema');
const Utilities = require("./utilities");

class Controller {
  async getTokenMetadata(id) {
    return new Promise((resolve, reject) => {
      const token = Token.findById(id);
      const formattedTokenMetadata = new Utilities().formatTokenMetadata(token);

      resolve(formattedTokenMetadata);
    });
  }
}
module.exports = Controller;
