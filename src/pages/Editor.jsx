import React, { useEffect, useState } from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { EditorData } from '../data/dummy';
import { useStateContext } from '../contexts/contextsProvider';


import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-richtexteditor/styles/material.css';

const Editor = () => {
  const { currentMode, currentColor } = useStateContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`mt-24 p-4 m-2 ${currentMode === 'Dark' ? 'bg-secondary-dark-bg' : 'bg-white'} md:m-8 md:p-8 rounded-[2.5rem] shadow-xl dark:shadow-lg dark:shadow-gray-800/20`}>
      <Header category="App" title="Editor" className="mb-6" />
      
      <div className="relative overflow-hidden border border-gray-200 rounded-2xl dark:border-gray-700">
        <RichTextEditorComponent 
          value={EditorData.value}
          height="600px"
          className={`rte-editor ${currentMode === 'Dark' ? 'dark-editor' : ''}`}
        >
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
        
       
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/20 to-white/80 dark:via-gray-900/20 dark:to-gray-900/80" />
      </div>
    </div>
  )
}

export default Editor;