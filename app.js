const express = require('express');
const app = express();
const db = require('./db.js');
const server = app.listen(8080, function() {
  console.log('Server ready');
})

app.get('/',function(req, res) {
res.json({'staus': 'ready'})
})

