const mongoose = require('mongoose');

let TokenSchema = new mongoose.Schema({
    attributes: [ { display_type: String, trait_type: String, value: mongoose.Schema.Types.Mixed } ],
    description: String,
    hidden: Boolean,
    id: Number,
    image: String,
    name: String,
});

module.exports = mongoose.model('Token', TokenSchema);
