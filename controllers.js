const blacklistModel = require('./models/blacklist')
const coberturasModel = require('./models/coberturas')
const cepRestritosModel = require('./models/cepRestritos')
const cotacoesModel = require('./models/cotacoes')

const controllers = {
    blacklist:async (req, res) => {
        try {
            const {cpf} = req.body;
            if(!cpf) throw 'Cpf não informado'

            const cpfs = await blacklistModel.findOne({
                cpf: cpf
            });
            if(cpfs){
                res.json({success: false, msg:"Documento invalido", cpf: cpf})
            }else{
                res.json({success: true, msg:"Documento valido", cpf: cpf})
            }
        } catch (error) {
            res.status(400).json({success: false, msg: error})
        }
    },

    coberturas:async (req, res) =>{
        try {
            const coberturas = await coberturasModel.find({})
            res.json({success: true, coberturas:coberturas})
        } catch (error) {
            res.status(400).json({success: false, msg: error})
        }    
    },

    cepRestritos:async (req, res) => {
        try {
            const {cep} = req.body;
            if(!cep) throw 'Cep não informado'

            const ceps = await cepRestritosModel.findOne({
                cep: cep
            });
            if(ceps){
                res.json({success: true, msg:"Risco recusado para sua região", cep: cep})
            }else{
                res.json({success: false, msg:"Cep cadastrado", cep: cep})
            }
        } catch (error) {
            res.status(400).json({success: false, msg: error})
        }
    },

    cotacoes: async (req, res) => {
        try {
            const cotacao = new cotacoesModel(req.body);
            await cotacao.save()
            res.json({success: true, msg:"Cotação salva com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false, msg:"Erro ao salvar cotação"})
        }
        
    }
}



module.exports = controllers