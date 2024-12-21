import { createContext, useState, useContext } from 'react';

// criei o contexto do tema
const ThemeContext = createContext(undefined);

// criei e exportei o provider do tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Inicialmente 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// criei e exportei o custom hook do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
