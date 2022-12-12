"use strict";

const fs = require('fs');

// store command-line args
const dir = process.argv[2], ext = process.argv[3];

// use readdir method to read contents of directory
fs.readdir(dir, (err, list) => {
    // if error while reading directory, log to stdout & return
    if (err) return console.error(err);
    
    // for each filename in directory list
    list.forEach(file => {
        // if filename contains a matching extension, print filename to stdout 
        if (file.indexOf('.') > 0 && 
            file.split('.').pop() === ext) {
                console.log(file);
            }
    });
});