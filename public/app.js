function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeExtraaRunsByTeams2016(data.extraaRunsByTeams);
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