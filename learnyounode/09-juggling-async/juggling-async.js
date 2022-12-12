"use strict";

const http = require('http');

// store command-line args
const urls = process.argv.slice(2);

// array to hold result of GET request from each URL
const result = [];

// count # of successful finished streams
let successes = 0;

urls.forEach((url, idx) => {
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
    
            res.on('end', () => {
                // join chunks into a String and place in result array
                result[idx] = buffer.join('');

                //update count of successful GETs
                successes++;

                // if all 3 streams are finished, print each result
                if (successes === 3) {
                    result.forEach(data => console.log(data));
                }
            });
        });
    } catch (err) {
        // log errors with GET request to stderr
        console.error(err);
    }
});