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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  // console.log(isItAnagram("fai", "fao"));
  let count = 0;
  let v = s.split("");
  let substrings = {};

  for (let i = 0; i < v.length; i++) {
    for (let j = i+1; j <= v.length; j++) {
      const subs = s.substring(i,j).split("").sort().join("");
      if(substrings.hasOwnProperty(subs)){
        substrings[subs]++;
      }
      else{
        substrings[subs] = 1;
      }
    }
  }

  let values = Object.values(substrings);

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    count += Math.floor(value*(value-1)/2);
    
  }

  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
