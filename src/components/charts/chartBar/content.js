export const options = {
  chart: {
    id: "basic-bar",
    animations: {
      speed: 200
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      distributed: false
    }
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995]
  },
  fill: {
    colors: ['#F05B5F', '#FECA42']
  },
}

export const series = [
  {
    name: "Mes atual",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    name: "Mês anterior",
    data: [20, 45, 32, 44, 47, 50, 60, 87],
  },
];

 
