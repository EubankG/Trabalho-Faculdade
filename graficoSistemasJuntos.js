const labelsj = [
   'windows-mac-linux',
   'windows-mac',
   'windows-linux',
  ];
  
  const dataj = {
    labels: labelsj,
    datasets: [{
      label: 'Gráfico de jogos feitos para mais de um sistemas operacional',
      backgroundColor: ['#c1121f','#780000','#8ac926'],
      borderColor: 'rgb(255, 199, 132)',
      data: [9246,6878,1220],
    }]
  };

  const configj = {
    type: 'bar',
    data: dataj,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('sistemasJuntoss'),
    configj
  );