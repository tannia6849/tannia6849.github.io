const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const a = Number(url.parse(req.url, true).query.a);
  const b = Number(url.parse(req.url, true).query.b);
  res.end(JSON.stringify({ sum: a+b }));
}).listen(5000);
