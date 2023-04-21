import React, { createContext, useContext, useMemo, useState } from 'react';
import { themes } from './themes';

const initialState = {};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState(themes.light);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = (): any => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a ThemeProvider');
  }
  return context;
};
