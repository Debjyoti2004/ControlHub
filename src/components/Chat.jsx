import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { Button } from '.'
import { chatData } from '../data/dummy'
import { useStateContext } from '../contexts/contextsProvider'

const Chat = () => {
  const { currentColor } = useStateContext()

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <p className="text-lg font-semibold dark:text-gray-200">Messages</p>
          <button type="button" className="p-1 px-2 text-xs text-white rounded bg-orange">
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 p-3 leading-8 cursor-pointer border-b-1 border-color">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute right-0 inline-flex w-2 h-2 rounded-full -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  )
}

export default Chat