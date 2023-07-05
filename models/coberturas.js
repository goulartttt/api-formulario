const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coberturas = new Schema({
    nome:{type: String, required: true },
    min:{type: Number, required: true},
    max:{type: Number, required: true}
})

module.exports = mongoose.model('coberturas', coberturas);