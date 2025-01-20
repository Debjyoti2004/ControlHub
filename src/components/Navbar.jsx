import React, { useImperativeHandle } from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from "../data/avatar.jpg"
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/contextsProvider'


const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFun}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-ligh-gray'
    >
      <span style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-3 w-3 right-2 top-2'></span>
        {icon}
    </button>
  </TooltipComponent>

)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, 
    handleClick, screenSize, setScreenSize} = useStateContext()

    useEffect(()=>{
      const hendleResize = ()=>{setScreenSize(window.innerWidth)
      console.log("Inner width is :" + window.innerWidth)
      }
      window.addEventListener('resize',handleClick)
      hendleResize()

      return ()=> window.removeEventListener('resize',handleClick)
    },[])


    useEffect(()=>{
      if(screenSize>=900){
        setActiveMenu(true)
      }else{
        setActiveMenu(false)
      }
    },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFun={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='blue'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
      <NavButton
        title='Cart'
        customFun={() => handleClick('Cart')}
        color='blue'
        icon={<FiShoppingCart />}
      />

      <NavButton
        title='Chat'
        customFun={() => handleClick('Chat')}
        dotColor='#03C9D7'
        color='blue'
        icon={<BsChatLeft />}
      />

      <NavButton
        title='Notification'
        customFun={() => handleClick('Notification')}
        dotColor='#03C9D7'
        color='blue'
        icon={<RiNotification3Line />}
      />
      <TooltipComponent content='profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={()=>handleClick("UserProfile")}>
          <img 
          className='rounded-full w-8 h-8'
          src={avatar}
          />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span>{' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Debjyoti</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'></MdKeyboardArrowDown>


        </div>
      </TooltipComponent>
      {isClicked.Cart && <Cart></Cart>}
      {isClicked.Chat && <Chat></Chat>}
      {isClicked.Notification && <Notification></Notification>}
      {isClicked.UserProfile && <UserProfile></UserProfile>}
      </div>
    </div>
  )
}

export default Navbar