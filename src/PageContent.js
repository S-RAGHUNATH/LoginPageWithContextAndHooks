import React, {  useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function PageContent(props){    
    const {isDarkmode} = useContext(ThemeContext)
    
        const styles = {
            backgroundColor : isDarkmode? 'black': 'white', 
            height: '100vh', width: '100wh'
        };
        return <div style={styles}>{props.children}</div>
    
}
export default PageContent