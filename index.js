const http = require('http');

http
  .createServer((req, res) => {
    res.end('Hola Mundo!');
  })
  .listen(3001, 'localhost', () => {
    console.log('Server listen on port 3001');
  });
