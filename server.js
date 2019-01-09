const https   = require('https');
const express = require('express');
const fs      = require('fs');
const app     = express();
var port    = process.env.port || 3000;


var options = {
  key: fs.readFileSync('./conf/key.pem'),
  cert: fs.readFileSync('./conf/cert.pem')
}

app.use(express.static('public'));

app.get('/', (req, res) =>res.sendFile('index.html'));



https.createServer(options, app).listen(port, () => console.log("server is on"));

//app.listen(3000, () =>console.log("server is on"));
