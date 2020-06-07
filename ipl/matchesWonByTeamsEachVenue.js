function matchesWonByTeamsEachVenue(matches){
  const result = {};

  for (let match of matches) {
    const venue = match.venue;
    let winner = match.winner;
    if(winner === "")
        winner = "no result";

    if (result[venue]) {
      if(result[venue][winner]) {
        result[venue][winner] += 1;
      } else{
        result[venue][winner] = 1;
      }

    } else {
      result[venue] = {};
      result[venue][winner] = 1;
    }
  }

  // console.log(result);
  return result;
}
module.exports = matchesWonByTeamsEachVenue;