import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from './contexts/contextsProvider.jsx';

import { Navbar, Footer, SideBar, ThemeSettings } from './components/index.jsx'
import {
  Ecommerce, Orders, Calendar, Editor, Stacked, Pyramid, Customers,
  Kanban, Area, Bar, ColorMapping, ColorPicker,
  Employees, Line
} from './pages/index.jsx'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg ">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar'>
              <Navbar></Navbar>
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />}></Route>
                <Route path='/ecommerce' element={<Ecommerce />}></Route>

                {/* pages */}
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/employees' element={<Employees />}></Route>
                <Route path='/customers' element={<Customers />}></Route>

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />}></Route>
                <Route path='/editor' element={<Editor />}></Route>
                <Route path='/calendar' element={<Calendar />}></Route>
                <Route path='/color_picker' element={<ColorPicker />}></Route>

                {/* Charts */}
                <Route path='/Line' element={<Line />}></Route>
                <Route path='/area' element={<Area />}></Route>
                <Route path='/bar' element={<Bar />}></Route>
                <Route path='/color_mapping' element={<ColorMapping />}></Route>
                <Route path='/pyramid' element={<Pyramid />}></Route>
                <Route path='/stacked' element={<Stacked />}></Route>

              </Routes>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App