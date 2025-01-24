import React, { useEffect, useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import avatar from "../data/avatar.jpg"
import { Cart, Chat, Notification, UserProfile } from "."
import { useStateContext } from "../contexts/contextsProvider"

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFun}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-ligh-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-3 h-3 rounded-full right-2 top-2"
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext()

  const navbarRef = useRef(null)

  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsClicked({
          Cart: false,
          Chat: false,
          Notification: false,
          UserProfile: false,
        })
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [setIsClicked])

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [setScreenSize])

  useEffect(() => {
    if (screenSize >= 900) {
      setActiveMenu(true)
    } else {
      setActiveMenu(false)
    }
  }, [screenSize, setActiveMenu])


  const toggleSection = (section) => {
    setIsClicked((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }


  return (
    <div ref={navbarRef} className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFun={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFun={() => toggleSection("Cart")} 
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFun={() => toggleSection("Chat")} 
          dotColor="#03C9D7"
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFun={() => toggleSection("Notification")}
          dotColor="#03C9D7"
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => toggleSection("UserProfile")} 
          >
            <img className="w-8 h-8 rounded-full" src={avatar} alt="User avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="ml-1 font-bold text-gray-400 text-14">Debjyoti</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.Cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.Notification && <Notification />}
        {isClicked.UserProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
