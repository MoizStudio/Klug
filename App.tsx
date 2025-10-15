import React, { useState, useEffect } from 'react';
import { EditorPage } from './components/EditorPage';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // The EditorPage is now the main entry point of the application.
  return <EditorPage theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
