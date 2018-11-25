// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var StudentSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    endereco: String,
    rg: String
  });
  
  module.exports = mongoose.model('Student', StudentSchema);