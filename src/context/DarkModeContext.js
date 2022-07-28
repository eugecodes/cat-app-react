import React, {createContext, useState} from 'react'
const DarkModeContext = createContext();
function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(false)
    const ToggleDarkMode = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    return(
        <div>
            <DarkModeContext.Provider value={{darkMode, ToggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}
export {DarkModeContext, DarkModeProvider}