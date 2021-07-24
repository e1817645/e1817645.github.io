const barLabels = ['アメリカ', '中国', 'インド', 'ロシア', 'サウジアラビア', 'フランス', 'ドイツ'];
const barData = {
  labels: barLabels,
  datasets: [{
    label: '世界の軍事費2020年度－上位7カ国（値はドル）',
    data: [7320, 2610, 711, 651, 619, 501, 493],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  var barChart = new Chart(
    // document.getElementById('barChart'),
    $('#barChart'),
    barConfig,
);