const htttp = require('http');

const server = htttp.createServer((req, res) => {

    if (req.url === '/about') {
        res.write('About Page');
    } else if (req.url === '/') {
        res.write('Hello World!');

    }
    else {
        res.write('Not Found!');
    }

    res.end();
});

server.listen(8080);

console.log('Server is Running on Port 8080');