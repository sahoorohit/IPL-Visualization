const fs = require("fs");
const csv = require("csvtojson");

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const extraaRunsByTeams = require("./ipl/extraaRunsByTeams");
const economicalBowlerIn2015 = require("./ipl/economicalBowlerIn2015");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const matchesWonByTeamsEachVenue = require("./ipl/matchesWonByTeamsEachVenue");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

const JSON_OUTPUT_FILE_PATH = "./public/data.json";


function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      let result2 = matchesWonByEachTeam(matches);
      let result5 = matchesWonByTeamsEachVenue(matches);
      
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result3 = extraaRunsByTeams(matches, deliveries);
          let result4 = economicalBowlerIn2015(matches, deliveries);

          const jsonData = {
            matchesPlayedPerYear: result,
            matchesWonByEachTeam: result2,
            extraaRunsByTeams: result3,
            economicalBowler2015: result4,
            matchesWonByTeamsEachVenue: result5
          };
          saveData(jsonData);
        });          
    });
}

function saveData(jsonData) {
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();

function print(arg){
  console.log(arg);
}