"use strict";

const http = require('http');

// store command-line args
const url = process.argv[2];


try {
    // perform GET request
    http.get(url, res => {
        // encode response Stream to UTF8 string
        res.setEncoding('utf8');

        // log data errors to stderr
        res.on('error', err => console.error(err));

        // log incoming data to stdout
        res.on('data', data => console.log(data));
    });
} catch (err) {
    // log errors with GET request to stderr
    console.error(err);
}