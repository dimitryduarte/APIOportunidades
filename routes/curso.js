var express = require('express');
var router = express.Router();
var Curso = require('../model/cursos')

// rota para consultar no MongoDB os cursos
router.get('/', function (req, res, next) {
  Curso.find(function (err, cursos) { // select 
    if (err) return next(err);
      res.json(cursos); // retorna os cursos
  });
})

// rota para inserir no MongoDB um curso 
router.post('/', function (req, res, next) {
  Curso.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// rota para atualizar no MongoDB um curso
router.put('/:id', function (req, res, next) {
  Curso.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
  })

// rota para remove no MongoDB um curso
router.delete('/:id', function (req, res, next) {
  Curso.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
})

// exporta router
module.exports = router;