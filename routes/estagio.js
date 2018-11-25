var express = require('express');
var router = express.Router();
var Estagiario = require('../model/estagio')

// rota para consultar no MongoDB os estagios
router.get('/', function (req, res, next) {
  Estagiario.find(function (err, estagio) { // select 
    if (err) return next(err);
      res.json(estagio); // retorna os estagio
  });
})

// rota para consultar no MongoDB os estagios
router.get('/:id', function (req, res, next) {
  Estagiario.findById(req.params.id, function (err, estagio) { // select 
    if (err) return next(err);
      res.json(estagio); // retorna os estagio
  });
})

// rota para inserir no MongoDB um estagios
router.post('/', function (req, res, next) {
  Estagiario.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB um estagios
router.put('/:id', function (req, res, next) {
  Estagiario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB um estagios
router.delete('/:id', function (req, res, next) {
  Estagiario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;