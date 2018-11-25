var express = require('express');
var router = express.Router();
var Oportunidade = require('../model/oportunidade')

// rota para consultar no MongoDB os declaracao
router.get('/', function (req, res, next) {
    Oportunidade.find(function (err, oportunidade) { // select 
    if (err) return next(err);
      res.json(oportunidade); // retorna os oportunidade
  });
})

// rota para consultar no MongoDB os oportunidade
router.get('/:id', function (req, res, next) {
    Oportunidade.findById(req.params.id, function (err, oportunidade) { // select 
    if (err) return next(err);
      res.json(oportunidade); // retorna os oportunidade
  });
})

// rota para inserir no MongoDB uma oportunidade 
router.post('/', function (req, res, next) {
    Oportunidade.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB uma oportunidade
router.put('/:id', function (req, res, next) {
    Oportunidade.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma oportunidade
router.delete('/:id', function (req, res, next) {
    Oportunidade.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;