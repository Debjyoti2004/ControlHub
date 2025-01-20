import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/contextsProvider'

import {links} from '../data/dummy'

const SideBar = () => {
   const {activeMenu,setActiveMenu,screenSize}= useStateContext()

   const handleCloseSideBar = ()=>{
    if(activeMenu && screenSize<=900){
      setActiveMenu(false)
    }
   }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-blue-500 text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-450 dark:hover:text-black hover:bg-gray-200 m-2'
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className=' flex justify-between items-center'>
        <Link to="/" onClick={handleCloseSideBar} className='items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-tighter
         text-slate-900 white:text-dark'>
        <SiShopware size={32}/> <samp>ControlHub</samp>
        </Link>
        <TooltipComponent content="Menu" position='BottomCenter'>
          <button type='button' onClick={()=>setActiveMenu((prvActiveMenu)=>!prvActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
            <MdOutlineCancel></MdOutlineCancel>
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10'>
        {links.map((item)=>(
          <div key={item.title}>
            <p className=' text-gray-400 m-3 mt-4 uppercase'>
            {item.title}
            </p>
            {item.links.map((link)=>(
              <NavLink to={
                `${link.name}`} 
                key={link.name}
                onClick={handleCloseSideBar}
                className={({isActive})=>
                isActive ? activeLink : normalLink}
                >
                {link.icon}
                <span className='capitalize'>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </>)}
    </div>
  )
}

export default SideBar