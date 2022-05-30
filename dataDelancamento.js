const lab1elslancamento = [
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
  
  const datalancamento = {
    labels: lab1elslancamento,
    datasets: [{
      label: [],
      backgroundColor: ['#03071e', '#370617', '#6a040f', '#9d0208','#d00000', '#dc2f02','#e85d04', '#f48c06','#faa307'],
      borderColor: 'rgb(255, 99, 132)',
      data: [1,1,2,1,3,1,3,5,6,32,45,83,144,127,135,170,178,249,267,336,351,362,117],
    }]
  };

  const configlancamento = {
    type: 'bar',
    data: datalancamento,
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Quantidade de jogos lançados por ano '
        }
    }
    }
  };

  const datalancamentos = new Chart(
    document.getElementById('datadelancamento'),
    configlancamento
  );