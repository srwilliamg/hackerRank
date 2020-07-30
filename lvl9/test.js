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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let max = 0, sum = 0;
    let result = Array(n).fill(0);
    let operations, a, b, value;
    
    // console.log(n, queries, result);
    for (let i = 0; i < queries.length; i++) {
        operations = queries[i];
        a = operations[0]-1;
        b = operations[1]-1;
        value = operations[2];
        // console.log(result);
        result[a] += value;
        if (b + 1 < n ) {
            result[b + 1] -= value;
        }
    }
     console.log(result);
    for (let i = 0; i < n; i++) {
      sum += result[i];
      max = Math.max(max, sum);
    }

    return max;
}

// // Complete the arrayManipulation function below.
// function arrayManipulation(n, queries) {
//     let max = 0;
//     let result = Array(n).fill(0);
//     let operations, a, b, value;
//     let x = {};
    
//     // console.log(n, queries, result);
//     for (let i = 0; i < queries.length; i++) {
//         operations = queries[i];
//         a = operations[0]-1;
//         b = operations[1]-1;
//         value = operations[2];
//         result[a]+=value;
//         result[b]+=value;
        
//     }
//      for (let j = 0; j <= result.length; j++) {
//         if(result[j] > max){
//             max = result[j];
//         }
//     }
//     return max;
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
