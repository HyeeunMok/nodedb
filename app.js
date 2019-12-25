const express = require('express');
const app = express();
const db = require('./db.js');
const server = app.listen(8080, function() {
  console.log('Server ready');
})

app.get('/users/:id', function(req, res) {
  const query = "SELECT * from users where id = ?";
  console.log(req.params.id);
  const params = [req.params.id];
  db.all(query,params, function (err, row) {
    if (err) {
      throw err;
    }
    res.json({
      'status': row
    })
  })
})

app.get('/users', function (req, res) {
  const query = "SELECT * from users";
  db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({
      'status': rows
    })
  })
})

app.get('/',function(req, res) {
  res.json({'staus': 'ready'})
})

