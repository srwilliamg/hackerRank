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

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swap = 0, ordered=0;
    for (let index = arr.length-1; index >= 0; index--) {
        let element = arr[index];
        console.log(index, element ,swap, ordered, arr.toString());
        if(ordered == arr.length){
            break;
        }
        if(index == element-1){
            ordered++;
            continue;
        }
        else{
            for (let j = index; j >=0; j--) {
                let elementj = arr[j];
                if(elementj-1 == index){
                    swap++;
                    arr[index] = elementj;
                    arr[j] = element;
                    ordered++;
                    break;
                }
                
            }
        }
    }
    return swap;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
