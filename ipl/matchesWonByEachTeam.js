function matchesWonByEachTeam(matches) {
  const result = {};

  for (let match of matches) {
    const season = match.season;
    let winner = match.winner;
    if(winner === "")
        winner = "no result";

    if (result[season]) {
      if(result[season][winner]) {
        result[season][winner] += 1;
      } else{
        result[season][winner] = 1;
      }

    } else {
      result[season] = {};
      result[season][winner] = 1;
    }
  }

  // console.log(result);
  return result;
}

module.exports = matchesWonByEachTeam;