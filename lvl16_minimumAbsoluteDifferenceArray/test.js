'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  let mad = Infinity;
  arr = arr.sort();
  // console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    const ni = arr[i];
    const nj = arr[i-1];
    let md = Math.abs(nj-ni);
    // console.log(md);
    if( md < mad) {
      mad = md;
    } 
  }
  // console.log("===>",mad);
  return mad;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
