import React,{ createContext, useState } from "react";
import useToggle from "../hooks/useToggleState"; //two dots

export const ThemeContext = createContext() //EXPORT THIS ALSO
export function ThemeProvider(props){  //no export default
 const [isDarkmode, toggleTheme] = useToggle(false)
 

 return (
    <ThemeContext.Provider value={{isDarkmode, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
 )
}