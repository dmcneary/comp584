"use strict";

// declare accumulator for arguments
let sum = 0;

// loop over args starting at index 2 (first two args are not used) 
for (let i = 2; i < process.argv.length; i++) {
    // add value of arg (cast as number) to sum
    sum += +process.argv[i];
}

// print sum to stdout
console.log(sum);