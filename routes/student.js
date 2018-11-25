var express = require('express');
var router = express.Router();
var Student = require('../model/alunos')

// rota para consultar no MongoDB os alunos
router.get('/', function (req, res, next) {
  Student.find(function (err, alunos) { // select 
    if (err) return next(err);
      res.json(alunos); // retorna os alunos
  });
})

// rota para consultar no MongoDB os alunos
router.get('/:id', function (req, res, next) {
  Student.findById(req.params.id, function (err, alunos) { // select 
    if (err) return next(err);
      res.json(alunos); // retorna os alunos
  });
})

// rota para inserir no MongoDB um aluno 
router.post('/', function (req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB um aluno
router.put('/:id', function (req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB um aluno
router.delete('/:id', function (req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;