// const express = require('express');

// const port = process.env.PORT || 3000;

// const app = express();

// app.get("/", (req,res) => {
//   res.send({ ok: true })
// });

// app.listen(process.env.PORT || 3000);

const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(port);
