var express = require('express')

var app = express()
var cors = require('cors')

//
var bodyParser = require('body-parser')
var urlPost = bodyParser.urlencoded({ extended: true }) 
app.use(bodyParser.json());
app.use(cors());

var student = require('./routes/student');
var curso = require('./routes/curso');
var professor = require('./routes/professor');
var estagio = require('./routes/estagio');
var empresa = require('./routes/empresa');
var curriculo = require('./routes/curriculo');
var oportunidade = require('./routes/oportunidade');
var filtro = require('./routes/filtros');
var candidaturas = require('./routes/candidatura');

// conecta no banco de dados
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/academico', { 
    promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


// As rotas get, post, put e delete de estudante deverão ser
// com /student
app.use('/student', student);
app.use('/curso', curso);
app.use('/professor', professor);
app.use('/estagio', estagio);
app.use('/empresa', empresa);
app.use('/curriculo', curriculo);
app.use('/oportunidade', oportunidade);
app.use('/filtros', filtro);
app.use('/candidatura', candidaturas);

app.listen(3000)