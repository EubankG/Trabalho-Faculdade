const labelsjogos = [
    'Action;Free to Play',
    'Action',
    'Action;Adventure',
    'Action;RPG',
    'RPG',
    'Action;Free to Play;Strategy',
    'Action;Indie',
    'Indie;Simulation',
    'Adventure;Indie',
    'Action;Adventure;Indie'


  ];
  
  const datajogos = {
    labels: labelsjogos,
    datasets: [{
      label: [
        'Red',
        
    ],
      backgroundColor: ['#03071e', '#370617', '#6a040f', '#9d0208','#d00000', '#dc2f02','#e85d04', '#f48c06','#faa307'],
      borderColor: 'rgb(255, 99, 132)',
      data: [7514038, 6088756, 4035742, 2062390, 1877678, 1743008, 1743008,1467740,1333694],
    }]
  };

  const configjogos = {
    type: 'bar',
    data: datajogos,
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Gráfico com generos mais jogados '
        }
    }
    }
  };

  const jogos = new Chart(
    document.getElementById('EstilosMaisJogados'),
    configjogos
  );