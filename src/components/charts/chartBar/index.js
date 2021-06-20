import React from 'react'
import Chart from 'react-apexcharts'

import { options, series } from './content'

export function ChartBar() {

  return (
    <Chart
      options={options}
      series={series}
      type='bar'
      width="100%"
    />
  )
}
