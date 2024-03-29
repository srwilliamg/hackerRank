'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    console.log(inputString);
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    
    let getSockColors = (ar) => ar.filter((v,i) => ar.indexOf(v) === i);
    let sockColors = getSockColors(ar);
    let numSuckColor = sockColors.length;
    let pairs = 0, result = 0;
    
    for(let i = 0; i < numSuckColor; i++){
        pairs = ar.filter((currentValue) => currentValue == sockColors[i]);
        result += Math.floor(pairs.length/2);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream("./out");

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
