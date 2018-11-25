var express = require('express');
var router = express.Router();
var Filtros = require('../model/filtros')

// rota para consultar no MongoDB os declaracao
router.get('/', function (req, res, next) {
    Filtros.find(function (err, filtros) { // select 
    if (err) return next(err);
      res.json(filtros); // retorna os filtros
  });
})

// rota para consultar no MongoDB os filtros
router.get('/:id', function (req, res, next) {
    Filtros.findById(req.params.id, function (err, filtros) { // select 
    if (err) return next(err);
      res.json(filtros); // retorna os filtros
  });
})

// rota para inserir no MongoDB uma filtros 
router.post('/', function (req, res, next) {
    Filtros.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB uma filtros
router.put('/:id', function (req, res, next) {
    Filtros.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma filtros
router.delete('/:id', function (req, res, next) {
    Filtros.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;