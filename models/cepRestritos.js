const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cepRestritos = new Schema({
    cep: {type: String, required:true}
});

module.exports = mongoose.model('cepRestritos', cepRestritos);