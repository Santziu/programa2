import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';

createServer(
  function (req, res) {
    let g = parse(req.url, true);
    let filename = "./" + g.pathname;
    console.log(g);
    console.log(filename);

    readFile(filename, function (err, data) {
      console.log(err);
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("404 not found");
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(data);
    })
  }
).listen(8080);
