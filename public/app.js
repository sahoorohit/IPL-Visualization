function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraaRunsByTeams2016(data.extraaRunsByTeams);
  visualizeEconomicalBowler2015(data.economicalBowler2015);
  visualizematchesWonByTeamsEachVenue(data.matchesWonByTeamsEachVenue);

  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Total number of matches played each year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y: f}',
          y: 30,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  });
}


//===============================================
function visualizeExtraaRunsByTeams2016(extraaRunsByTeams) {
  const seriesData = [];
  for (let team in extraaRunsByTeams) {
    seriesData.push([team, extraaRunsByTeams[team]]);
  }

  Highcharts.chart("extraa-runs-by-teams-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra runs conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y: f}',
          y: 30,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  });
}


function visualizeEconomicalBowler2015(economicalBowler2015) {
  const seriesData = [];
  for (let team in economicalBowler2015) {
    seriesData.push([team, economicalBowler2015[team]]);
  }

  Highcharts.chart("economical-bowler-of-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economical Bowlers in 2015 season"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y: .2f}',
          y: 30,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  });
}


function visualizeMatchesWonByEachTeam(matchesWonByEachTeam){
  const categories = [];
  const teams = [];
  const seriesData = [];

  for (let year in matchesWonByEachTeam){
    categories.push(year);
    for (let team in matchesWonByEachTeam[year]){
      if (!teams[team])
      teams[team] = [];
    }
  }

  // console.log(categories);

  for (let team in teams){
    categories.map(function(year){
      if(!matchesWonByEachTeam[year][team])
        teams[team].push(0);
      else 
        teams[team].push(matchesWonByEachTeam[year][team]);
    }) 
  }

  // console.log(teams);

  for (let team in teams){
    let ele = {};
    ele.name = team;
    ele.data = teams[team];
    seriesData.push(ele);
  }

  // console.log(seriesData);

  Highcharts.chart('matches-won-by-each-team', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2. Number of matches won by each team over all the years of IPL'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
  });
}


function visualizematchesWonByTeamsEachVenue(matchesWonByTeamsEachVenue){
  const categories = [];
  const teams = [];
  const seriesData = [];

  for (let venue in matchesWonByTeamsEachVenue){
    categories.push(venue);
    for (let team in matchesWonByTeamsEachVenue[venue]){
      if (!teams[team])
      teams[team] = [];
    }
  }

  // console.log(categories);

  for (let team in teams){
    categories.map(function(venue){
      if(!matchesWonByTeamsEachVenue[venue][team])
        teams[team].push(0);
      else 
        teams[team].push(matchesWonByTeamsEachVenue[venue][team]);
    }) 
  }

  // console.log(teams);

  for (let team in teams){
    let ele = {};
    ele.name = team;
    ele.data = teams[team];
    seriesData.push(ele);
  }

  // console.log(seriesData);

  Highcharts.chart('matches-won-by-teams-each-venue', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5. Story: Matches Won by each team per venue'
    },
    xAxis: {
        categories: categories
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won vs stadium'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: seriesData
});

}