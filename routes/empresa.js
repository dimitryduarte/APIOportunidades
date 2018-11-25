var express = require('express');
var router = express.Router();
var Empresa = require('../model/empresa')

// rota para consultar no MongoDB os declaracao
router.get('/', function (req, res, next) {
  Empresa.find(function (err, empresa) { // select 
    if (err) return next(err);
      res.json(empresa); // retorna os empresa
  });
})

// rota para consultar no MongoDB os empresa
router.get('/:id', function (req, res, next) {
  Empresa.findById(req.params.id, function (err, empresa) { // select 
    if (err) return next(err);
      res.json(empresa); // retorna os empresa
  });
})

// rota para inserir no MongoDB uma empresa 
router.post('/', function (req, res, next) {
  Empresa.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB uma empresa
router.put('/:id', function (req, res, next) {
  Empresa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB uma empresa
router.delete('/:id', function (req, res, next) {
  Empresa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;