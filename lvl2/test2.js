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

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let array = s.split("");
    console.log(array);
    let seaLevel = 0;
    let numValleys = 0;

    array.forEach(step => {
        numValleys += (seaLevel <= -1 && step=="U" && seaLevel+1==0)?1:0;
        seaLevel += step == "D"? -1:1;
    });

    return numValleys;
}

function main() {
    console.log(process.env.USERNAME);
    const ws = fs.createWriteStream("./out");

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
