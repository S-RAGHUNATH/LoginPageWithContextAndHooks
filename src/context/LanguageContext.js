import React, { createContext, useState } from "react";

export const LanguageContext = createContext()
export function LanguageProvider(props){  //no export default
 const [language, setLanguage] = useState("spanish")
 const changeLanguage = e => setLanguage(e.target.value)

 return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
        {props.children}
    </LanguageContext.Provider>
 )
}