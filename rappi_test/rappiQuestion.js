const chalk = require("chalk");
function findMinActivatedFountain(locations) {
    let n = locations.length;
    let interval = [];
    interval.length = n;
    interval.fill(0);
    let count = 1;

    for (let i = 1; i <= n; i++) {
        let left = max(i, locations[i-1]);
        let right = min(i, locations[i-1], n);
        // console.log(chalk.blueBright("index: "+(i)),"value:",locations[i-1]);
        // console.log(chalk.green("MAX:"+left),chalk.blue("MIN:"+right));
        interval[left - 1] = right;
        // console.log(chalk.red(interval));
    }

    // console.log(chalk.magenta(interval));

    let right = interval[0];
    let currMax = right;
    for (let i = 1; i < n; i++) {
        // console.log(right, currMax);
        currMax = Math.max(currMax, interval[i]);
        if (i == right) {
            // console.log(chalk.redBright(i,right));
            count++;
            right = currMax;
        }
    }
    return count;

}

function max(index, location){
    return Math.max(index - location, 1);
}

function min(index, location, n){
    return Math.min(index + location, n);
}


console.log(chalk.bold.greenBright(findMinActivatedFountain([0,0,0,3,0,0,2,0,0])));
console.log(chalk.bold.blueBright(findMinActivatedFountain([3,0,2,0,1,0])));
console.log(chalk.bold.cyanBright(findMinActivatedFountain([2,0,0,0,0])));
console.log(chalk.bold.yellowBright(findMinActivatedFountain([1,2,1])));
console.log(chalk.bold.whiteBright(findMinActivatedFountain([0,1,0])));