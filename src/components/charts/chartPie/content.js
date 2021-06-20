export const options = {
  labels: ["Pasteis", "Pizzas", "Hambúrgueres", "Bebidas", "Doces"],
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
  ]
}

export const series = [44, 55, 13, 43, 22]
