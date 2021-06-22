import React from 'react'
import Chart from 'react-apexcharts'
import './style.css'

import { options, series } from './content'

export function ChartBar() {

  return (
    <Chart
      className="chart-bar"
      options={options}
      series={series}
      type='bar'
      width="100%"
    />
  )
}
