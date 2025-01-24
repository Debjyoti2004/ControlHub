import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'
import { motion } from 'framer-motion'

const change = (args) => {
  const preview = document.getElementById('preview')
  if (preview) {
    preview.style.backgroundColor = args.currentValue.hex
    preview.style.boxShadow = `0 8px 32px ${args.currentValue.hex}33`
  }
}

const CustomColorPicker = ({ id, mode }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="relative">
    <ColorPickerComponent 
      id={id} 
      mode={mode} 
      modeSwitcher={false} 
      inline 
      showButtons={false} 
      change={change}
      cssClass="custom-picker"
    />
  </motion.div>
)

const ColorPicker = () => (
  <div className="mt-12 md:mt-18">
    <div className="p-6 m-2 bg-white dark:bg-secondary-dark-bg md:m-8 md:p-8 rounded-[2.5rem] shadow-xl dark:shadow-lg dark:shadow-gray-800/20 transition-colors duration-300">
      <Header category="App" title="Color Picker" className="mb-8" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12 text-center"
      >
        {/* Color Preview */}
        <div className="flex items-center justify-center">
          <div 
            id="preview"
            className="flex items-center justify-center w-32 h-32 transition-all duration-500 border-2 border-gray-100 shadow-lg rounded-2xl dark:border-gray-700"
          >
            <span className="px-2 py-1 text-xs font-semibold text-gray-600 rounded-md dark:text-gray-300 bg-white/50 dark:bg-black/30 backdrop-blur-sm">
              Selected Color
            </span>
          </div>
        </div>

        {/* Picker Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 transition-shadow duration-300 shadow-sm bg-white/80 dark:bg-secondary-dark-bg/80 rounded-3xl backdrop-blur-sm hover:shadow-md"
          >
            <h3 className="mb-6 text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
              Palette Mode
            </h3>
            <CustomColorPicker id="inline-palette" mode="Palette" />
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-8 transition-shadow duration-300 shadow-sm bg-white/80 dark:bg-secondary-dark-bg/80 rounded-3xl backdrop-blur-sm hover:shadow-md"
          >
            <h3 className="mb-6 text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
              Picker Mode
            </h3>
            <CustomColorPicker id="inline-picker" mode="Picker" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
)

export default ColorPicker

