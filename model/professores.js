// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var ProfessorSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    formacao: String
  });
  
  module.exports = mongoose.model('Professor', ProfessorSchema);