const mongoose = require('mongoose');

let TokenSchema = new mongoose.Schema({
    attributes: [ { display_type: String, trait_type: String, value: mongoose.Schema.Types.Mixed } ],
    description: String,
    hidden: Boolean,
    image: String,
    name: String,
    tokenId: Number,
});

module.exports = mongoose.model('Token', TokenSchema);
