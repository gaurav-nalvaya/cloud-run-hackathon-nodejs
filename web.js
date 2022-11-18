const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log('log of request start');
  console.log(req.body);
  try{
     console.log('log of request arena');
  console.log(req.body.arena);
    
      console.log('log of request dims');
     console.log(req.body.arena.dims);
      console.log('log of request state');
     console.log(req.body.arena.dims.state);
    
    
  }catch(ex){
  }
  console.log('log of request end');
  const moves = ['F', 'T', 'L', 'R'];
  
  // TODO add your implementation here to replace the random response
  res.send(moves[Math.floor(Math.random() * moves.length)]);
  //res.send(moves['F']);
});

app.listen(process.env.PORT || 8080);
