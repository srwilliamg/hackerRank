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


// Complete the jumpingOnClouds function below.
function jumpingOnClouds(allCloudsStatus) {
    let howLongJump = (allCloudsStatus, actualPosition) => {return (actualPosition < allCloudsStatus.length && allCloudsStatus[actualPosition+2] != 1)?2:1;}
    let actualPosition = 0;
    let result = [];

    while (actualPosition < allCloudsStatus.length-1) {
        console.log(actualPosition);
        if(allCloudsStatus[actualPosition] == 0){
            actualPosition += howLongJump(allCloudsStatus, actualPosition);
            result.push(actualPosition);
        }
    }
    
    return result.length
}

function main() {
    const ws = fs.createWriteStream("./out");

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
