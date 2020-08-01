const https = require("https");
let url_score = `https://jsonmock.hackerrank.com/api/football_matches`;
let url_winner = `https://jsonmock.hackerrank.com/api/football_competitions`;
async function getNumDraws(competition, year) {

    await getWinner(competition, year)
        .then(async winner => {
            console.log(winner);
            // return resp;

            let scoreAsTeam1 = await getScore(competition, year, 0, winner);
            let scoreAsTeam2 = await getScore(competition, year, 0, winner, false);
            let pagesAsTeam1 = scoreAsTeam1[1];
            let pagesAsTeam2 = scoreAsTeam2[1];

            let Score = [];

            let current_page = 1;
            while (current_page <= pagesAsTeam1) {
                Score.push(getScore(competition, year, current_page, winner));
                current_page++;
            }

            current_page = 1;
            while (current_page <= pagesAsTeam2) {
                Score.push(getScore(competition, year, current_page, winner, false));
                current_page++;
            }

            await Promise.all(Score).then(arr => {
                console.log(arr);
                let answer = arr.reduce((accumulator, currentValue) => accumulator+currentValue[0], scoreAsTeam1[0]+scoreAsTeam2[0]);
                console.log(answer);
                return answer;
            });
            // })
            // .catch(err => {
            //   console.log(err);
        });

}

function getWinner(competition, year) {
    let url = `${url_winner}?name=${competition}&year=${year}`;
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let response = "";

            res.on("data", chunk => {
                response += chunk;
            });

            res.on("end", () => {
                console.log(response);
                resolve(JSON.parse(response).data[0].winner);
            });
        });
    });
}

function getScore(competition, year, page, team, asTeam1 = true) {
    let url = "";

    if (asTeam1) {
        url = `${url_score}?competion=${competition}&year=${year}&team1=${team}&page=${page}`;
    }
    else {
        url = `${url_score}?competion=${competition}&year=${year}&team2=${team}&page=${page}`;
    }

    return new Promise((resolve, reject) => {
        https.get(url, resp => {
            let data = "";

            resp.on("data", chunk => (data += chunk));

            resp.on("end", () => {
                let response = JSON.parse(data);
                let scoreAsTeam1 = response.data.reduce((a, v) => {
                    let goal = asTeam1 ? parseInt(v.team1goals) : parseInt(v.team2goals);
                    return a + goal;
                }, 0);
                resolve([scoreAsTeam1, response.total_pages]);
            });
        });
    });
}

getNumDraws(`UEFA Champions League`, 2011);