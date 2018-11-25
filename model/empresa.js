// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var EmpresaSchema = new mongoose.Schema({
    nomefantasia: String,
    razaosocial: String,
    cnpj: String,
    ie: String,
    atuacao: String,
    rua: String,
    numero: Number,
    cep: String,
    bairro: String,
    cidade: String,
    uf: String,
    telefone: String,
    celular: String,
    email: String,
    observacoes: String
  });
  
  module.exports = mongoose.model('Empresa', EmpresaSchema);