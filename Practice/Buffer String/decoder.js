// Importing String Decoder Class
const http = require('http');

const {StringDecoder} = require('string_decoder'); // StringDecoder Class

const server = http.createServer((req, res) => {
  if (req.url === '/txt' && req.method === 'POST') {
    let decoder = new StringDecoder('utf8');
    let string = '';
    req.on('data', (buffer) => {
      string += decoder.write(buffer);
    });

    req.on('end', () => {
      string += decoder.end();
      res.end(string); // Sending Response
      console.log(string); // Printing Response
    });
  } else {
    res.end('Not Found!');
  }
});

server.listen(8080, () => {
  console.log('Server is Running on Port 8080');
});
