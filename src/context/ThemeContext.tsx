import React, { createContext, useContext, ReactNode } from 'react';

// Define theme colors
export const theme = {
  colors: {
    darkGreen: '#2e2e2e',
    green: '#4682b4',
    lightGreen: '#5ca3d6',
    paleGreen: '#e8f4ff',
    beige: '#ffffff',
    white: '#ffffff',
    darkText: '#2e2e2e',
    lightText: '#ffffff',
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