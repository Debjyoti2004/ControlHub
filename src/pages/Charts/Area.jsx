import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/contextsProvider'

import { Header } from '../../components'




const Area = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='pt-36'>
    <div className='p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='chart' title="Inflation Rate In Percentage" ></Header>

      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? '#33373E' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
    </div>
  )
}

export default Area