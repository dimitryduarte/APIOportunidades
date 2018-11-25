// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var CandidaturaSchema = new mongoose.Schema({
    codaluno: String,
    id_curriculo: String,
    id_empresa: String,
    data: String,
    ativo: Number
  });
  
  module.exports = mongoose.model('Candidatura', CandidaturaSchema);