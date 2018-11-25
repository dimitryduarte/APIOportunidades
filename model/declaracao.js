// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var DeclaracaoSchema = new mongoose.Schema({
    nome: String,
    codigo: Number,
    data: String,
    curso: String,
    solicitante: String
  });
  
  module.exports = mongoose.model('Declaracao', DeclaracaoSchema);