function extraaRunsByTeam(matches) {
  const result = {};
  for (let match of matches) {
    const season = match.season;

    if (season == 2016){
      const winner = match.winner;
      const run = parseInt(match.win_by_runs);
      if (result[winner]) {
        result[winner] += run;
      } else {
        result[winner] = run;
      }
    }
    
  }
  return result;
}

module.exports = extraaRunsByTeam;