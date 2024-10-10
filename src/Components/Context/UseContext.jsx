import { createContext, useState } from "react";

const DarkModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [DarkMode, SetDarkMode] = useState('light');  

  const ToggleDarkMode = () => { 
    SetDarkMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));  
  };

  return (
    <DarkModeContext.Provider value={{ DarkMode, ToggleDarkMode }}> 
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, ModeProvider };
