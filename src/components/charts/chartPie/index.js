import React from 'react'
import Chart from 'react-apexcharts'
import './style.css'

import { options, series } from './content'

export function ChartPie() {

  return (
    <Chart
      className="chart-pie"
      options={options}
      series={series}
      type='radialBar'
      width="100%"
    />
  )
}
