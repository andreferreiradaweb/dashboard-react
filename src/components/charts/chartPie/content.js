export const options = {
  labels: ["Comibas", "Bebidas"],
  theme: {
    monochrome: {
      enabled: false
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%"
        },
        legend: {
          show: false
        }
      }
    }
  ],
  fill: {
    colors: ['#F05B5F', '#FECA42']
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
        },
        value: {
          show: true,
          fontSize: '14px',
          formatter: function (val) {
            return val + '%'
          }
        },
        total: {
          show: true,
          label: 'Total'
        }
      }
    }
  }
}

export const series = [45, 55]
