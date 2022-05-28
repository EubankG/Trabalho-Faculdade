const lab1elsprice = [
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019'


  ];
  
  const dataprice = {
    labels: lab1elsprice,
    datasets: [{
      label: [
        'Red',
        
    ],
      backgroundColor: ['#03071e'],
      borderColor: 'rgb(255, 99, 132)',
      data: [12,14,8,22,16,16,10,22,14,138,161,86,182,180,236,236,264,291,445,575, 1584 , 1132 , 1101 , 1101],
    }]
  };

  const configprice = {
    type: 'line',
    data: dataprice,
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Maiores preços de jogos lançados por anos '
        }
    }
    }
  };

  const price = new Chart(
    document.getElementById('oi'),
    configprice
  );