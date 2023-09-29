const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cotacoes = new Schema({ 
    nome:{type: String, required: true },
    coberturas: {type: Object, required: true},
    cpf:{type:String, required:true},
    endereco:{type:Object, required:true},
    valorPremio:{type: Number, required:true},
    inicioVigencia:{type: String, required:true},
    fimVigencia:{type: String, required:true}
})  

module.exports = mongoose.model('cotacoes', cotacoes);