const labelsj = [
   'windows-mac-linux',
   'windows-mac',
   'windows-linux',
  ];
  
  const dataj = {
    labels: labelsj,
    datasets: [{
      label: [],
      backgroundColor: ['#c1121f','#780000','#8ac926'],
      borderColor: 'rgb(255, 199, 132)',
      data: [9246,6878,1220],
    }]
  };

  const configj = {
    type: 'bar',
    data: dataj,
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Gráfico dos jogos feitos para mais de um sistemas operacional'
        }
    }
    }
  };

  const myChart = new Chart(
    document.getElementById('sistemasJuntoss'),
    configj
  );