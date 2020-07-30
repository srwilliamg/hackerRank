'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q, N) {
    let minBribes = 0;
    for (let i = N - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++){
            if (q[j] > q[i]) minBribes++;
        }
    }
    console.log(minBribes);
}

function main() {
    
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        console.log(`t: ${tItr}`);
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q, n);
    }
}
