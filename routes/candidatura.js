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