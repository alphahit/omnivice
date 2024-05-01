/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext({
  isDarkMode: false,
  setTheme: (theme) => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  useEffect(() => {
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);

  const setTheme = (theme) => {
    console.log("theme==> " + theme);
    console.log("Changing Them")
    setIsDarkMode(theme === 'dark');
  };

  const value = useMemo(
    () => ({
      isDarkMode,
      setTheme,
    }),
    [isDarkMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
