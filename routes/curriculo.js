var express = require('express');
var router = express.Router();
var Curriculo = require('../model/curriculo')

// rota para consultar no MongoDB os curriculo
router.get('/', function (req, res, next) {
  Curriculo.find(function (err, curriculo) { // select 
    if (err) return next(err);
      res.json(curriculo); // retorna os empresa
  });
})

// rota para consultar no MongoDB os curriculo
router.get('/:id', function (req, res, next) {
  Curriculo.findById(req.params.id, function (err, curriculo) { // select 
    if (err) return next(err);
      res.json(curriculo); // retorna os curriculo
  });
})

// Rota GET para consultar um usuário
router.get('/cod/:codusuario', function(req, res){
  // Recebendo os parâmetros de um query string
  var codusu = req.params.codusuario;
  // Fazendo uma consulta no banco de dados
  var params = {codaluno: codusu};
  Curriculo.find(params,function(err, curriculo){
      if (err) return next(err);
      res.json(curriculo); // retorna os curriculo
  });
});

// rota para inserir no MongoDB uma curriculo 
router.post('/', function (req, res, next) {
  Curriculo.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB uma curriculo
router.put('/:id', function (req, res, next) {
  Curriculo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma curriculo
router.delete('/:id', function (req, res, next) {
  Curriculo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;