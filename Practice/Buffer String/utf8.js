const fs = require('fs');
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('UTF-8 chunk:', chunk);
});
