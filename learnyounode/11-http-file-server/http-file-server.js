"use strict";

const fs = require('fs');
const http = require('http');

// store port number and file path from command line args
const PORT = process.argv[2], path = process.argv[3];

// create server instance
const server = http.createServer((req, res) => {
    // read file
    const file = fs.createReadStream(path);

    // pipe read file stream to response stream
    file.on('open', () => file.pipe(res));

    // send any errors from file read stream to response stream and end connection
    file.on('error', err => res.end(err));
});

// listen for connections
server.listen(PORT);