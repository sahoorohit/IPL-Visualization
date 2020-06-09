function extraaRunsByTeam(matches, deliveries) {
  const result = {};
  const matchIds = [];


  // getting match ids of 2015
  for (let match of matches) {
    const season = match.season;
    if (season == 2016){
      matchIds.push(match.id);
    }
  }


  for (let deli of deliveries){
    const id = deli.match_id;
    if(matchIds.includes(id)){
      const bowlingTeam = deli.bowling_team;
      const extraRun = parseInt(deli.extra_runs);

      if (result[bowlingTeam]) {
        result[bowlingTeam] += extraRun;
      } else {
        result[bowlingTeam] = extraRun;
      }
    }
  }

  // console.log(result);
  return result;
}

module.exports = extraaRunsByTeam;