const Utilities = require("./utilities");
const data = require("./data");

class Controller {
  async getTokenMetadata(id) {
    return new Promise((resolve, reject) => {
      const tokenMetadata = data.find((todo) => todo.id === parseInt(id));
      const formattedTokenMetadata = new Utilities().formatTokenMetadata(tokenMetadata);
      resolve(formattedTokenMetadata);
    });
  }
}
module.exports = Controller;
