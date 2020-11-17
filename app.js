var express = require('express');
var bodyParser = require('body-parser');
var calculadora = require('./calculadora');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
var body = req.body;
var a = parseFloat(body.a);
var b = parseFloat(body.b);
var resultado = calculadora.soma(a, b);
res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtrae', function (req, res) {
var body = req.body;
var resultado2 = calculadora.subtrae(body.a, body.b);
res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado2}`);
});

app.post('/multi', function (req, res) {
var body = req.body;
var resultado3 = calculadora.multi(body.a, body.b);
res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado3}`);
});

app.post('/divide', function (req, res) {
var body = req.body;
var resultado4 = calculadora.divide(body.a, body.b);
res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado4}`);
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});