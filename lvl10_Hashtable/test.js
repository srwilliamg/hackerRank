"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let result = true;
  let words = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!words[magazine[i]]) {
      words[magazine[i]] = 1;
    } else {
      words[magazine[i]]++;
    }
  }

  for (let i = 0; i < note.length; i++) {
    if (words[note[i]]) {
      words[note[i]]--;
      if (words[note[i]] <= 0) {
        delete words[note[i]];
      }
    }
    else{
        result = false;
        break;
    }
  }

  console.log(result ? `Yes` : `No`);
}

function main() {
  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(" ");

  const note = readLine().split(" ");

  checkMagazine(magazine, note);
}
