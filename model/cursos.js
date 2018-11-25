// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var CursoSchema = new mongoose.Schema({
    codigo: String,
    curso: String,
    duracao: String
  });
  
  module.exports = mongoose.model('Curso', CursoSchema);