"use strict";

const fs = require('fs');

// use readFile to load file into UTF-8 encoded String
const count = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    // print error if present
    if (err) console.log(err);
    else {
        // split String by newline character and print length of array, minus 1, to stdout
        console.log(data.split('\n').length - 1);
    }
});