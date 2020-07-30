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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum = 0;
    let glasses = [];
    if (typeof arr === "object" && arr.length === 6 && arr.map(i => i.length).reduce((p, n) => p + n) === 36) {
        for (let row = 0; row <= 3; row++) {        
            for (let col = 0; col <= 3; col++) {
                sum = arr[row][col] + arr[row][col+1] + arr[row][col+2] + arr[row+1][col+1] +arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];
                glasses.push(sum);
            }
        }
        return (glasses.length > 0) ? Math.max(...glasses) : 0;
    }
    else{
        return 0;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
