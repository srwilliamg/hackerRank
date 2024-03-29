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

// Complete the stringConstruction function below.
function stringConstruction(s) {
  let v = s.split("");
  let cost = 0;
  let newString = "";
  for (let i = 0; i < v.length; i++) {
    const character = v[i];

    if(!newString.includes(character)){
      newString = newString.concat(character);
      cost++;
    }
    else{
      newString = newString.concat(character);
    }
    
  }

  return cost;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = stringConstruction(s);

        ws.write(result + "\n");
    }

    ws.end();
}
