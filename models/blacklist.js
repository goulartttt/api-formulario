const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blacklist = new Schema({
    cpf: {type: String, required:true}
});

module.exports = mongoose.model('blacklist', blacklist);