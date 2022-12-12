"use strict";

// use filtering module
const filterFunc = require('./mymodule');

// store command-line args
const dir = process.argv[2], ext = process.argv[3];

// call imported module
filterFunc(dir, ext, (err, list) => {
    // log errors to stderr if present
    if (err) return console.error(err);

    // log each filtered filename to stdout
    list.forEach(file => console.log(file));
});