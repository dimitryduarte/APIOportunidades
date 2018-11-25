var express = require('express');
var router = express.Router();
var Candidatura = require('../model/candidatura')

// rota para consultar no MongoDB os declaracao
router.get('/', function (req, res, next) {
    Candidatura.find(function (err, candidatura) { // select 
    if (err) return next(err);
      res.json(candidatura); // retorna os candidatura
  });
})

// rota para consultar no MongoDB os candidatura
router.get('/:id', function (req, res, next) {
    Candidatura.findById(req.params.id, function (err, candidatura) { // select 
    if (err) return next(err);
      res.json(candidatura); // retorna os candidatura
  });
})

// rota para inserir no MongoDB uma candidatura 
router.post('/', function (req, res, next) {
    Candidatura.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// Rota GET para consultar um usuário
router.get('/id_empresa/:id', function(req, res){
  // Recebendo os parâmetros de um query string
  var idemp = req.params.id;
  // Fazendo uma consulta no banco de dados
  var params = {id_empresa: idemp};
  Candidatura.find(params,function(err, candidatura){
      if (err) return next(err);
      res.json(candidatura); // retorna os curriculo
  });
});

// Rota GET para consultar um usuário
router.get('/id_curriculo/:id', function(req, res){
  // Recebendo os parâmetros de um query string
  var idcur = req.params.id;
  // Fazendo uma consulta no banco de dados
  var params = {id_curriculo: idcur};
  Candidatura.find(params,function(err, candidatura){
      if (err) return next(err);
      res.json(candidatura); // retorna os curriculo
  });
});

// Rota GET para consultar um usuário
router.get('/codaluno/:codaluno', function(req, res){
  // Recebendo os parâmetros de um query string
  var cod = req.params.codaluno;
  // Fazendo uma consulta no banco de dados
  var params = {codaluno: cod};
  Candidatura.find(params,function(err, candidatura){
      if (err) return next(err);
      res.json(candidatura); // retorna os curriculo
  });
});

// rota para atualizar no MongoDB uma candidatura
router.put('/:id', function (req, res, next) {
    Candidatura.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma candidatura
router.delete('/:id', function (req, res, next) {
    Candidatura.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;