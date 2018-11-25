// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var FiltrosSchema = new mongoose.Schema({
    codaluno: String,
    area: String,
    periodo: String,
    tipo: String
  });
  
  module.exports = mongoose.model('Filtros', FiltrosSchema);