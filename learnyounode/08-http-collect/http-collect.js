"use strict";

const http = require('http');

// store command-line args
const url = process.argv[2];

try {
    // perform GET request
    http.get(url, res => {
        // declare array to collect incoming data
        const buffer = [];
        // encode response Stream to UTF8 string
        res.setEncoding('utf8');

        // log data errors to stderr
        res.on('error', err => console.error(err));

        // log incoming data to stdout
        res.on('data', data => buffer.push(data));

        // print collected data and its length
        res.on('end', () => {
            const str = buffer.join('');
            console.log(str.length);
            console.log(str);
        });
    });
} catch (err) {
    // log errors with GET request to stderr
    console.error(err);
}