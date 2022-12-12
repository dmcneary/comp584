"use strict";
const fs = require('fs');

const filterFunc = (dir, ext, cb) => {
    fs.readdir(dir, (err, list) => {
        // if error while reading directory, return the error as an arg to callback function
        if (err) return cb(err);
        
        // for each filename in directory list, filter for matching extension
        const filteredList = list.filter(file => file.indexOf('.') > 0 && file.split('.').pop() === ext);
        
        // call the callback function with no error and the filtered list of filenames
        cb(null, filteredList);
    });
};

module.exports = filterFunc;