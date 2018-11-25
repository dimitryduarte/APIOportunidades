var express = require('express');
var router = express.Router();
var Professor = require('../model/professores')

// rota para consultar no MongoDB os professores
router.get('/', function (req, res, next) {
  Professor.find(function (err, professores) { // select 
    if (err) return next(err);
      res.json(professores); // retorna os professores
  });
})

// rota para inserir no MongoDB um Professor 
router.post('/', function (req, res, next) {
  Professor.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB um Professor
router.put('/:id', function (req, res, next) {
  Professor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB um Professor
router.delete('/:id', function (req, res, next) {
  Professor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;