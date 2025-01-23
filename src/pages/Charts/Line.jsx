import React from 'react'
import { Header, ChartsHeader, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='pt-36'>
      <div className='p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='chart' title="Inflation Rate" ></Header>
        <div className='w-full'>
          <LineChart></LineChart>
        </div>
      </div>
    </div>
  )
}

export default Line