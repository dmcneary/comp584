"use strict";

const net = require('net');

// store port number from command line args
const PORT = process.argv[2];
// create server instance
const server = net.createServer(socket => {
    // create new Date object and define required parts
    // pad month, day, hour, and minute with leading zeros if necessary
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    // construct datetime string and close socket with write
    const data = `${year}-${month}-${day} ${hour}:${minute}\n`;
    socket.end(data);
});

// listen for connections
server.listen(PORT);