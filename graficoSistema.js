const labelss = [
    'windows',
    'mac',
    'linux'
  ];
  
  const datas = {
    labels: labelss,
    datasets: [{
      label: [],
      backgroundColor: 'rgb(255, 199, 132)',
      borderColor: '#00bbf9',
      data: [36796,6,2],
    }]
  };
  
  const configs = {
    type: 'bar',
    data: datas,
    options: {}
  };
  
  
  const unicos = new Chart(
    document.querySelector('#sistemasUnidos'),
    configs
  );
