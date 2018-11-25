// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var CurriculoSchema = new mongoose.Schema({
    codaluno: String,
    email: String,
    telefone: String,
    celular: String,
    descricao: String,
    criaticidade: Number,
    comunicacao: Number,
    trabalhoequipe: Number,
    lideranca: Number
  });
  
  module.exports = mongoose.model('Curriculo', CurriculoSchema);