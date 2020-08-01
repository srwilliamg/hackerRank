'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(map, doubles);
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let pairWeWant = [rx, r2x];
    if (doubles[pairWeWant] !== undefined) {
      count = count + doubles[pairWeWant]
    }
    let doub = [x, rx];
    console.log(doub);
    if (doubles[doub] == undefined) doubles[doub] = 0;
    doubles[doub] = doubles[doub] + ((map[rx] == undefined) ? 0 : map[rx]);
    // Add x to map
    (map[x] == undefined) ? map[x] = 1 : map[x]++;
  }
  console.log(count);
  return count;
}


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + '\n');

  ws.end();
}
