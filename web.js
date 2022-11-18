const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log('log of request start')
  console.log(req.body);
  console.log('log of request end')
  const moves = ['F', 'T', 'L', 'R'];
  
  // TODO add your implementation here to replace the random response
  res.send(moves[Math.floor(Math.random() * moves.length)]);
  //res.send(moves['F']);
});

app.listen(process.env.PORT || 8080);
