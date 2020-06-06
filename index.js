const fs = require("fs");
const csv = require("csvtojson");

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const extraaRunsByTeams = require("./ipl/extraaRunsByTeams");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";

const JSON_OUTPUT_FILE_PATH = "./public/data.json";


function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      let result3 = extraaRunsByTeams(matches);

      const jsonData = {
        matchesPlayedPerYear: result,
        extraaRunsByTeams: result3
      };
      saveData(jsonData);
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