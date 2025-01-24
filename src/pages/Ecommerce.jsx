import React from 'react'
import { FaCircle } from "react-icons/fa"

import { Stacked, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData } from '../data/dummy'
import { useStateContext } from '../contexts/contextsProvider'

const Ecommerce = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center lg:flex-nowrap'>
      <div className='relative w-full p-6 m-3 overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 h-52 rounded-2xl lg:w-80 group hover:shadow-xl'>

{/* Glowing Background Effect */}
<div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-purple-900/10 dark:to-blue-900/10" />

{/* Subtle Dynamic Pattern */}
<div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]" />

{/* Elegant Currency Icon */}
<div className="absolute right-5 top-5 opacity-90">
  <svg 
    className="w-20 h-20 transition-all duration-500 text-blue-400/80 dark:text-purple-300/80 group-hover:rotate-12"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="32" cy="32" r="24" className="opacity-20" />
    <path d="M32 16v32m8-24h10M24 40H14m28-12l6 6m-28 0l6-6m28-12l-6 6M14 28l6 6" />
  </svg>
</div>

{/* Animated Growth Line */}
<div className="absolute bottom-0 left-0 w-full h-16 opacity-20 dark:opacity-10">
  <svg viewBox="0 0 500 100" className="w-full h-full">
    <path 
      d="M0 80 Q 125 10 250 60 T 500 30" 
      stroke="currentColor" 
      fill="none" 
      strokeWidth="2"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      className="text-blue-300 dark:text-purple-400 animate-draw"
    />
  </svg>
</div>

{/* Content Section */}
<div className="relative z-20 flex flex-col justify-between h-full">
  <div>
    <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-300">
      Total Earnings
    </p>
    <p className="mt-1 text-3xl font-bold text-gray-800 dark:text-white">
      $63,448<span className="text-xl text-gray-500 dark:text-gray-300">.78</span>
    </p>
  </div>

  {/* Enhanced Button with Icon */}
  <div className="mt-4">
  <button 
    className="flex items-center space-x-2 px-4 py-2.5 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
    style={{ 
      backgroundColor: currentColor,
      // For better hover effect, you can add:
      transition: 'background-color 0.3s ease, transform 0.3s ease'
    }}
  >
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    <span className="font-medium">Download Report</span>
  </button>
</div>
</div>

{/* Subtle Shimmer Effect */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute transform -rotate-45 -inset-12 opacity-30 dark:opacity-10 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
</div>
</div>
        <div className='flex flex-wrap items-center justify-center gap-1 m-3'>
          {earningData.map((item) => (
            <div
              key={item.title} className='p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl '
            >
              <button type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='mt-1 text-sm text-gray-400'>{item.title}</p>

            </div>
          ))}
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='p-4 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 '>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span>
                    <FaCircle style={{ fontSize: '8px' }} />
                  </span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span>
                    <FaCircle style={{ fontSize: '8px' }} />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
              <div className='pr-10 m-4 border-r-1 border-color'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$85,456</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 m-2 text-xs'>20%</span>
                  </p>
                  <p className='ml-1 text-gray-500'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>$39,456</span>
                  </p>
                  <p className='ml-1 text-gray-500'>Expense</p>
                </div>
                <div className='mt-5'>
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  ></SparkLine>
                </div>
                <div className='mt-10'>
                  <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px'
                  />
                </div>
              </div>
              <div>
                <Stacked width='320px' height="360px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce