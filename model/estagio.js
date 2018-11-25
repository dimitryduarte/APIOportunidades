// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var EstagioSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    curso: String,
    periodo: String,
    ultimoTrabalho: String
  });
  
  module.exports = mongoose.model('Estagio', EstagioSchema);