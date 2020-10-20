function soma(a, b) {
    return a + b;
  }

function subtrae(a, b){
      return a - b;
  }

function multi(a, b){
      return a * b;
  }

function divide(a, b){
      return a/b;
  }

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
var body = req.body;
var resultado = soma(body.a, body.b);
var resultado2 = subtrae(body.a, body.b);
var resultado3 = multi(body.a, body.b);
var resultado4 = divide(body.a, body.b);
res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}
O resultado da subtração é ${resultado2}
O resultado da multiplicação é ${resultado3} e
O resultado da divisão é ${resultado4}  `);
  });

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});