function economicalBowlerIn2015(matches, deliveries) {
  const result = [];
  var matchIds = [];

  // getting match ids of 2015
  for (let match of matches) {
    const season = match.season;
    if (season == 2015){
      matchIds.push(match.id);
    }
  }

  // getting bowler name and runs 
  for (let deli of deliveries){
    const id = deli.match_id;
    if(matchIds.includes(id)){
      const bowler = deli.bowler;
      const ball = parseInt(deli.ball);
      const run = parseInt(deli.total_runs);

      if(result[bowler]){   
        if(ball <= 6)
          result[bowler].ball += 1;
        result[bowler].run += run;
      }else {
        result[bowler] = {
          "run": run,
          "ball": 1
        }
      }
    }
  }

  // console.log(result);
  // claculating bowler economy 
  let bowlerEconomy = {};
  for(let bowler in result) {
    bowlerEconomy[bowler] = (result[bowler].run * 6)/ result[bowler].ball;
  }

  // sorting according ascending order of economy 
  var sorteBowlerEconomy = [];
  for (var bowler in bowlerEconomy) {
    sorteBowlerEconomy.push([bowler, bowlerEconomy[bowler]]);
  }
  
  sorteBowlerEconomy.sort(function(a, b) {
      return a[1] - b[1];
  });

  // slicing first 10 bowler and converting into an object 
  let finalResult = {};
  sorteBowlerEconomy.slice(0, 10).forEach(function(item){
    finalResult[item[0]] = item[1];
  })

  // console.log(finalResult);
  return finalResult;
}

module.exports = economicalBowlerIn2015;