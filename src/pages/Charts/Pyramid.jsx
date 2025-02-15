import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts'

import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../contexts/contextsProvider'
import { ChartsHeader } from '../../components'

const Pyramid = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='mt-36'>
      <div className="p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
        <div className="w-full">
          <AccumulationChartComponent
            id="pyramid-chart"
            legendSettings={{ background: 'white' }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name="Food"
                dataSource={PyramidData}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.03}
                explode
                emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                }}
              />
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  )
}

export default Pyramid;