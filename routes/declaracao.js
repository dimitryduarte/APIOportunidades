var express = require('express');
var router = express.Router();
var Declaracoes = require('../model/declaracao')

// rota para consultar no MongoDB os declaracao
router.get('/', function (req, res, next) {
  Declaracoes.find(function (err, declaracao) { // select 
    if (err) return next(err);
      res.json(declaracao); // retorna os declaracao
  });
})

// rota para consultar no MongoDB os declaracao
router.get('/:id', function (req, res, next) {
  Declaracoes.findById(req.params.id, function (err, declaracao) { // select 
    if (err) return next(err);
      res.json(declaracao); // retorna os declaracao
  });
})

// rota para inserir no MongoDB uma declaracao 
router.post('/', function (req, res, next) {
  Declaracoes.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB uma declaracao
router.put('/:id', function (req, res, next) {
  Declaracoes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma declaracao
router.delete('/:id', function (req, res, next) {
  Declaracoes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;