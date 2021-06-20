import React from 'react'
import Chart from 'react-apexcharts'

import { options, series } from './content'

export function ChartPie() {

  return (
    <Chart
      options={options}
      series={series}
      type='pie'
      width="100%"
    />
  )
}
