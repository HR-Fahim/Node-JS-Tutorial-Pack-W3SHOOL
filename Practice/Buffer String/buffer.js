const buffer = Buffer.from('This is a buffer example');
const bufferString = buffer.toString('utf8');
console.log('Buffer to String:', bufferString);

const fs = require('fs');

fs.readFile('example.txt', (err, data) => {
  if (err) throw err;
  const bufferString = data.toString('utf8');
  console.log('File content as string:', bufferString);
});


