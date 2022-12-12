"use strict";

const fs = require('fs');
const http = require('http');

// store port number from command line args
const PORT = process.argv[2];

// create server instance
const server = http.createServer((req, res) => {
    // declare string for collecting request data
    let string = "";
    if (req.method === "POST") {
        // append data chunks in upper case to collector string
        req.on('data', data => string += data.toString().toUpperCase());
        // when request ends, respond with collected string and end connection
        req.on('end', () => res.end(string));
    } else res.end('Rejected');
});

// listen for connections
server.listen(PORT);