function drawCloud(whr_ladder_data) {
  const leastHappyCountry = whr_ladder_data
    .sort((a, b) => a.HappinessScore - b.HappinessScore)
    .slice(0, 10);

  const mostHappyCountry = whr_ladder_data
    .sort((a, b) => {
      a.HappinessScore + b.HappinessScore;
      if (a.HappinessScore > b.HappinessScore) {
        return -1;
      } else {
        return 1;
      }
    })
    .slice(0, 10);
  
    console.log(leastHappyCountry);
    console.log(mostHappyCountry);

  const leastData = [
    {
      x: leastHappyCountry.map((data) => data.HappinessScore),
      y: leastHappyCountry.map((data) => data.Country),
      type: 'bar',
      orientation: 'h',
      // text: leastHappyCountry.map((data) => data.HappinessScore,2),
      // textposition: 'auto',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rgb(255,255,255)',
          width: 1.0,
        },
      },
    },
  ];

  const mostData = [
    {
      x: mostHappyCountry.map((data) => data.HappinessScore),
      y: mostHappyCountry.map((data) => data.Country),
      type: 'bar',
      orientation: 'h',
      // text: mostHappyCountry.map((data) => data.HappinessScore,2),
      // textposition: 'auto',
      marker: {
        color: 'rgb(222,45,38,0.8)',
        opacity: 0.6,
        line: {
          color: 'rgb(222,45,38,0.8)',
          width: 1.0,
        },
      },
    },
  ];

  const layout1 = {
    margin: {
      t: 40,
      l: 150,
    },
    // width: 600,
    // height: 500,
    title: {
      text: '10 Least Happy Countries',
    },
    yaxis: {
      autorange: 'reversed',
    },
  };

  const layout2 = {
    margin: {
      t: 40,
      l: 150,
    },
    // width: 600,
    // height: 500,
    title: {
      text: '10 Most Happy Countries',
    },
    yaxis: {
      autorange: 'reversed',
    },
  };

  Plotly.newPlot('cloud-least', leastData, layout1, { responsive: true });
  Plotly.newPlot('cloud-most', mostData, layout2, { responsive: true });

  
}