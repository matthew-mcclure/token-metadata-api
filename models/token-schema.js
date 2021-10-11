const mongoose = require('mongoose');

let TokenSchema = new mongoose.Schema({
    attributes: [ { display_type: String, trait_type: String, value: mongoose.Schema.Types.Mixed } ],
    description: String,
    image: String,
    name: String,
    tokenId: { type: Number, unique : true, required : true, },
});

module.exports = mongoose.model('Token', TokenSchema);
