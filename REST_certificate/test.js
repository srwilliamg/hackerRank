const https = require("https");
const { log } = require("console");
let base_url = `https://jsonmock.hackerrank.com/api/football_matches`;
async function getNumDraws(year) {
    let draws = [];

    for (let i = 0; i < 10; i++) {
      draws.push(getDrawPerScore(year, i));
    }

    let answer  = 0;
    await Promise.all(draws).then(arr => {
      if(arr.length != 0){
        answer = arr.reduce( (accumulator, currentValue) => accumulator+currentValue);
      }
    });
    
    return answer;
}

function getDrawPerScore(year, drawValue) {
  let url = `${base_url}?year=${year}&team1goals=${drawValue}&team2goals=${drawValue}`;
  return new Promise((resolve, reject) => {
    https.get(url, resp => {
      let data = "";
      resp.on("data", chunk => (data += chunk));
      resp.on("end", () => resolve(JSON.parse(data).total));
    });
  });
}

getNumDraws(2011).then(resp=>console.log(resp));