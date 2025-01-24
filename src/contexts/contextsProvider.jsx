import React, { createContext, useContext, useState, useEffect } from "react"

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState("#03C9D7")
  const [currentMode, setCurrentMode] = useState("Light")
  const [themeSettings, setThemeSettings] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode")
    const savedColor = localStorage.getItem("colorMode")

    if (savedMode) {
      setCurrentMode(savedMode)
      document.body.className = savedMode
    }

    if (savedColor) {
      setCurrentColor(savedColor)
      document.documentElement.style.setProperty("--current-color", savedColor)
    }
  }, [])

  const setMode = (e) => {
    const newMode = e.target.value
    setCurrentMode(newMode)
    localStorage.setItem("themeMode", newMode)
    document.body.className = newMode
    setThemeSettings(false)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem("colorMode", color)
    document.documentElement.style.setProperty("--current-color", color)
    setThemeSettings(false)
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
