"use strict";

// use fs module
const fs = require('fs');

// use readFileSync to load file specified in command-line argument to String object
const contents = fs.readFileSync(process.argv[2], 'utf8');

// Split string using \n as delimiter and count elements in resulting array (minus 1)
const newlinesCount = contents.split('\n').length - 1;

// print count to stdout
console.log(newlinesCount);