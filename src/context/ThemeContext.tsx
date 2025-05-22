import React, { createContext, useContext, ReactNode } from 'react';

// Define theme colors
export const theme = {
  colors: {
    darkGreen: '#075e54',
    green: '#128c7e',
    lightGreen: '#25d366',
    paleGreen: '#dcf8c6',
    beige: '#ece5dd',
    white: '#ffffff',
    darkText: '#1a1a1a',
    lightText: '#f8f8f8',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  }
};

type ThemeContextType = typeof theme;

const ThemeContext = createContext<ThemeContextType>(theme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};