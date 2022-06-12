import React, {createContext, useReducer} from 'react';
import { ThemeReducer } from '../reducers/ThemeReducer';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [isDarkTheme, dispatch] = useReducer(ThemeReducer, false)
  return(
    <ThemeContext.Provider value={{dispatch, isDarkTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider;
