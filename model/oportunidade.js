// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var OportunidadeSchema = new mongoose.Schema({
    id_empresa: String,
    empresa: String,
    cnpj: String,
    periodo: String,
    tipo: String,
    area: String,
    validade: String,
    descricao: String,
    requisitos: String,
    observacoes: String,
    status: Number
  });
  
  module.exports = mongoose.model('Oportunidade', OportunidadeSchema);